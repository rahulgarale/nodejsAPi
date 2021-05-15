const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// const course=[
//     {"id":1, "name":"Node"},
//     {"id":2, "name":"Java"},
//     {"id":3, "name":"Angular"},
//     {"id":4, "name":".Net"},
     
// ];

// const schema = new Schema({
//     city:{type:String},
//     zip:{type:String},
//     loc:{type:Object},
//     pop:{type:Number},
//     state:{type:String}
// })

const schema = new Schema({
    id:{type:String},
    name:{type:String},
})
schema.set('toJSON',{virtuals:true});
module.exports=mongoose.model('courses',schema);