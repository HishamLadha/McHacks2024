import logging
from machine import Machine

class Network:
    # has a propery of machine objects in a list
    # has a property of the ip range (start and end)

    def __init__(self, range):
        self.range = range
        self.machines = []

    def runInitialNetworkScan(self):
        logging.debug("running initial network scan")
        nums = self.range.split(".")
        ip_start = ".".join(nums[0:3])
        start = None
        end = None
        if "-" in nums[3]:
            nums2 = nums[3].split("-")
            start = nums2[0]
            end = nums2[1]
        else:
            machine = Machine(range) #in this case the range is just an ip
            self.machines.append(machine)
            return
        
        for i in range(int(start), int(end)):
            machine = Machine(ip_start+"."+str(i))
            scan_data = machine.scan("-sV")
            logging.debug("scan: "+str(scan_data))
            self.machines.append(machine)

    def getMachines(self):
        return self.machines
