"""
Database structure
Version       |Msf exploit path           | arguments
-----------------------------------------------------------
postgresql 8.3| linux/postgresql_backdoor | rhosts,lhost


"""

class ExploitDB():
    def __init__(self) -> None:
        # make the connection to the sqlite database
        pass

    def add_entry(self, payload_path: str, args: list) -> bool:
        # store the entry tinto sql
        # parse the args and store them in the datbaase
        pass
