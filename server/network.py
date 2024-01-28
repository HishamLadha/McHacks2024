from machine import Machine

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