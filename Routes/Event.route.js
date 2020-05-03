const express = require('express');
const router = express.Router();

const EventController = require('../Controllers/Event.Controller');

//Get a list of all events
router.get('/data', EventController.getAllEvents);

//Create a new event
router.post('/', EventController.createNewEvent);

//Delete All documents
router.delete('/delete',EventController.deleteAll)
// //Get a event by id
// router.get('/event/:id', EventController.findProductById);

// //Update a event by id
// router.patch('/event/:id', EventController.updateAProduct);

// //Delete a event by id
// router.delete('/event/:id', EventController.deleteAProduct);

module.exports = router;
