/**
 * interface 는 javascipt로 컴파일 하면 따로 보이거나 하지 않는다. object 만 보임
 * 이 것을 class 로 사용하게 되면 class 또한 컴파일이 되어 js 에 보인다.
 * 
 * 인터페이스를 사용하면 ts 측면에서는 좀 더 안전하다.
 * react.js, node.js 등등 을 사용하게 되면 클래스를 사용하는게 나을 수 있다.
 * 클래스의 public, private 접근제어자는 js 로 컴파일 되지 않는다. 없는 기능이다.
 */
interface Human {
    name: string;
    age: number;
    gender: string;
}

class Human2 {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name:string, age:number, gender?:string) {
        this.name = name;
        this.age = age;
        this.gender = gender;

    }
}

const person = {
    name: "Jrock30",
    gender: "male",
    age: 20
}

const jrock = new Human2("Jrock", 23);

const name = "jrock",
    age = 21,
    gender = "male";

// 아규먼트 뒤에 ? 를 붙이면 사용이 필수적이 아니다. , : {void} 리턴 타입.
// const sayHi = (name, age, gender?) => {
const sayHiOne = (name: string, age: number, gender: string): void => {
    console.log(`Hello ${name}, you are a ${age}, ${gender}!`);
};

// interface
const sayHiTwo = (person: Human): void => {
    console.log(`Hello ${person.name}, you are a ${person.age}, ${person.gender}!`);
};

// class
const sayHiThree = (person: Human2): void => {
    console.log(`Hello ${person.name}, you are a ${person.age}, ${person.gender}!`);
};

sayHiOne(name, age, gender);
sayHiTwo(person);
sayHiThree(jrock)
export {};
