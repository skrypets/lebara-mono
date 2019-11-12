module.exports = {
  name: 'lb-ses',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/lb-ses',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
