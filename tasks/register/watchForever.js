module.exports = function (grunt) {
// Starts server
    grunt.registerTask('start', [
        'compileAssets',
        'linkAssetsBuild',
        'clean:build',
        'copy:build',
        'forever:server:start'
    ]);

    // Restarts the server (if necessary) and waits for changes
    grunt.registerTask('startWatch', [
        'restart',
        'watch:server'
    ]);

    // Restarts server
    grunt.registerTask('restart', [
        'forever:server:restart'
    ]);

    // Stops server
    grunt.registerTask('stop', [
        'forever:server:stop'
    ]);
};