import * as VendorService from "../VendorService";

export default {
  Query: {
    getVendor: (obj, args) => VendorService.getById(args.id),
    getVendors: (obj, args) => VendorService.paginate(args.limit, args.skip),
    getNumberOfVendors: (obj, args) => VendorService.getNumberOfVendors(),
  },
  Mutation: {
    createVendor: (obj, args) => VendorService.create(args.vendor),
    updateVendor: (obj, args) => VendorService.update(args.id, args.vendor),
    deleteVendor: (obj, args) => VendorService.softDelete(args.id),
  },
  Vendor: {
    id: (obj) => obj._id,
  },
};
