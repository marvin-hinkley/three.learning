module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //Lint JS files
        jshint: {
            options: {
                reporter: require('jshint-stylish')
            },

            //Gruntfile and all js files in src
            build: ['Gruntfile.js', 'public/js/**/*.js']
        },

        //Compile SASS files via compass
        compass: {
            dev: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'public/css',
                    fontsPath: 'fonts',
//                    importPath: ['bower_components/foundation/scss'],
                    environment: 'development',
                    outputStyle: 'expanded',
                    sourcemap: true,
                    force: true
                }
            }
        },
        
        //Auto-run grunt tasks
        watch: {
            stylesheets: {
                files: ['sass/*.scss'],
                tasks: ['compass:dev', 'beep']
            },
            scripts: {
                files: 'public/**/*.js',
                tasks: ['jshint', 'beep']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-beep');

    grunt.registerTask('default', ['jshint', 'compass:dev', 'beep', 'watch']);
};