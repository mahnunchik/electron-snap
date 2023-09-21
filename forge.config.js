module.exports = {
  packagerConfig: {
    asar: true,
  },
  makers: [
    {
      name: '@electron-forge/maker-snap',
      config: {
        summary: 'My Electron application'
      },
    },
  ],
};
