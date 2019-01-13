import mongoose from 'mongoose'

const Client = mongoose.model(
  'client',
  new mongoose.Schema({
    title: {
      type: String,
      maxlength: 50,
      trim: true
    },
    description: {
      type: String,
      maxlength: 500
    },
    contactPhone: {
      type: String,
      maxlength: 30
    },
    contractStartDate: Date,
    contractEndDate: Date
  })
)

export default Client
