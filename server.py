from asyncio.tasks import wait
import websockets
import asyncio
import time
import json
from lib.LJCommands import *
# Importing from fake labjack so we can test the software
from lib.LabJackFake import LabJack


class LJSocketWebSockets:

    def __init__(self, ip: str, port: int, **kwargs):
        self.labjacks = kwargs
        self.ip = ip
        self.port = port
        self.websocket = None
        self.state = {
            'arming_switch': False,
            'digital_pins': {},
            'analog_pins': {}
        }

    async def event_handler(self, websocket, path):
        self.websocket = websocket
        consumer_task = asyncio.ensure_future(
            self.consumer_handler(websocket, path))
        producer_task = asyncio.ensure_future(
            self.producer_handler(websocket, path))
        done, pending = await asyncio.wait(
            [consumer_task, producer_task],
            return_when=asyncio.FIRST_COMPLETED,
        )
        for task in pending:
            task.cancel()

    async def consumer_handler(self, websocket, path):
        async for message in websocket:
            await self.consumer(message)

    async def producer_handler(self, websocket, path):
        while True:
            await asyncio.sleep(1/20)
            await self.emit('STATE', self.state)

    def start_server(self):
        start_server = websockets.serve(self.event_handler, self.ip, self.port)
        asyncio.get_event_loop().run_until_complete(start_server)
        asyncio.get_event_loop().run_forever()

    """
    Going to have to go through the Labjack object and produce the state...
    """

    async def producer(self):
        await asyncio.sleep(1/20)
        return json.dumps({
            'state': self.state,
            'time': time.time()
        })

    def execute(self, command: Command):
        if command.header == CommandString.ARMINGSWITCH:
            self.state['arming_switch'] = not self.state['arming_switch']
            print(self.state['arming_switch'])
        else:
            print(command)


    """
    Implementing logic for command executions...
    """
    async def consumer(self, data):
        jData = json.loads(data)
        if 'command' in jData.keys():
            if jData["command"]["header"] == CommandString.PING.value:
                await self.emit('PING', jData['time'])
                print("PING")
            elif jData["command"]["header"] == CommandString.ARMINGSWITCH.value:
                self.execute(Command(CommandString.ARMINGSWITCH))
                print("ARMINGSWITCH")

    async def emit(self, msg_type, data):
        # if msg_type == "STATE", data is the state, etc.
        obj = {
            "type": msg_type,
            "time": round(time.time()*1000),
            "data": data
        }
        await self.websocket.send(json.dumps(obj))


if __name__ == '__main__':
    ip = "127.0.0.1"
    port = 8888
    socket = LJSocketWebSockets(ip, port, lox=LabJack(1), eth=LabJack(2))
    socket.start_server()
