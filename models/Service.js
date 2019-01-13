import mongoose from 'mongoose'

const Service = mongoose.model(
  'service',
  new mongoose.Schema({
    title: {
      type: String,
      maxlength: 50,
      trim: true
    },
    type: [
      {
        type: String,
        enum: ['facebook', 'youtube', 'twitter', 'instgram']
      }
    ],
    client: {
      type: mongoose.Types.ObjectId,
      ref: 'client'
    },
    link: {
      type: String,
      maxlength: 200
    },
    description: {
      type: String,
      maxlength: 500
    }
  })
)

export default Service
