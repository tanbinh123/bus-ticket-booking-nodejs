const validator=require('validator');
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')



const ticketSchema=new Schema(
    {
        name:
        {
        type:String,
        required:true,

        },
        phoneno:
        {
            type:String,
            required:true,
            minlength:6,
            maxlength:10,
            unique:true

        },
        is_booked:
        {
                type:Boolean,
                default:true,
            
        },
        email:
        {
           type:String,
           required:true,
           trim:true,
           unique:true,
           validate(value)
           {
               if(!validator.isEmail(value))
               throw new Error('is not valid')
           }
        },
         seat_number:
         {
            type:Number,
             required:true,
             min:1,
             max:20,
             unique:true
         },

         password:
         {
            type:String,
            required:true,
            min:5,
            max:10
         },
        date:
        {
           type:Date,
           default:Date.now()
        },

        startdate:
        {
           type:Date,
           required:true
        },
        from:
        {
         type:String,
         required:true
        },
        to:
        {
            type:String,
            required:true
        }
,
        tokens: [{
            token: {
                type: String,
                required: true
            }
        }]
        
    }
)

ticketSchema.statics.findByCredentials = async (email, password) => {
    const ticket = await newticket.findOne({ email })

    if (!user) {
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        throw new Error('Unable to login')
    }

    return ticket
}


 ticketSchema.methods.generateAuthTokens=async function()
 {
     const ticket=this
     const token=jwt.sign({_id:ticket._id.toString()},'mytickettoken')
     ticket.tokens=ticket.tokens.concat({token})
     await ticket.save()
     return token
 }


ticketSchema.pre('save',async function(next){


    const user=this;
    if(user.isModified('password'))
    {
        user.password=await bcrypt.hash(user.password,8)
    }
    next()
})



module.exports=mongoose.model('ticket-2',ticketSchema)