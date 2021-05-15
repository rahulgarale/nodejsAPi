const db = require('../_helper/db');
const course = require('./courses.model');
const Courses=db.Courses;

module.exports={
    getAll,
    getCourseById,
    updateCourse,
    addCourse
}
async function getAll(){
    return await Courses.find();
   
}

async function getCourseById(id){
    return await Courses.find({"id":id});
}
async function updateCourse(courseId,courseName){
    // let courseDetails=getCourseById(courseId);
    // if(!courseDetails){
    //     throw 'Course Not Found';
    // }
    // else{
    //     courseDetails.name=courseName;
    //     return getAll();
    // }
    let course= await Courses.findOne({id:courseId});
       if(course){
        course.name=courseName;
        await course.save();
        return await Courses.find()
       }
       else{
           throw 'Course not found';
       }

}
async function addCourse(courseName){
    let courseExist=await Courses.findOne({name:courseName});
    if(courseExist){
        throw 'Course already exist';
    }
    if(!courseExist){
        let length =await Courses.find();
        const newCourse=new Courses();
        newCourse.id=length.length+1;
        newCourse.name=courseName;

        await newCourse.save();

    }
    // if(courseExist){
    //     throw 'Course already exist';
    // }
    // if(!courseExist){
    //     const newCourse={
    //         "id":Courses.length+1,
    //         "name":courseName
    //     }
    //     Courses.push(newCourse);
    // }
}