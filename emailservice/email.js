const mail=require('@sendgrid/mail');
const sgApiKey='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';
mail.setApiKey(sgApiKey);
const bookedmail=(email,name,seat_number)=>
{
    mail.send(
        {
        to:email,
        from:'pranavped@gmail.com',
        subject:'Ticket is Booked successfully',
        text:'hello '+name+',your seat number is '+seat_number+' and thanks for booking with us'
        }


    )


}


const cancelmail=(email,name)=>
{
  mail.send(
      {
          to:email,
          from:'pranavped@gmail.com',
          subject:'Ticket cancelled succesfully',
          text:'hello '+name+',your ticket is cancelled, we hope you will keep booking with us again in the future'
      }
  )
}


module.exports=
{
    bookedmail,
    cancelmail
}