<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', "AuthController@login");
Route::group(['middleware' => 'auth:passport'], function () {
    Route::get('profile', "AuthController@payload");
    Route::get('logout', "AuthController@logout");
    Route::post('organisations', "DataController@organisations");
    Route::post('users', "DataController@users");
    Route::put('users/status', "DataController@status");
    Route::delete('users/delete/{user}', "DataController@delete");
    Route::match(['put', 'get'], 'users/{user}', "DataController@edit");
    Route::get('dropdown', "DataController@dropdown");
});
