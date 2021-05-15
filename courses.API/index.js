const express =require('express');

const app =express();
app.use(express.json());
app.use(express.urlencoded());
//Port
const PORT=process.env.PORT || 8080;

app.get('/',function(req,res){
    res.send("Couses API listing");
})

app.use('/courses',require('./Courses/courses.controller'));




app.listen(PORT,function(){
    console.log(`Server listining on ${PORT}`);
})
