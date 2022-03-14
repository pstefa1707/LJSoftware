import websockets
import asyncio

class Socket:
    """
    This class owns a websocket which is recreated:
    * whenever the connection closes, after a 1 second delay
    * the IP or port is set, eg via socket.ip = xxx
    It's a bit gnarly because the websockets library API is poorly designed
    You just need to run socket.run() with asyncio.ensure_future to keep the socket around
    """

    def __init__(self, ip='0.0.0.0', port=8888):
        self.socket = None
        self._ip = '0.0.0.0'
        self._port = port
        self._needs_restart = False

    @property
    def ip(self): return self._ip
    @ip.setter
    def ip(self, val):
        self._ip = val
        self._needs_restart = True
        self.socket.close()

    @property
    def port(self): return self._port
    @port.setter
    def port(self, val):
        self._port = val
        self._needs_restart = True
        self.socket.close()

    async def run(self, callback):
        """Run this with asyncio.ensure_future to keep self.socket around"""
        while True:
            async for websocket in websockets.connect(f'wss://{self.ip}:{self.port}'):
                try:
                    self.socket = websocket
                    await callback(self)
                    await asyncio.Future()
                except websockets.ConnectionClosed:
                    if self._needs_restart:
                        self._needs_restart = False
                        break # inner loop
                    else:
                        await asyncio.sleep(1) # second
                        continue
