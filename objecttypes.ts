

const person:{
    name:string;
    age: number;
    hobbies:string[];
    role:[number, string]
}={
    name:'adwith',
    age:7,
    hobbies:['cricket', 'footbal'],
    role:[2, 'author']
}

for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}

console.log(person.name);