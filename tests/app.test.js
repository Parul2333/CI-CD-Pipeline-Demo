const {add,subtract,multiply} = require("../src/app");


test("add 2 numbers",()=>{
    expect(add(2,3)).toBe(5);
});

test("subtract 2 numbers",()=>{
    expect(subtract(5,3)).toBe(2);
});

test("mulitply 2 numbers",()=>{
    expect(multiply(2,5)).toBe(10);
})