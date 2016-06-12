
var config=require('./config.json');
var Tasks=require('elliptical-gulp');
var gulp=require('gulp');


var tasks=new Tasks(config);

gulp.task('init',function(){
    build();
});

gulp.task('default',function(){
    tasks.default();
});

gulp.task('start-server',function(){
    tasks.startServer();
});

gulp.task('start',function(){
    tasks.start();
});

gulp.task('start-app',function(){
    tasks.startApp();
});

gulp.task('start-app-no-sass',function(){
    tasks.startAppNoSass();
});

gulp.task('sass-compile', function () {
    tasks.sassCompile();
});

gulp.task('sass-watch', function () {
    tasks.sassWatch();
});

gulp.task('app-watch', function () {
    tasks.appWatch();
});

gulp.task('app-build', function () {
    tasks.appBuild();
});

gulp.task('app-imports', function () {
    tasks.appImports();
});

gulp.task('app-scaffold', function () {
    tasks.appImports();
});

gulp.task('watch', function () {
    tasks.watch();
});

gulp.task('app-clean', function () {
    tasks.appClean();
});

gulp.task('vulcanize', function () {
    tasks.vulcanize();
});

gulp.task('vulcanize-min', function () {
    tasks.vulcanizeMin();
});



function build(){
    copyCommonPublicTask();
    copyServicesTask();
    copyProvidersTask();
    copyDependenciesTask();
    copyReferencesTask();
    copySassTask();
    copyIndexTask();
    copyBowerTask();
    copyMainAppFileTask();
    copyImportFileTask();
    copyAppImportFileTask();
    copyVulcanized();

}

function copyCommonPublicTask(){
    gulp.src('./node_modules/dashboard-common/src/public/**/*.*')
        .pipe(gulp.dest('./public/'));
}

function copyServicesTask(){
    gulp.src('./src/public/app/services/**/*.*')
        .pipe(gulp.dest('./public/app/services/'));
}

function copyDependenciesTask(){
    gulp.src('./src/public/app/dependencies/**/*.*')
        .pipe(gulp.dest('./public/app/dependencies/'));
}

function copyReferencesTask(){
    gulp.src('./src/public/app/references/**/*.*')
        .pipe(gulp.dest('./public/app/references/'));
}

function copyProvidersTask(){
    gulp.src('./src/public/app/providers/**/*.*')
        .pipe(gulp.dest('./public/app/providers/'));
}

function copySassTask(){
    gulp.src('./node_modules/dashboard-common/src/sass/**/*.*')
        .pipe(gulp.dest('./sass/'));
}

function copyIndexTask(){
    gulp.src('./src/public/index.html')
        .pipe(gulp.dest('./public/'));
}

function copyBowerTask(){
    gulp.src('./node_modules/dashboard-common/src/bower.json')
        .pipe(gulp.dest('./'));
}

function copyMainAppFileTask(){
    gulp.src('./src/public/app/app.js')
        .pipe(gulp.dest('./public/app/'));
}

function copyImportFileTask(){
    gulp.src('./src/public/imports/import.html')
        .pipe(gulp.dest('./public/imports/'));
}

function copyAppImportFileTask(){
    gulp.src('./src/public/imports/app.html')
        .pipe(gulp.dest('./public/imports/'));
}

function copyVulcanized(){
    gulp.src('./src/public/vulcanized/import.html')
        .pipe(gulp.dest('./public/vulcanized/'));
}