const createError = require('http-errors');
const mongoose = require('mongoose');

const Event = require('../Models/Event.model')

module.exports = {
   getAllEvents: async (req, res, next)=> {
     try {
        const result = await Event.find({}, {__v: 0})
        //const results = await Event.find({},{name: 1})
        res.send(result)
     } catch (error) {
         console.log(error.message)
     }

   },
   
   createNewEvent: async (req, res, next) => {
       try {
           //const event = new Event(req.body)
           const event = req.body.map( x=> new Event(x)) 
           
           const result = await Promise.all(event.map(x => x.save()))
           //const result = await event.save()
           
           
           res.send(result)
       } catch (error) { 
           console.log(error.message)
           if (error.name === 'ValidationError'){
               next(createError(422, error.message))
               return
           }
           next(error)
       }
   },
   deleteAll: async (req, res, next) => {
       try {
           Event.deleteMany({},(err) =>{
               if(err){
                   console.log(err)
               }
               console.log("Successful deletion");
           })
           
       } catch (error) {
           console.log(error.message)
           if(error.name === 'ValidationError'){
               next(createError(422, error.message))
               return
           }
           next(error)
           
       }
   }

}