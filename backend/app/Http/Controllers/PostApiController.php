<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
class PostApiController extends Controller
{
    public function getPost(){
        return Post::all();
    }

    public function store(){
        request() -> validate([
            'title' => 'required',
            'content' => 'required',
        ]);
        return Post::create([
            'title' => request('title'),
            'content' => request('content'),
        ]);
    }

    public function update(Post $post){
        request() -> validate([
            'title' => 'required',
            'content' => 'required',
        ]);
    
        $post->update([
            "title" => request('title'),
            "content" => request('content'),
        ]);
    }

    public function delete(Post $post){
        $success = $post->delete();
    
        return ['success' => $success];
    }
}
