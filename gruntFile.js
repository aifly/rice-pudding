/**
 * Created by fly on 2016/6/12 0012.
 */

var fs = require('fs'),
    currentDir = './static/';

var files = fs.readdirSync(__dirname+'/static/images');
var fileObj =  {};
files.forEach(function(f){
    fileObj[currentDir+'imgs/'+f]=currentDir+'images/'+f;
});




module.exports = function(grunt) {

    // Project configuration.
    // var mozjpeg = require('imagemin-mozjpeg');
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        imagemin: {
            /* 压缩图片大小 */
            imageUglify: {
                files: {
                }
            },
            dynamic: {                         // Another target
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: './static/images/',                   // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
                    dest: './static/imgs/'                  // Destination path prefix
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('default', ['imagemin']);
};
