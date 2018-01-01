//引入
var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifycss = require('gulp-minify-css');
var mock = require('mockjs');
var webserver = require('gulp-webserver');
var getMock = function (res) {
    var arr = [];
    for (var i = 0; i < 5; i++) {
        var foo = mock.mock({
            "name": "@cname",
            "title": "@title",
            "images": "images/" + i + ".jpg"
            })
        arr.push(foo);
    }
    res.end(JSON.stringify(arr));
}
gulp.task('minifycss', function () {
    //读取
    gulp.src("./Content/css/*.css")
        .pipe(concat("bundle.css"))
        .pipe(minifycss())
        .pipe(gulp.dest("Content/css"));
    })
gulp.task('minifyjs', function () {
    //读取
    gulp.src("./Content/js/*.js")
        .pipe(concat("in.js"))
        .pipe(uglify())
        .pipe(gulp.dest('Content/js'));
    })
//创建任务
gulp.task("web", function () {
    gulp.src(".")
        .pipe(webserver({
            host: 'localhost',
            port: 8090,
            fallback: "index.html"
            }))
    });
gulp.task("server", function () {
    gulp.src(".")
        .pipe(webserver({
            host: "localhost",
            port: 8080,
            livereload: true,
            fallback: "index.html",
            middleware: function (req, res, next) {
                res.writeHead(200, {
                    'content-type': 'text/json;charset=utf-8',
                    'Access-Control-Allow-Origin': '*'
                });
                getMock(res);
            }
            }));
    })
gulp.task("default", ["minifycss", "minifyjs", "web", "server"]);