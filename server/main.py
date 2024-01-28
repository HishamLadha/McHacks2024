import logging
import database

exploits = database.ExploitDB()

data = [
    ("vsftpd 2.3.4", "exploit/unix/ftp/vsftpd_234_backdoor", ""),
    ("PostgreSQL DB 8.3.0 - 8.3.7", "exploit/linux/postgres/postgres_payload", "LHOST"),
]

exploits.add_entry(data)

exploits.retrieve_data("vsftpd 2.3.4")
