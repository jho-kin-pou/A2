/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Jeffery Ho Kin Pou
*  Student ID: jho-kin-pou
*  Date: 28 May 2024
*
********************************************************************************/ 

//Import the collegeData module to access its functions
const collegeData = require('./modules/collegeData');

//Initialize the data
collegeData.initialize()
.then(() => {
    //Once initialization is successful, get all students data
    return collegeData.getAllStudents();
})
.then((students) => {
    //Log the number of students retrieved
    console.log(`Successfully retrieved ${students.length} students`);
    //Get all courses
    return collegeData.getCourses();
})
.then((courses) => {
    //Log the number of courses retrieved
    console.log(`Successfully retrieved ${courses.length} courses`);
    //Get all TAs (Teaching Assistants)
    return collegeData.getTAs();
})
.then((TAs) => {
    //Log the number of TAs retrieved
    console.log(`Successfully retrieved ${TAs.length} TAs`);
})
.catch((err) => {
    //If any error occurs in the chain, log the error message
    console.error(err);
});