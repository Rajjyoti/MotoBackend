import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema({
    make: {
      type: String,
      required: true
    },
    model: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    licensePlate: {
      type: String,
      required: true,
      unique: true
    },
    driver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Driver',
      required: true
    }
  });
  
const Vehicle = mongoose.model('Vehicle', vehicleSchema);
  
export default Vehicle;
  