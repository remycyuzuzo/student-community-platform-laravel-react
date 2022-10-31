<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InfoBoard extends Model
{
    use HasFactory;

    public function tags()
    {
        return $this->hasMany(InfoBoardTag::class);
    }


    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
