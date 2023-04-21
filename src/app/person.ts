import { Guid } from "guid-typescript";
export class Person {
    id: string = Guid.create().toString();
    name: string = '';
    age: number = 0;
    job: string = '';

    getCopy() : Person{
        let newPerson : Person = new Person();
        newPerson.name = this.name;
        newPerson.age = this.age;
        newPerson.job = this.job;
        return newPerson;
    }
}
