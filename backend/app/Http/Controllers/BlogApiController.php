<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Blog;
use Exception;
use Storage;
use Illuminate\Support\Facades\DB;

class BlogApiController extends Controller
{

    public function getImageUrl($file)
    {
        try {
            $path = "";
            // if($request->hasFile('img')){
            // $file = $request->file('img');
            $filename = $file->getClientOriginalName();
            $finalName = date('His') . $filename;
            error_log($filename);
            $googleDriveStorage = Storage::disk('google');

            $googleDriveStorage->put($finalName, file_get_contents($file->getRealPath()));
            $fileInfo = collect($googleDriveStorage->listContents('/', false))
                ->where('type', 'file')
                ->where('name', $finalName)
                ->first();
            $contents = $fileInfo['path'];
            error_log($contents);
            $path = "https://drive.google.com/uc?export=view&id=" . $contents;

            return $path;
        } catch (Exception $e) {
            error_log($e->getMessage());
        }
    }


    public function getBlog()
    {
        $info = DB::table('blogs')
            ->join('users', 'users.id', '=', 'blogs.userID')
            ->select('blogs.*', 'users.name', 'users.image')
            ->get();

        return $info;
    }

    public function getBlogById(Blog $blog)
    {
        $info = DB::table('blogs')
            ->join('users', 'users.id', '=', 'blogs.userID')
            ->select('blogs.*', 'users.name', 'users.image')
            ->where('blogs.id', '=', $blog->id)
            ->get();

        return $info;
    }

    public function store(Request $request)
    {
        $valid = $request->validate([
            'userID' => 'required',
            'title' => 'required',
            'description' => 'required',
            'content' => 'required',
            // 'Image' => 'required',
        ]);
        return Blog::create([
            'userID' => $request->input('userID'),
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'content' => $request->input('content'),
            'Image' => $this->getImageUrl($request->Image),
            'views' => $request->input('views'),
        ]);
    }

    public function update(Blog $blog)
    {
        request()->validate([
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

    public function delete(Blog $post)
    {
        $success = $post->delete();

        return ['success' => $success];
    }
}
