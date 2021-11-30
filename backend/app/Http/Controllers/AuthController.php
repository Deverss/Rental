<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        return User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
        ]);
        //non =))
    }
    public function login(Request $request)
    {
        if(!Auth::attempt($request->only('email','password'))){
            error_log(Request('email'));
            error_log(Request('password'));
            return response([
                'message' => 'invalid credentials'
            ],Response::HTTP_UNAUTHORIZED);
        }

        $user = Auth::user();
        $token = $user->createToken('token')->plainTextToken;
        $cookie = cookie('token',$token,60*24);

        return response(['token' => $token])->withCookie($cookie);
    }
    public function user(){
        return Auth::user();
    }
    public function logout(){
        $cookie = Cookie::forget('token');
        return response([
            'message' => 'success',
        ])->withCookie($cookie);
    }
}
