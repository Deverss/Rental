<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable=[
        'uid','type','title','description','people','area','views','remain','imageAddress','bed','airC','tv','fridg','vr',
    ];
    use HasFactory;
}
