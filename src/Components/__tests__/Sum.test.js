import { Sum } from "../Sum";

test("sum function returns the addition of two numbers",()=>{
    const result=Sum(2,3);

    //Assertion
    expect(result).toBe(5);
});