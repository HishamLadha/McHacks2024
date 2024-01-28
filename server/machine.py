import nmap
import logging


logging.basicConfig(
    level=logging.DEBUG,
    format='%(levelname)s [%(asctime)s] %(filename)s:%(lineno)d - %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S'
)

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
        logging.debug("scanning ip: "+str(self.ip))
        nm = nmap.PortScanner()
        nm.scan(self.ip, flags)
        logging.debug("scan complete")
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
