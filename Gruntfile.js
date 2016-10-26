module.exports = function(grunt) {

	grunt.initConfig({
		  sass: {
		    dist: {
		      files: [{
		        expand: true,
		        cwd: 'src/sass',
		        src: ['*.scss'],
		        dest: 'dist/css',
		        ext: '.css'
		      }]
		    }
		  }
		});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.registerTask('default', ['sass']);

}