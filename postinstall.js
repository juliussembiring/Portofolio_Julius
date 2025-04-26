const execSync = require('child_process').execSync;

try {
    execSync('npm install --legacy-peer-deps', { stdio: 'inherit' });
} catch (error) {
    console.error('Error during postinstall:', error);
    process.exit(1);
}