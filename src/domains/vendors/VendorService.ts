import Vendor from "./Vendor";

export const paginate = async (limit: Number = 10, skip: Number = 0) => {
  try {
    const vendors = await Vendor.paginate(limit, skip);
    return vendors;
  } catch (e) {
    // TODO graphql error
    console.error(e);
  }
};

export const getById = async (id: String) => {
  try {
    const vendor = await Vendor.findOne({ _id: id, deleted: false });
    return vendor;
  } catch (e) {
    console.error(e);
  }
};

export const create = async (vendorData) => {
  try {
    const vendor = new Vendor(vendorData);
    await vendor.save();

    return vendor;
  } catch (e) {
    console.error(e);
  }
};

export const update = async (id: string, vendorData) => {
  try {
    const vendor = await Vendor.findByIdAndUpdate(id, vendorData);
    return vendor;
  } catch (e) {
    console.error(e);
  }
};

export const softDelete = async (id) => {
  try {
    const response = await Vendor.updateOne({ _id: id }, { deleted: true });
    return !!response.nModified;
  } catch (e) {
    console.error(e);
  }
};

export const getNumberOfVendors = async () => {
  try {
    const count = await Vendor.countDocuments({ deleted: false });
    return count;
  } catch (e) {
    console.error(e);
  }
};
