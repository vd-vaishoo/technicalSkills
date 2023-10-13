const mongoose = require('mongoose');
const skillSchema = mongoose.Schema(
    {
        skill:{
            type:String,
            required:[true,"Please enter a skill name"]
        }
    }
)
const Skills=mongoose.model('Skills',skillSchema);
module.exports=Skills;