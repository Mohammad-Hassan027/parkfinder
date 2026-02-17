import mongoose from "mongoose";

const parkingLogSchema = new mongoose.Schema({
  bookingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Booking",
    required: true
  },
  entryTime: { type: Date, default: null },
  exitTime: { type: Date, default: null },
  status: {
    type: String,
    enum: ["active", "completed"],
    default: "active"
  }
});

export default mongoose.model("ParkingLog", parkingLogSchema);
