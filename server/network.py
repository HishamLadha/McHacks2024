import logging
from machine import Machine

logging.basicConfig(
    level=logging.DEBUG,
    format='%(levelname)s [%(asctime)s] %(filename)s:%(lineno)d - %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S'
)

class Network:
    # has a propery of machine objects in a list
    # has a property of the ip range (start and end)

    def __init__(self, ip_range):
        self.ip_range = ip_range
        self.machines = []

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
            data = machine.scan("-sV")
            logging.debug("scan data: "+str(data))
            self.machines.append(machine)
            return
        
        for i in range(int(start), int(end)):
            machine = Machine(ip_start+"."+str(i))
            scan_data = machine.scan("-sV")
            logging.debug("scan: "+str(scan_data))
            self.machines.append(machine)

    def getMachines(self):
        return self.machines
