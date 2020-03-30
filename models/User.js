const mongoose=require('mongoose');
const validator=require('validator');
const Schema=mongoose.Schema
const bcrypt=require('bcryptjs')



//schema for passenger,who is going to book ticket and validation is also included.

const userSchema=new Schema
(
    {
    name:
    {
     type:String,
     required:true,
     max:100,
       
    },
    password:
    {
        type:String,
        required:true,
        unique:true,
        validate(value)
        {
            if(value<6)
            {
                throw new Error('passord is less than 6')
            }
        }
    },
    age:
    {
        type:Number
    },
    gender:
    {
     type:String
    },
    email:
    {
        type:String,
        required:true,
        unique:true
    }
}
)


//encrypting the user password.
userSchema.pre('save', async function (next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})


module.exports=mongoose.model('ticket-booking',userSchema);