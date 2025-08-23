import { otherPackagesFunc } from "./test.js";
otherPackagesFunc();

export function test() {
  console.log("Hello!");
}

export function testWithArg(name) {
  console.log(`Hello, ${name}`);
}
