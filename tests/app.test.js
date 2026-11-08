const {add,subtract} = require("../src/app");


test("add 2 numbers",()=>{
    expect(add(2,3)).toBe(5);
});

test("subtract 2 numbers",()=>{
    expect(subtract(5,3)).toBe(2);
});