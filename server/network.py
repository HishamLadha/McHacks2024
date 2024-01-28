from machine import Machine

class Network:
    # has a propery of machine objects in a list
    # has a property of the ip range (start and end)

    def __init__(self, range):
        self.range = range
        self.machines = []

    def runInitialNetworkScan(self):
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
        
        for i in range(start, end):
            # create a machine object
            machine = Machine(ip_start+"."+i)
            # run the scan on the machine
            machine.scan()
            # add it to the machines list
            self.machines.append(machine)

    def getMachines(self):
        return self.machines
