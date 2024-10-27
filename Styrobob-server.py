## System
import os
import sys
import argparse
import traceback

## Logging
import logging
import logging.config

## Time
import time
from tzlocal import get_localzone
from datetime import datetime, timezone, timedelta

## Async
import uvloop
import asyncio

## Utils
import re
import subprocess
import simplejson as sjson

## Sanic
from sanic import Sanic
from sanic import response
from sanic.response import json
from signal import signal, SIGINT
from sanic.exceptions import ServerError
from sanic_cors import CORS

## app
app = Sanic('StyroBob-API')
CORS(app)

##############################################################################################
## GENERATE

# config
url = 'https://9d41-73-51-227-110.ngrok-free.app'
input = '/Users/morgan/Desktop/git/functions-hardhat-starter-kit/Functions-request-template.js'
output = '/Users/morgan/Desktop/git/functions-hardhat-starter-kit/Functions-request-config.js'
env = os.environ.copy()

command = [
    "npx", 
    "hardhat", 
    "functions-request", 
    "--network", "ethereumSepolia", 
    "--contract", "0x68d38C226D39d0D07FD2BEBa60A5A5b7729d5719", 
    "--subid", "3730"
]
trigger = ' '.join(command)

@app.route('/api/generate', methods=['GET', 'OPTIONS'])
async def _api_generate(request):
    try:
        ## log
        logger.info('*/styrobob-api-generate-request*') 
        
        ## check 
        if 'prompt' not in request.args:
            return response.json('Missing prompt', status=400)
        
        ## parse
        prompt = request.args['prompt'][0].lower()

        ## init
        data = None

        ## config
        with open(input, 'r') as file:
            file_data = file.read()

            new_data = file_data.replace('<StyroBob URL>', url)
            new_data = new_data.replace('<StyroBob Prompt>', prompt)

            print (new_data)
            with open(output, 'w') as file:
                file.write(new_data)

        ## run
        with os.popen(trigger) as stream:
            result = stream.read()
            logger.info(result)
            match = re.search(r"Response returned by script during local simulation:\s+([a-f0-9\-]{36})", result)
            if match:
                data = {"url":"https://audiopipe.suno.ai/?item_id={}".format(match.group(1))} 

        ## log
        logger.info('*/styrobob-api-generate-response*\n{}'.format(sjson.dumps(data, indent=4, sort_keys=False))) 
        
        ## check 
        if data == None or data == 'Error':
            return response.json(data, status=500)

        return response.json(data, status=200)

    except Exception as e:
        
        ## log
        logger.error(str(e))
        logger.error(str(traceback.format_exc()))
        return response.json({'message':'Internal sever error'}, status=500)


if __name__ == '__main__':
    ## argparse
    arg_parser = argparse.ArgumentParser(description='')
    args = vars(arg_parser.parse_args())
    args['port'] = 3002
    args['env'] = 'dev'

    ## logger
    name = os.path.basename(sys.argv[0])
    logger = logging.getLogger(name)
    logger.setLevel(logging.INFO)
    ch = logging.StreamHandler()
    ch.setLevel(logging.INFO)
    formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
    ch.setFormatter(formatter)
    logger.addHandler(ch)
    
    # ## file
    # filename = '{}/logs/{}.log'.format(os.getcwd(), name)
    # os.makedirs(os.path.dirname(filename), exist_ok=True)
    # fh = logging.FileHandler(filename, mode='a')
    # fh.setLevel(logging.INFO)
    # logger.addHandler(fh)

    ## loop
    asyncio.set_event_loop(uvloop.new_event_loop())
    serv_coro = app.create_server(host="0.0.0.0", port=args['port'], return_asyncio_server=True)
    loop = asyncio.get_event_loop()
    serv_task = asyncio.ensure_future(serv_coro, loop=loop)
    signal(SIGINT, lambda s, f: loop.stop())

    ## server
    server = loop.run_until_complete(serv_task)
    loop.run_until_complete(server.startup())
    loop.run_until_complete(server.after_start())
    loop.run_until_complete(server.before_stop())
    loop.run_until_complete(server.after_stop())
    
    try:
        loop.run_forever()
    except KeyboardInterrupt as e:
        loop.stop()
    finally:
        server.before_stop()
        close_task = server.close()
        loop.run_until_complete(close_task)
        for connection in server.connections:
            connection.close_if_idle()
        server.after_stop()