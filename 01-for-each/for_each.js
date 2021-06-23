const brandCars = ['audi', 'volvo', 'opel', 'bmw', 'porsche']

console.log(brandCars)
const printCars = (cars, index) => console.log(`\t${index + 1} ${cars}`) 

brandCars.forEach(cars => console.log(cars))  
  brandCars.forEach(printCars)
