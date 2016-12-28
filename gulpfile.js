const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application as well as publishing vendor resources.
 |
 */

elixir(function (mix) {
    mix.sass([
        'app.scss',
        '/pages/about.scss',
        '/pages/quests.scss',
        '/pages/franchise.scss'
    ], 'public/css')
        .sass('pages/home.scss', 'public/css/home.css')
        .sass('pages/about.scss', 'public/css/about.css')
        .sass('pages/quests.scss', 'public/css/quests.css')
        .sass('pages/franchise.scss', 'public/css/franchise.css');

});

elixir(function (mix) {
    mix.webpack('basic.js', 'public/js/basic.js');
});

/*
 elixir((mix) => {
 mix.sass('app.scss')
 .mix.sass('header.scss')
 .webpack('app.js');
 });
 */
