const express=require('express');
const Logger = require('../_helper/logger');
const router=express.Router();
const coursesService=require('./courses.service');
const logger= new Logger();


router.get('/',getAllCourse);
router.get('/:id',getCourseById);
router.put('/:id',updateCourse);
router.post('/',addCourse);

module.exports=router;

function getAllCourse(req,res){
    coursesService.getAll()
    .then(data=>res.json(data))
    .catch(err=>res.status(500).send({error:err}));
//    if(!data){
//        res.status(500).send("Internal server error");
//    } 
//    else{
//        console.log(data);
//        res.send(data);
//     }
}

function getCourseById(req,res){
    coursesService.getCourseById(req.params.id)
    .then(data=>res.json(data))
    .catch(err=>res.status(500).send({error:err}));
    // if(!data){
    //     res.status(400).send("data not found")
    // } 
    // else{
    //     console.log(data);
    //     res.send(data);
    //  }
}
function updateCourse(req,res){
    coursesService.updateCourse(req.params.id,req.body.name)
    .then(data=>{res.send(data)})
    .catch(err=>{res.status(400).send({error:err})});
    
}
function addCourse(req,res){
    coursesService.addCourse(req.body.name)
    .then(()=>res.status(200).json({"message":"course added successfully"}))
    .catch((err)=>{res.status(201).send({error:err});logger.log(err)});

}