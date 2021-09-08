<?php

use Illuminate\Http\Request;
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
});

// https://github.com/laravel/fortify/commit/7b909a52b23e1aaedcfaf5b5707a1887235c7d91

Route::get('/reset-password/{token}', function ($token, Request $request) {
    return redirect(config('app.spa_url') . 'auth/reset-password/' . $token . '?email=' . $request->query('email'));
})->middleware('guest')->name('password.reset');
