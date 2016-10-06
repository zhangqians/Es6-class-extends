"use strict"
class Animal{
    constructor(name)
    {
        this.name=name;
    }
    do(){
        console.log("my name is "+this.name);
    }
    it(){
        console.log("hello world!");
    }
}
class Cat extends Animal{
    constructor(name,age)
    {
        super(name);
        this.age=age;
    }
    make(){
        console.log("i am "+this.age+" years old");
    }
}
var mimi=new Cat("zhang",21);
mimi.it();  //hello world!
mimi.do();  //my name is zhang
mimi.make();  // i am 21 years old

