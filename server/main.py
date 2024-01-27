

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

    def exploitPort(self):
        # run the exploit on the port
        # pass
        
    def scan(self):
        # now run a nmap scan on all ports on the machine

        # need to parse the data from the nmap scan



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

