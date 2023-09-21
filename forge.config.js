module.exports = {
  packagerConfig: {
    asar: true,
  },
  makers: [
    {
      name: '@electron-forge/maker-snap',
      config: {
        summary: 'My Electron application',
      },
    },
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'mahnunchik',
          name: 'electron-snap',
        },
      },
    },
  ],
};
