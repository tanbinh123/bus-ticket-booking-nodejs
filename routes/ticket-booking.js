
const express=require('express');
const Ticket=require('../models/ticket');
const User=require('../models/User');
const bcrypt=require('bcryptjs');


const router=express.Router();

router.post('/booksave', (req, res) => {

    const ticket = new Ticket({ seat_number: req.body.seat_number })
    const user = new User(req.body)

    user.save()
        .then(data => {
            if (data) {
                ticket.passenger = user._id
                ticket.save()
                    .then(data => res.status(200).json(data))
                    .catch(err => {
                        User.findOneAndDelete({ _id: user._id })
                            .then((data) => res.status(400))
                            .catch(err => res.status(400).json({ message: err }))
                    })
            }
        })
        .catch(err => res.status(404).json({ message: err }))

})


router.get()


//to check status if a ticket is booked or not
router.get('/ticket/:ticket_id', (req, res) => {
    const { ticket_id } = req.params
    Ticket.findById(ticket_id, (err, ticket) =>{
        if (err)
         res.status(404).json({ message: err })

        if (ticket) 
        res.status(200).json({ status: ticket.is_booked })
    })
})

//displays all the booked tickets
router.get('/ticket/checkClosed',(req,res)=>
{
    Ticket.find({is_booked:true},(err,data)=>
    {
        if(err)
        {
            console.log(err);
            res.status(400).json({message:err})
        }
        if(data)
        {

            res.send(data)
        }
    })
})


module.exports=router
	