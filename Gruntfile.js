module.exports = function(grunt){
	grunt.initConfig({
		sass:{
			dist:{
				files:{
					'css/public.css':'scss/public.scss',
					'css/login.css':'scss/login.scss',
					'css/bind.css':'scss/bind.scss',
					'css/choose.css':'scss/choose.scss',
					'css/info.css':'scss/info.scss',
					'css/upload.css':'scss/upload.scss',
					'css/order.css':'scss/order.scss',
					'css/state.css':'scss/state.scss',
					'css/my.css':'scss/my.scss'
				}
			}
		},
		concat:{
			myConcat:{
				src:['css/a_reset.css','css/public.css','css/login.css','css/bind.css','css/choose.css','css/info.css','css/upload.css','css/order.css','css/state.css','css/my.css'],
				dest:'dest/style.css'
			}
		},
		cssmin:{
			compress:{
				src:'dest/style.css',
				dest:'cssmin/style.css'
			}
		},
		connect: {
            server: {
                options: {
                    port: '8080',
                    hostname: '127.0.0.1',
                    base: '',
                    open: {
                        target: 'http://localhost:8080/html/login.html', 
                        appName: 'Chrome',
                        callback: function () {
                          
                        }
                    },
                    livereload: true
                }
            }
        },
		watch:{
			sass:{
				files:['scss/*.scss'],
				tasks:['sass','concat','cssmin']
			},
			target:{
				files:['html/*','cssmin/*']
			},
			options:{
				livereload:true
			}
		},
		clean:['dest/*','cssmin/*']
	});

	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);
	grunt.file.defaultEncoding = 'UTF-8';

	grunt.registerTask('default',['clean','connect','sass','concat','cssmin','watch']);
}