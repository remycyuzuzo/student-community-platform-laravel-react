<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Community extends Model
{
    use HasFactory;

    public function members()
    {
        return $this->hasMany(CommunityMember::class);
    }

    public function posts()
    {
        return $this->hasMany(CommunityPost::class);
    }
}
