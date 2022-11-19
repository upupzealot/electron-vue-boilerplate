module.exports = {
  getVersions() {
    return {
      'chrome': process.versions['chrome'],
      'node': process.versions['node'],
      'electron': process.versions['electron'],
    };
  },
}
