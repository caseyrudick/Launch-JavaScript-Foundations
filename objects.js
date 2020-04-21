let obj1 = {1:'a',2:'b',3:'c'};
let obj2 = Object.create(obj1);

for (let prop in obj2) {
  console.log(obj2[prop]);
}
