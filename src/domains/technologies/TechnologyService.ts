import Technology from "./Technology";

export const paginate = async (limit: Number = 10, skip: Number = 0) => {
  try {
    const technologies = await Technology.paginate(limit, skip);
    return technologies;
  } catch (e) {
    // TODO graphql error
    console.error(e);
  }
};

export const getById = async (id: String) => {
  try {
    const technology = await Technology.findOne({
      _id: id,
      deleted: false,
    });
    await technology.populateAll();

    return technology;
  } catch (e) {
    console.error(e);
  }
};

export const create = async (technologyData) => {
  try {
    const technology = new Technology(technologyData);
    await technology.save();
    await technology.populateAll();

    return technology;
  } catch (e) {
    console.error(e);
  }
};

export const getIdByNameOrCreate = async (technologyData) => {
  try {
    const { name } = technologyData;
    const technology = await Technology.findOne({
      name: new RegExp(name, "gi"),
    });

    if (!technology) {
      const newTechnology = await create(technologyData);
      return newTechnology._id;
    }

    return technology._id;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const update = async (id: string, technologyData) => {
  try {
    const technology = await Technology.findByIdAndUpdate(id, technologyData, {
      new: true,
    });
    await technology.populateAll();

    return technology;
  } catch (e) {
    console.error(e);
  }
};

export const softDelete = async (id: string) => {
  try {
    const response = await Technology.updateOne({ _id: id }, { deleted: true });
    return !!response.nModified;
  } catch (e) {
    console.error(e);
  }
};

export const getNumberOfTechnologies = async () => {
  try {
    const count = await Technology.countDocuments({ deleted: false });
    return count;
  } catch (e) {
    console.error(e);
  }
};
