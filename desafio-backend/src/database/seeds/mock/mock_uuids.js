const uuid = require('uuid').v4;

const uuids = {
  navers: {
    thiago: uuid(),
    daniel: uuid(),
    juliano: uuid(),
  },
  projects: {
    api: uuid(),
    website: uuid(),
  },
};

module.exports = uuids;
