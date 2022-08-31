
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.wallet = 0;
    }

    fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    sendMoney(amount, targetPerson) {
        this.wallet -= amount;
        targetPerson.recieveMoney += amount;
    }

    recieveMoney(amount) {
        this.wallet += amount;
    }
}


// Inheritance
// Teacher is a Person
class Teacher extends Person {
    constructor(firstName, lastName, yearsTeachingExperience) {
        // super refers to the parent constuctor,in this case that is PErson
        // we send all the Person-specific prpoerties to the Person class
        super(firstName, lastName)

        // Teacher-specific properties
        this.yearsTeachingExperience = yearsTeachingExperience
    }
}
class Student extends Person {
    constructor(firstName, lastName, hobbies=[]) {
        super(firstName, lastName);
        this.hobbies = hobbies;
    }
}


// Composition
// lecture is composed of students and instructors
class Lecture {
    constructor(topic, zoomLink, teacher, students=[]) {
        this.topic = topic;
        this.zoomLink = zoomLink;
        this.teacher = teacher;
        this.students = students;
    }

    createAttendanceList() {
        const fullNames = [];
        
        for (const student of this.students) {
            fullNames.push(student.fullName())

        }
        return fullNames
    }
}


const john = new Student('john', 'c');
console.log(john.fullName());

const neil = new Teacher('neil' , 'm');
console.log(neil.fullName())

const oopLecture = new Lecture ('oop', 'www.zoom.com', neil, [john, new Student('yelena', 'd')])
console.log(oopLecture)
console.log(oopLecture.createAttendanceList())

john.sendMoney(10, neil)
console.log(neil)
console.log(john)


