import nmap
import logging
import database

exploits = database.ExploitDB()

data = [
    ("vsftpd 2.3.4", "exploit/unix/ftp/vsftpd_234_backdoor", ""),
    ("PostgreSQL DB 8.3.0 - 8.3.7", "exploit/linux/postgres/postgres_payload", "LHOST"),
]

exploits.add_entry(data)

exploits.retrieve_data("vsftpd 2.3.4")

# print(exploits.retrieve_data("vsftpd 2.3.4"))
# print(exploits.retrieve_data("merde"))


class Network:
    # has a propery of machine objects in a list
    # has a property of the ip range (start and end)

    def __init__(self, start_ip, end_ip):
        self.start_ip = start_ip
        self.end_ip = end_ip
        self.machines = []

    def runInitialNetworkScan(self):
        # run the scan on the network
        # update the machines list
        for i in range(self.start_ip, self.end_ip):
            # create a machine object
            machine = Machine(i)
            # run the scan on the machine
            machine.scan()
            # add it to the machines list
            self.machines.append(machine)

    def getMachines(self):
        return self.machines

    def getStartIp(self):
        return self.start_ip

    def getEndIp(self):
        return self.end_ip


# Create a class to represent a machine
class Machine:
    def __init__(self, ip):
        # self.os = os
        self.ip = ip
        self.ports = []
        # self.mac_address = None
        # self.last_update = None
        # self.vulnerabilities = []

    # def runVulnScan(self):
    # run the vulnerability scan

    def exploitPort(self, port):
        # run the exploit on the port
        pass

    def scan(self, flags):
        # now run a nmap scan on all ports on the machine
        nm = nmap.PortScanner()
        nm.scan(self.ip, flags)

        # need to parse the data from the nmap scan
        return nm.all_hosts()

    def setName(self, name):
        self.name = name

    def getName(self):
        return self.name

    def getIp(self):
        return self.ip

    def getPort(self):
        return self.port

    def getStatus(self):
        return self.status
