const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log(' Building Career Path Finder for all platforms...\n');

// Build React app
console.log(' Building React app...');
execSync('cd frontend && npm run build', { stdio: 'inherit' });

// PWA
console.log('\n PWA ready at: frontend/build');

// Electron Desktop Apps
if (fs.existsSync('electron-app')) {
  console.log('\n Building desktop apps...');
  
  // Windows
  console.log('   • Building Windows .exe...');
  execSync('cd electron-app && npm run dist-win', { stdio: 'inherit' });
  
  // Mac (only on macOS)
  if (process.platform === 'darwin') {
    console.log('   • Building macOS .dmg...');
    execSync('cd electron-app && npm run dist-mac', { stdio: 'inherit' });
  }
  
  // Linux
  if (process.platform === 'linux') {
    console.log('   • Building Linux AppImage...');
    execSync('cd electron-app && npm run dist-linux', { stdio: 'inherit' });
  }
}

// Capacitor Mobile
if (fs.existsSync('frontend/android')) {
  console.log('\n Building mobile apps...');
  execSync('cd frontend && npx cap copy', { stdio: 'inherit' });
  console.log('   • Android: Open android folder in Android Studio to build APK');
  console.log('   • iOS: Open ios folder in Xcode to build IPA');
}

console.log('\n Build complete! Check the following locations:');
console.log('   • PWA: frontend/build/');
console.log('   • Desktop: electron-app/dist/');
console.log('   • Mobile: frontend/android/ & frontend/ios/');