var mongoose = require('mongoose');
var assignmentSchema = mongoose.Schema(
    {
        assignmentNumber:{
            type:Number,
            required:true
        },
        title:{
            type:String,
            required:true
        },
        uploadDate:{
            type:Date,
            default:Date.now
        },
        deadline:{
            type:Date,
            required:true
        },
        file:{
            type:Buffer,
            required:true
        },
        totalMarks:{
            type: Number
        },
        fileName:{
            type:String
        },
        fileExtension:{
            type:String
        },
        attempted:{
            type:[{
                sid:{
                    type:mongoose.Types.ObjectId,
                    ref:'Student'
                }, 
                file:{
                    type:Buffer
                },
                fileName:{
                    type:String
                },
                fileExtension:{
                    type:String
                },
                uploadedDate:{
                    type:Date
                },
                obtainedMarks:{
                    type:Number
                }
            }]
        }
    }
);

module.exports=mongoose.model('Assignment',assignmentSchema);