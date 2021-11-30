<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use Exception;
use Storage;
use Illuminate\Support\Facades\DB;
class PostApiController extends Controller
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

    public function getPost(){
        return Post::all();
    }

    public function getPostById(Post $post){
        $info = DB::table('posts')
                ->join('users','users.id','=','posts.uid')
                ->select('posts.*', 'users.name')
                ->where('posts.id','=',$post->id)
                ->get();
        
        return $info;
    }

    public function store(){
        request() -> validate([
            'title' => 'required',
            'content' => 'required',
        ]);
        return Post::create([
            'uid' => request('uid'),
            'type' => request('type'),
            'title' => request('title'),
            'description' => request('description'),
            'people' => request('people'),
            'area' => request('area'),
            'views' => request('views'),
            'remain' => request('remain'),
            'imageAddress' => $this->getImageUrl(request('Image')),
            'bed' => request('bed'),
            'airC' => request('airC'),
            'tv' => request('tv'),
            'fridg' => request('fridg'),
            'vr' => request('vr'),
        ]);
    }

    public function update(Post $post){
        request() -> validate([
            'title' => 'required',
            'content' => 'required',
        ]);
    
        $post->update([
            'uid' => request('uid'),
            'type' => request('type'),
            'title' => request('title'),
            'description' => request('description'),
            'people' => request('people'),
            'area' => request('area'),
            'views' => request('views'),
            'remain' => request('remain'),
            'imageAddress' => $this->getImageUrl(request('Image')),
            'bed' => request('bed'),
            'airC' => request('airC'),
            'tv' => request('tv'),
            'fridg' => request('fridg'),
            'vr' => request('vr'),
        ]);
    }

    public function delete(Post $post){
        $success = $post->delete();
    
        return ['success' => $success];
    }
}
