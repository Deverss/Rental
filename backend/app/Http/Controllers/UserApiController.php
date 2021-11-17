<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Exception;
use Storage;

class UserApiController extends Controller
{

    public function getImageUrl($file){
        try{
            $path = "";
            // if($request->hasFile('img')){
                // $file = $request->file('img');
                $filename = $file->getClientOriginalName();
                $finalName = date('His').$filename;
                error_log($filename);
                $googleDriveStorage = Storage::disk('google');
                
                $googleDriveStorage->put($finalName,file_get_contents($file->getRealPath()));
                $fileInfo = collect($googleDriveStorage->listContents('/',false))
                ->where('type','file')
                ->where('name',$finalName)
                ->first();
                $contents = $fileInfo['path'];
                error_log($contents);
                $path = "https://drive.google.com/uc?export=view&id=".$contents;
                
                return $path;
        } catch(Exception $e){
            error_log($e->getMessage());
        }
    }


    public function getUser(){
        return User::all();
    }

    public function getUserById(User $user){
        return User::find($user);
    }

    public function store(){

        request() -> validate([
            'name' => 'required',
            'email' => 'required',
            'password' => 'required',
        ]);
        
        error_log($this->getImageUrl(request('Image')));
        return User::create([
            'name' => request('name'),
            'email' => request('email'),
            'password' => request('password'),
            'image' => $this->getImageUrl(request('Image')),
            'zalo' => request('zalo'),
            'phone' => request('phone'),
            'facebook' => request('facebook'),
        ]);
    }

    public function update(User $user){
        request() -> validate([
            'name' => 'required',
            'email' => 'required',
            'password' => 'required',
            'image' => 'required',
        ]);
    
        $user->update([
            'name' => request('name'),
            'email' => request('email'),
            'password' => request('password'),
            'image' => $this->getImageUrl(request('Image')),
            'zalo' => request('zalo'),
            'phone' => request('phone'),
            'facebook' => request('facebook'),
        ]);
    }

    public function delete(User $user){
        $success = $user->delete();
    
        return ['success' => $success];
    }
}
