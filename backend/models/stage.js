const mongoose=require("mongoose"); 
const coordinator = mongoose.Schema({
  Name: { type: String, required: true },
  Number: { type: Number, required: true },
});

const stageSchema = mongoose.Schema({
  eventName: { type: String, required: true },
  eventLocation: { type: String, required: true },
  coordinators: [coordinator],
  time: { type: String, required: true },
  description: { type: String, required: true },
  eventType: { type: String, required: true },
  studentCoordinators: [coordinator],
});
const stageModel=mongoose.model("stagedetail",stageSchema);
module.exports=stageModel;