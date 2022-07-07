const object = {
  a: 5,
  b: { g: 8, y: 9, t: { q: 48 } },
  x: 47,
}

// let newObject = Object.assign({}, object);
// object.b.t.q = 10;
// console.log(object); 
// console.log(newObject);

//========глубокое копирование ===========

let newObj = JSON.parse(JSON.stringify(object));
object.b.t.q = 20;
console.log(object); 
console.log(newObj);