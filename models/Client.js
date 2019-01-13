import mongoose from 'mongoose'

const Client = mongoose.model(
  'client',
  new mongoose.Schema({
    title: {
      type: String,
      maxlength: 50,
      trim: true,
      required: true
    },
    description: {
      type: String,
      maxlength: 500
    },
    contactPhone: {
      type: String,
      maxlength: 30,
      required: true
    },
    contractStartDate: { type: Date, required: true },
    contractEndDate: { type: Date, required: true }
  })
)

export default Client
