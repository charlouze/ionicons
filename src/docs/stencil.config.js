exports.config = {
  namespace: 'DocsSite',
  srcDir: 'site/',
  wwwDir: '../../docs/',
  copy: [
    { src: '../../../dist/ionicons', dest: 'build/ionicons' },
    { src: '../../../dist/ionicons.js', dest: 'build/ionicons.js' },
    { src: '../../../dist/data/ionicons.json', dest: 'build/data.json' }
  ]
};
