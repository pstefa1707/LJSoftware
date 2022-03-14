import asyncio
import websockets

async def main():
    async with websockets.connect(f'ws://192.168.8.226:8888') as websocket:
        print('yo')
    # await asyncio.get_event_loop().create_connection(lambda: None, '192.168.226', 8888)

asyncio.run(main())
