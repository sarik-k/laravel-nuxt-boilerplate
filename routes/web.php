<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $path = base_path('/client/dist/index.html');

    abort_unless(file_exists($path), 400, 'Make sure to run npm run build!');

    return file_get_contents($path);
});
