import logging
import database
from network import Network
from machine import Machine
from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

app = FastAPI(timeout=86400)

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

exploits = database.ExploitDB()

# data = [
#     ("vsftpd 2.3.4", "exploit/unix/ftp/vsftpd_234_backdoor", ""),
#     ("PostgreSQL DB 8.3.0 - 8.3.7", "exploit/linux/postgres/postgres_payload", "LHOST"),
# ]

# exploits.add_entry(data)

exploits.retrieve_data("vsftpd 2.3.4")


@app.post("/scan")
async def post_getip(request: Request):
    # try:
        logging.debug("hh")
        data = await request.json()

        if "ip_range" not in data.keys(): return JSONResponse(content={"status":"MISSING_KEY_NAME"}, status_code=422)

        ip_range = data.get("ip_range")

        network = Network(ip_range)
        network.runInitialNetworkScan()


    # except Exception as e:
        # return JSONResponse(content={"status":"GETIP_FAILED","detail":str(e)})


logging.basicConfig(level=logging.DEBUG)
uvicorn.run(app, host="localhost", port=8081)