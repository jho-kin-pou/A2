//We import the 'fs' module to perform the file system operations
const fs = require('fs');

//Define a class to hold students and courses data
class Data {
    constructor(students, courses) {
        //List of students
        this.students = students;
        //List of courses
        this.courses = courses;
    }
}

//Initialize a variable to hold the data collection
let dataCollection = null;

//Function to initialize data by reading JSON files
function initialize() {
    return new Promise((resolve, reject) => {
        //Read the 'students.json' file
        fs.readFile('./data/students.json', 'utf8', (err, studentData) => {
            if(err) {
                //If there is an error in reading the file, reject the promise with an error message
                return reject("unable to read students.json");
            }
            //Parse the student data from the JSON string to the JavaScript object
            let students = JSON.parse(studentData);

            //Read the 'courses.json' file
            fs.readFile('./data/courses.json', 'utf8', (err, courseData) => {
                if(err) {
                    //If there is an error reading the file, reject the promise with an error message
                    return reject("unable to read courses.json");
                }
                //Parse the course data from the JSON string to the JavaScript object
                let courses = JSON.parse(courseData);

                //Create a new Data instance with students and courses
                dataCollection = new Data(students, courses);
                //Resolve the promise indicating initialization is complete
                resolve();
            });
        });
    });
}

//Function to get all students
function getAllStudents() {
    return new Promise((resolve, reject) => {
        //Check if dataCollection is initialized and has students
        if (dataCollection && dataCollection.students.length > 0) {
            //Resolve the promise with the list of students
            resolve(dataCollection.students);
        }
        else {
            //Reject the promise with an error message if no students are found
            reject("no results returned");
        }
    });
}


//Function to get all TAs (Teaching Assistants)
function getTAs() {
    return new Promise((resolve, reject) => {
        //Filter the students who are TAs
        const TAs = dataCollection.students.filter(student => student.TA);
        //Check if any TAs are found
        if(TAs.length > 0) {
            //Resolve the promise with the list of TAs
            resolve(TAs);
        }
        else {
            //Reject the promise with an error message if no TAs are found
            reject("no results returned");
        }
    });
}

//Function to get all courses
function getCourses() {
    return new Promise((resolve, reject) => {
        //Check if dataCollection is initialized and has courses
        if(dataCollection && dataCollection.courses.length > 0) {
            //Resolve the promise with the list of courses
            resolve(dataCollection.courses);
        }
        else {
            //Reject the promise with an error message if no courses are found
            reject("no results returned");
        }
    });
}

//Export the functions to be used in other modules
module.exports = { initialize, getAllStudents, getTAs, getCourses };