let arr = [{ a: 1 }, { b: 2 }];
let ob = arr.reduce((pre, cur) => {
  return { ...pre, ...cur };
}, {});
console.log(ob);
