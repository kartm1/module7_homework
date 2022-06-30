// 7.3 Прототип и конструктор объекта
// Задание 1.
// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

const obj = { a: 1, b: 2, c: 3 };
const secObj = Object.create(obj);

secObj.d = 4;
secObj.e = 5;

const missionFirst = (object) => {
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      console.log(key);
    }
  }
};
// console.log(secObj);
// console.log(missionFirst(secObj));

// Задание 2.
// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

const obj1 = { milk: 1, mouse: 2, table: 3 };
const missionSecond = (string, object = {}) =>
  Object.keys(object).includes(string);
// console.log(missionSecond("table", obj1));

// Задание 3.
// Написать функцию, которая создает пустой объект, но без прототипа.

const greateObject = () => Object.create(null);
// console.log(greateObject())

// 7.4 ООП в JS
// Задание 4.
// Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
// Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент).
// Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

function electroDevices(powerСonsumption, power) {
  this.power = power;

  this.getPowerСonsumption = function () {
    console.log(`Power Сonsumption is ${powerСonsumption} kW`);
  };
}

const computer = new electroDevices(500, true);
const deskLamp = new electroDevices(50, false);

// computer.getPowerСonsumption();
// deskLamp.getPowerСonsumption();

// 7.5 ООП в ES6
// Задание 5.
// Переписать консольное приложение из предыдущего юнита на классы.

class electroDevicesClass {
  constructor(powerСonsumption, power) {
    this.powerСonsumption = powerСonsumption;
    this.power = power;
  }
  
  getPowerСonsumption(){
    console.log(`Power Сonsumption is ${this.powerСonsumption} kW`);
  } 
 }

 const computerEntity = new electroDevicesClass(500, true)
 const deskLampEntity = new electroDevicesClass(50, false)
 
 computerEntity.getPowerСonsumption()
 deskLampEntity.getPowerСonsumption()
