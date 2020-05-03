var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const EventSchema = new Schema({
  schedule:
  {
    "durationUnit": String,
    "dayOfMonth": {
      type: Array
    },
    "lastDayOfMonth": {
      type: Array
    },
    "year": {
      type: Array
    },
    "month": {
      type: Array
    }
  },
  data:
  {
    "title": String,
    "color":{
      type: String
    },
    "description": {
      type: String
    },
    "location": {
      type: String
    },
    "forecolor":{
      type: String
    },
    "busy": {
      type: Boolean
    },
    "icon": {
      type: String
    }
  }
});

const Event = mongoose.model('event', EventSchema)
module.exports = Event;

//schedule: {durationUnit: "hours", dayOfMonth: [12], year: [2020], month: [2]}
// data: {title: "End of Month", color: "#000000", description: "", location: "", forecolor: "#ffffff",…}
// title: "End of Month"
// color: "#000000"
// description: ""
// location: ""
// forecolor: "#ffffff"
// calendar: ""
// busy: true
// icon: ""
// schedule: {durationUnit: "hours", lastDayOfMonth: [1]}
// durationUnit: "hours"
// lastDayOfMonth: [1]

// title: {
//   type: String,
//   required: true
// },
// color:{
//   type: String
// },
// description: {
//   type: String
// },
// location: {
//   type: String
// },
// forecolor:{
//   type: String
// },
// busy: {
//   type: Boolean
// },
// icon: {
//   type: String
// }

// {
  // "durationUnit": String,
  // "dayOfMonth": {
  //   type: Array
  // },
  // "lastDayOfMonth":{
  //   type: Array
  // },
  // "year":{
  //   type: Array
  // },
  // "month":{
  //   type: Array
  // }
// }