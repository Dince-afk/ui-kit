// import { Button } from "./component/button.js";
import { doingStuff } from "./utils.js";

export type Person = {
  name: string;
  age: number;
  job: Job;
};

export type Baby = Omit<Person, "job">;

export type Job = {
  title: string;
  monthlySalary: number;
};

export { doingStuff };
