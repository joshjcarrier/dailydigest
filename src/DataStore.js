const DataStore = {
  users: [{
    userID: 1,
    username: 'joshcarrier',
    firstName: 'Josh',
    groups: [2, 3, 5],
  }, {
    userID: 2,
    username: 'qijinzhou',
    firstName: 'Qijin',
    groups: [2, 4, 6],
  }, {
    userID: 3,
    username: 'oliverzheng',
    firstName: 'Oliver',
    groups: [1, 4, 5],
  }],

  groups: [{
    groupID: 1,
    name: 'Seattle',
    stats: {
      poopsInLast24Hours: 10,
      poopsInLast7Days: 73,
      poopsInLast30Days; 298,
    },
  }, {
    groupID: 2,
    name: 'Non-Seattle',
    stats: {
      poopsInLast24Hours: 8,
      poopsInLast7Days: 78,
      poopsInLast30Days; 150,
    },
  }, {
    groupID: 3,
    name: 'Microsoft',
    stats: {
      poopsInLast24Hours: 2,
      poopsInLast7Days: 30,
      poopsInLast30Days; 199,
    },
  }, {
    groupID: 4,
    name: 'Silicon Valley Companies',
    stats: {
      poopsInLast24Hours: 109,
      poopsInLast7Days: 190,
      poopsInLast30Days; 348,
    },
  }, {
    groupID: 5,
    name: 'Macbook Pro Owners',
    stats: {
      poopsInLast24Hours: 39,
      poopsInLast7Days: 158,
      poopsInLast30Days; 420,
    },
  }, {
    groupID: 6,
    name: 'Macbook Air Owners',
    stats: {
      poopsInLast24Hours: 3,
      poopsInLast7Days: 83,
      poopsInLast30Days; 104,
    },
  }],

  groupCompetitions: [{
    group1ID: 1,
    group2ID: 2,
  }, {
    group1ID: 3,
    group2ID: 4,
  }, {
    group1ID: 5,
    group2ID: 6,
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
