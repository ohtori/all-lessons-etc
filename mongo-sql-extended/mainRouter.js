const { Router } = require("express");
const mysql = require('mysql2');
const Car = require('./models/Car');
const Brand = require('./models/Brand');

const pool = mysql.createPool({
  connectionLimit: 5,
  host: "217.29.53.79",
  user: "almazntalmaznt",
  database: "almazntalmaznt",
  password: "almazntalmaznt",
  charset: 'utf8_general_ci'
});

const router = Router();

router.post('/create' , async (req, res) => {
  const {brand, model, year, VIN, color, price} = req.body;
  const candidate = await Car.findOne({VIN});
  if (candidate) {
    return res.status(400).json({message: 'Автомобиль с таким VIN номером уже зарегистрирован'});
  }
  const car = new Car({brand, model, year, VIN, color, creationDate: Date.now(), price});
  await car.save();
  const brandCandidate = await Brand.findOne({brand});
  if (!brandCandidate) {
    const newBrand = new Brand({name: brand, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'});
    await newBrand.save();
  }
  return res.status(201).json({message: 'Автомобиль зарегистрирован'});
});

router.post('/find' , async (req, res) => {
  const searchParams = {};
  const categoryDesc = await Brand.find({name: req.body.brand});
  for (let key in req.body) {
    if (req.body[key].length >= 1) {
      if (key == 'minPrice') {
        searchParams.price = {$gte : +req.body[key]};
      } else if (key == 'maxPrice') {
        searchParams.price = {...searchParams.price, $lte : +req.body[key]};
      } else {
        searchParams[key] = req.body[key];
      }
    }
  }
  const result = await Car.find(searchParams).limit(4).sort({price: 1});
  return res.status(200).json({message: 'Поиск завершен', cars: result, desc: categoryDesc[0] ? categoryDesc[0].desc : ''});
});

router.get('/getUsers', function(req, res) {
  pool.query('DROP TABLE staff');
  pool.query("SELECT * FROM workers", function(err, data) {
    if(err) return console.log(err);
    res.status(200).json({message: 'Data obtained', users: data});
  });
});

router.post('/createUser', function(req, res) {
  console.log(req.body);
  const name = req.body.name;
  const age = +req.body.age;
  const job = req.body.job;
  pool.query("INSERT INTO workers (name, age, jobbing) VALUES (?,?,?)", [name, age, job],  function(err, data) {
    if(err) return console.log(err);
    res.status(200).json({message: 'Data obtained', users: data});
  });
});

module.exports = router;