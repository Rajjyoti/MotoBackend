import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
  name: { type: String, required: true},
  rating: { type: Number, required: true},
  comment: { type: String, required: true},
  user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
  },
}, {
  timestamps: true
})

const driverSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0
  },
    location: {
      type: {
        type: String,
        enum: ['Point'],
        required: true
      },
      coordinates: {
        type: [Number],
        index: '2dsphere',
        required: true
      }
    }
  }, {
    timestamps: true
  });
  
  const Driver = mongoose.model('Driver', driverSchema);

  export default Driver;