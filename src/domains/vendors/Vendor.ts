import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema({
  name: String,
  deleted: { type: Boolean, default: false },
});

vendorSchema.statics.paginate = function(limit: Number, skip: Number) {
  return this.find({ deleted: false })
    .limit(limit)
    .skip(skip);
};

const Vendor = mongoose.model("Vendor", vendorSchema);
export default Vendor;
