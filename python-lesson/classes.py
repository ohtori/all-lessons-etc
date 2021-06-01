class Car():
  def __init__(self, make, model, year):
    self.make = make
    self.model = model
    self.year = year
    self.odometr_reading = 0
  
  def description_name(self):
    return (str(self.year) + ' ' + self.make + ' ' + self.model).title()

  def read_odometr(self):
    print('car mileage is {}'.format(self.odometr_reading))

  def update_odometr(self, km):
    self.odometr_reading = km



