import logging
from machine import Machine
from database import ExploitDB

logging.basicConfig(
    level=logging.DEBUG,
    format='%(levelname)s [%(asctime)s] %(filename)s:%(lineno)d - %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S'
)

exploits = ExploitDB()

data = [
    ("2.3.4", "exploit/unix/ftp/vsftpd_234_backdoor", ""),
    ("8.3.0 - 8.3.7", "exploit/linux/postgres/postgres_payload", "LHOST"),
]

exploits.add_entry(data)

exploits.retrieve_data("8.3.0 - 8.3.7")

class Network:
    # has a propery of machine objects in a list
    # has a property of the ip range (start and end)

    def __init__(self, ip_range):
        self.ip_range = ip_range
        self.machines = []
        self.vulnerable_ports = []

    def runInitialNetworkScan(self):
        logging.debug("running initial network scan")
        nums = self.ip_range.split(".")
        ip_start = ".".join(nums[0:3])
        start = None
        end = None
        if "-" in nums[3]:
            nums2 = nums[3].split("-")
            start = nums2[0]
            end = nums2[1]
            logging.debug("scanning range from "+str(start)+" to "+str(end))
        else:
            logging.debug("running scan on 1 ip")
            machine = Machine(self.ip_range)#in this case the range is just an ip
            ports = machine.scan("-sV")
            logging.debug("ports on "+str(self.ip_range))
            logging.debug(ports)
            vulnerable_ports = []
            for port in ports:
                if exploits.retrieve_data(port.service):
                    # add the port to the machine
                    vulnerable_ports.append(port)
                    
            self.machines.append(machine)
            return
        
        for i in range(int(start), int(end)):
            machine = Machine(ip_start+"."+str(i))
            ports = machine.scan("-sV")
            for port in ports:
                if exploits.retrieve_data(port.service):
                    # add the port to the machine
                    self.vulnerable_ports.append(port)
            logging.debug("scan: "+str(ports))
            self.machines.append(machine)

    def getMachines(self):
        return self.machines
