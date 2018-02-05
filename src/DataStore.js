const DataStore = {
  users: [{
    userID: 1,
    username: 'joshcarrier',
    firstName: 'Josh',
  }, {
    userID: 2,
    username: 'qijinzhou',
    firstName: 'Qijin',
  }, {
    userID: 3,
    username: 'oliverzheng',
    firstName: 'Oliver',
  }],
  poops: [{
    userID: 1,
    timestamp: 1517623604,
    location: {
      lat: 47.620440,
      long: -122.347173,
    },
  }, {
    userID: 2,
    timestamp: 1517603604,
    location: {
      lat: 47.614412,
      long: -122.337884,
    },
  }, {
    userID: 3,
    timestamp: 1517611000,
    location: {
      lat: 47.610672,
      long: -122.338347,
    },
  }],
};

export default DataStore;
