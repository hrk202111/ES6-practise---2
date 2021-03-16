class Student{
    constructor(sID, sName){
        this.id = sID;
        this.name = sName;
        this.class = 10;
        this.school = 'Korimunesa Pre Cadet School'

    }
}

const student1 = new Student(1, 'Rakib');
const student2 = new Student(2, 'Mahi')
const student3 = new Student(3, 'Shifat')
console.log(student1.name, student2.id, student3);