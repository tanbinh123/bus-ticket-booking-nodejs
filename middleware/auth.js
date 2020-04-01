const jwt = require('jsonwebtoken')

const Ticket=require('../models/ticket-new')



const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, 'mytickettoken')
     //   const user = await ti.findOne({ _id: decoded._id, 'tokens.token': token })
        const ticket=await Ticket.findOne({_id:decoded._id,'tokens.token':token})
        if (!ticket) {
            throw new Error()
        }

        req.token = token
        req.ticket = ticket
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
}

module.exports = auth