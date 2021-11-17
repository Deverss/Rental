<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Blog;
use Exception;
use Storage;

class BlogApiController extends Controller
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


    public function getBlog(){
        return Blog::all();
    }

    public function getBlogById(Blog $blog){
        return Blog::find($blog);
    }

    public function store(){

        request() -> validate([
            'userID' => 'required',
            'title' => 'required',
            'description' => 'required',
            'content' => 'required',
            'Image' => 'required',
        ]);
        
        error_log($this->getImageUrl(request('Image')));
        return Blog::create([
            'userID' => request('userID'),
            'title' => request('title'),
            'description' => request('description'),
            'content' => request('content'),
            'Image' => $this->getImageUrl(request('Image')),
            'views' => request('views'),
        ]);
    }

    public function update(Blog $blog){
        request() -> validate([
            'userID' => 'required',
            'title' => 'required',
            'description' => 'required',
            'content' => 'required',
            'Image' => 'required',
        ]);
    
        $blog->update([
            'userID' => request('userID'),
            'title' => request('title'),
            'description' => request('description'),
            'content' => request('content'),
            'Image' => $this->getImageUrl(request('Image')),
            'views' => request('views'),
        ]);
    }

    public function delete(Blog $post){
        $success = $post->delete();
    
        return ['success' => $success];
    }
}
