from time import perf_counter
from traceback import print_exc
import dearpygui.dearpygui as dpg
import asyncio
from client_socket import Socket

dpg.create_context()

with dpg.font_registry():
    dpg.bind_font(dpg.add_font("RobotoMono.ttf", 20))

with dpg.window(label="Safety", height=300, width=400):
    dpg.add_button(label='yo')

# with dpg.window(label="Safety")

dpg.create_viewport(title='ANU Rocketry Test Stand Control Panel', width=800, height=600)
dpg.set_viewport_vsync(False)  # run at a high framerate
dpg.setup_dearpygui()
dpg.show_viewport()

async def commloop(socket: Socket):
    await socket.socket.send('PING')

async def renderloop():
    s_time = perf_counter()

    # update window
    dpg.render_dearpygui_frame()

    e_time = perf_counter()
    dt = e_time - s_time
    refresh = 1 / 144 # 144 Hz
    await asyncio.sleep(refresh - dt)

async def main():
    socket = Socket()
    asyncio.ensure_future(socket.run(commloop))
    while True:
        try:
            while dpg.is_dearpygui_running():
                await renderloop()
            if not dpg.is_dearpygui_running():
                exit(0)
        except Exception as e:
            print_exc()

asyncio.run(main())

dpg.destroy_context()
