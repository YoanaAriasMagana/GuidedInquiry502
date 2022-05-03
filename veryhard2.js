//1. Create a Person constructor that has three properties: name, job, and age./
//2. Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
//3. Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a back-end developer".
//4. Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that is passed in and a busy property that is NOT passed in and is set to true by default.
//5. Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. Also give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.
//6. Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the programmer is not, e.g. should initially log out "Mark can't accept any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.
//7. Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all languages the programmer knows.

class Person {
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }
    exercise() {
        console.log("Running is fun! - jk it's gross");
    }
    fetchJob() {
        console.log(`${this.name} is a ${this.job}`);

    }
}
class Programmer extends Person {
    constructor(name, job, age, languages) {
        super(name, age, job);
        this.languages = [languages];
        this.isBusy = true;
    }

    completeTask() {
        this.isBusy = false;
    }

    acceptNewTask() {
        this.isBusy = true;
    }

    offerNewTask() {
        if (this.isBusy == true) {
            console.log(`${this.name} is busy and can't accept any new task right now.`);
        } else {
            console.log(`${this.name} would love to take on a new resposibility.`);
        }
    }

    learnLanguages(language) {
        this.languages.push(language);
        console.log(`${this.name} learned a new language, ${language}`);
    }

    listLanguages() {
        console.log(`${this.name} knows these languages: ${this.languages.toString()}.`);
    }
}
//Spent a long time trying to figure out why code wasn't working. The mistake I kept overlooking was that where I put "new Programmer" below I origianlly had "new Person"
const person1 = new Programmer("Yoana", 24, "Programmer", "JavaScript, CSS, HTML");
const person2 = new Programmer("Bob", 50, "Artist", "English, French, German");
const person3 = new Programmer("Tim", 27, "Cook");

person1.exercise();
person1.fetchJob();
person1.completeTask();
person1.offerNewTask();
person1.learnLanguages(" Python");
person1.listLanguages();

person2.exercise();
person2.fetchJob();
person2.completeTask();
person2.offerNewTask();
person2.learnLanguages(" Japanese");
person2.listLanguages();

