const { spawn } = require('child_process');

['', 'typescript', 'webpack'].forEach(pkg => {
  const name = ['build', 'rig', ...(pkg ? [pkg] : [])];

  const cp = spawn('tsc', ['-p', `packages/${name.join('-')}`, '-w', '--preserveWatchOutput'], { stdio: 'pipe' });
  cp.stdout.pipe(process.stdout);
  cp.stderr.pipe(process.stderr);
});
