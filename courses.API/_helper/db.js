const mongoose = require('mongoose');
//const schema=mongoose.Schema;
mongoose.connect('mongodb+srv://testUser:123@cluster0.wq8zj.mongodb.net/testDB?retryWrites=true&w=majority',{ useNewUrlParser: true,useUnifiedTopology: true })
.then(()=>{
    console.log("Mongo Connected");
})
.catch(err=>{
    console.log(err);
})


module.exports={
    Courses:require('../Courses/courses.model')
}