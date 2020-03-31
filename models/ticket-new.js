const validator=require('validator');
const mongoose=require('mongoose');
const Schema=mongoose.Schema;

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
        date:
        {
           type:Date,
           default:Date.now()
        },
        
        
    }
)



module.exports=mongoose.model('ticket-2',ticketSchema)