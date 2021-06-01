from time import time

def  gen_filename():
  i = 10
  while i > 0:
    pattern = 'file-{}.jpg'
    t = int(time() * 1000)
    yield pattern.format(str(t))
    i -= 1

def gen1(string):
  for i in string:
    yield i

def gen2(n):
  for i in range(n):
    yield i

g1 = gen1('Ilia')
g2 = gen2(10)

tasks = [g1, g2]

while tasks:
  task = tasks.pop(0)

  try:
    i = next(task)
    print(i)
    tasks.append(task)
  except StopIteration:
    pass

print(10000)