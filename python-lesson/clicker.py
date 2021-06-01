import mouse
import keyboard
from time import sleep

start_key = input('Start key')
stop_key = input('Stop key')

while True:
  if keyboard.is_pressed(start_key):
    mouse.click(button='left')
  if keyboard.is_pressed(stop_key):
    break