module.exports = function (grunt) {
	grunt.initConfig({
		concat: {
			options: {
				separator: ';\n',
			},
			dist: {
			  src: ['src/js/first.js', 'src/js/second.js'],
			  dest: 'dist/js/main.js',
			}
		},
		uglify: {
			options: {
			  mangle: false
			},
			dist: {
				files: {
					'dist/js/main.min.js': ['dist/js/main.js']
				}
			}
		},
		less: {
		  dev: {
			files: {
				"dist/css/main.css": "src/less/main.less"
			}
		  },
		  prod: {
			options: {
				compress: true
			},
			files: {
				"dist/css/main.min.css": "src/less/main.less"
			}
		  }
		},
		watch: {
			js: {
				files: ['src/js/*.js'],
				tasks: ['concat'],
				options: {
				  spawn: false,
				}
			},
			less: {
				files: ['src/less/*.less'],
				tasks: ['less:dev'],
				options: {
				  spawn: false,
				}
			}
		}
	});	
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('default', ['concat', 'uglify', 'less:prod']);
}