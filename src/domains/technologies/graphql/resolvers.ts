import * as TechnologyService from "../TechnologyService";

export default {
  Query: {
    getTechnology: (obj, args) => TechnologyService.getById(args.id),
    getTechnologies: (obj, args) =>
      TechnologyService.paginate(args.limit, args.skip),
    getNumberOfTechnologies: (obj, args) =>
      TechnologyService.getNumberOfTechnologies(),
  },
  Mutation: {
    createTechnology: (obj, args) => TechnologyService.create(args.technology),
    updateTechnology: (obj, args) =>
      TechnologyService.update(args.id, args.technology),
    deleteTechnology: (obj, args) => TechnologyService.softDelete(args.id),
  },
  Technology: {
    id: (obj) => obj._id,
  },
};
