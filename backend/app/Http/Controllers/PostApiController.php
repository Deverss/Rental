<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use Exception;
use Storage;
use Illuminate\Support\Facades\DB;
use phpDocumentor\Reflection\Types\Integer;

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

    public function getPostById($id){
        $info = DB::table('posts')
                ->join('users','users.id','=','posts.uid')
                ->select('posts.*', 'users.name')
                ->where('posts.id','=',$id)
                ->get();
        return $info;
    }

    public function getLimitPost($limit){
        return DB::table('posts')
                ->limit($limit)
                ->get();
    }

    public function store(){
        request() -> validate([
            'title' => 'required',
            'description' => 'required',
        ]);
        // error_log(request('uid'));
        // error_log(request('type'));
        // error_log(request('title'));
        // error_log(request('description'));
        // error_log(request('address'));
        // error_log(request('price'));
        // error_log(request('electricPrice'));
        // error_log(request('waterPrice'));
        // error_log(request('internetPrice'));
        // error_log(request('vehiclePrice'));
        // error_log(request('people'));
        // error_log(request('area'));
        // error_log(request('views'));
        // error_log(request('remain'));
        // error_log(request('Image'));
        // error_log(request('bed'));
        // error_log(request('airC'));
        // error_log(request('tv'));
        // error_log(request('fridg'));
        // error_log(request('vr'));
        Post::create([
            'uid' => request('uid'),
            'type' => request('type'),
            'title' => request('title'),
            'description' => request('description'),
            'address' => request('address'),
            'price' => request('price'),
            'electricPrice' => request('electricPrice'),
            'waterPrice' => request('waterPrice'),
            'internetPrice' => request('internetPrice'),
            'vehiclePrice' => request('vehiclePrice'),
            'people' => request('people'),
            'area' => request('area'),
            'views' => request('views'),
            'remain' => request('remain'),
            'Image1' => $this->getImageUrl(request('Image1')),
            'Image2' => $this->getImageUrl(request('Image2')),
            'Image3' => $this->getImageUrl(request('Image3')),
            'Image4' => $this->getImageUrl(request('Image4')),
            'bed' => request('bed'),
            'airC' => request('airC'),
            'tv' => request('tv'),
            'fridg' => request('fridg'),
            'vr' => request('vr'),
        ]);
        error_log("dcmm");
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
