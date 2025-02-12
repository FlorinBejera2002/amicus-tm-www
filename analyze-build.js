const fs = require('fs');
const path = require('path');
const prettyBytes = require('pretty-bytes');

// Define the folder where the build artifacts are stored
const buildDir = path.join(__dirname, '.next');

// A function to calculate the size of files in a directory
function getDirectorySize(dirPath) {
    const files = fs.readdirSync(dirPath);
    let totalSize = 0;

    files.forEach((file) => {
        const filePath = path.join(dirPath, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            totalSize += getDirectorySize(filePath); // Recursively sum directories
        } else {
            totalSize += stat.size; // Add the size of the file
        }
    });

    return totalSize;
}

// Analyze the build directory and output the sizes of various assets
function analyzeBuild() {
    const jsDir = path.join(buildDir, 'static', 'chunks');
    const cssDir = path.join(buildDir, 'static', 'css');
    const mediaDir = path.join(buildDir, 'static', 'media');

    const jsSize = getDirectorySize(jsDir);
    const cssSize = getDirectorySize(cssDir);
    const mediaSize = getDirectorySize(mediaDir);
    const totalSize = jsSize + cssSize + mediaSize;

    // biome-ignore lint/suspicious/noConsoleLog: <explanation>
    console.log('Build Analysis:');
    // biome-ignore lint/suspicious/noConsoleLog: <explanation>
    console.log('JavaScript Chunks: ', prettyBytes(jsSize));
    // biome-ignore lint/suspicious/noConsoleLog: <explanation>
    console.log('CSS Files: ', prettyBytes(cssSize));
    // biome-ignore lint/suspicious/noConsoleLog: <explanation>
    console.log('Media Assets: ', prettyBytes(mediaSize));
    // biome-ignore lint/suspicious/noConsoleLog: <explanation>
    console.log('Total Build Size: ', prettyBytes(totalSize));
}

// Run the analysis
analyzeBuild();
