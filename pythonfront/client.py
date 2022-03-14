from time import perf_counter
from traceback import print_exc
import dearpygui.dearpygui as dpg
import asyncio
import websockets
import json

class App:

    def __init__(self):
        dpg.create_context()

        with dpg.font_registry():
            dpg.bind_font(dpg.add_font("RobotoMono.ttf", 20))

        with dpg.window(label="Safety", height=300, width=400, no_close=True):
            dpg.add_button(label='Button')

        dpg.create_viewport(title='ANU Rocketry Test Stand Control Panel', width=800, height=600)
        dpg.set_viewport_vsync(False)  # run at a high framerate
        dpg.setup_dearpygui()
        dpg.show_viewport()

        asyncio.run(self.main())
        dpg.destroy_context()

    async def process(self, message):
        match message:
            case { 'header': 'PING' }:
                print('ping')
            case { 'type': 'STATE'}:
                print('state: ' + json.dumps(message))
                await self.send('PING')
            case _:
                print("unknown: " + json.dumps(message))

    async def send(self, header, data=None):
        await self.socket.send(json.dumps({ 'header': header, 'data': data }))

    async def commloop(self):
        "Keep a websocket connection around and call process() when any messages arrive"
        while True:
            try:
                # leave as a websocket thing
                async with websockets.connect(f'ws://192.168.8.226:8888', open_timeout=1) as websocket:
                    self.socket = websocket
                    async for message in websocket:
                        await self.process(json.loads(message))
            except Exception:
                pass
                print_exc()
                await asyncio.sleep(1)

    async def renderloop(self):
        "Async version of dpg.start_dearpygui"
        while True:
            try:
                while dpg.is_dearpygui_running():
                    s_time = perf_counter()

                    # update window
                    dpg.render_dearpygui_frame()

                    e_time = perf_counter()
                    dt = e_time - s_time
                    refresh = 1 / 144 # 144 Hz
                    await asyncio.sleep(refresh - dt)

                if not dpg.is_dearpygui_running():
                    exit(0)

            except Exception:
                print_exc()

    async def main(self):
        asyncio.ensure_future(self.commloop())
        await self.renderloop()

App()
