require("../vendors/Vendor");
import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const technologySchema = new mongoose.Schema({
  name: String,
  vendors: [{ type: ObjectId, ref: "Vendor" }],
  deleted: { type: Boolean, default: false },
});

technologySchema.statics.paginate = function(limit: Number, skip: Number) {
  return this.find({ deleted: false })
    .populate("vendors")
    .limit(limit)
    .skip(skip);
};

technologySchema.methods.populateAll = function() {
  return this.populate("vendors").execPopulate();
};

const Technology = mongoose.model("Technology", technologySchema);
export default Technology;
