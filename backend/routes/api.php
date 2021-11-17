<?php

use App\Http\Controllers\PostApiController;
use App\Http\Controllers\BlogApiController;
use App\Http\Controllers\UserApiController;
use App\Models\Post;
use Illuminate\Auth\Events\Validated;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
// post api
Route::get('/posts',[PostApiController::class,'getPost']);

Route::get('/posts/{post}',[PostApiController::class,'getPostById']);

Route::post('/posts',[PostApiController::class,'store']);

Route::put('/posts/{post}',[PostApiController::class,'update']);

Route::delete('/posts/{post}',[PostApiController::class,'delete']);

// blog api 
Route::get('/blogs',[BlogApiController::class,'getBlog']);

Route::get('/blogs/{blog}',[BlogApiController::class,'getBlogById']);

Route::post('/blogs',[BlogApiController::class,'store']);

Route::put('/blogs/{blog}',[BlogApiController::class,'update']);

Route::delete('/blogs/{blog}',[BlogApiController::class,'delete']);

// user api
Route::get('/users',[UserApiController::class,'getUser']);

Route::get('/users/{user}',[UserApiController::class,'getUserById']);

Route::post('/users',[UserApiController::class,'store']);

Route::put('/users/{user}',[UserApiController::class,'update']);

Route::delete('/users/{user}',[UserApiController::class,'delete']);