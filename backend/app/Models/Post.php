<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable=[
        'uid','type','title','description','people','area','address',
        'price','electricPrice','waterPrice','internetPrice',
        'vehiclePrice','views','remain','Image1','Image2','Image3','Image4','bed','airC','tv','fridg','vr',
    ];
    use HasFactory;
}
