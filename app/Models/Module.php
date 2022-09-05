<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Module extends Model
{
    use HasFactory;
    protected $hidden = [
        'created_at',
        'updated_at',
        'status'
    ];

    public function children(){
        return $this->hasMany(Self::Class, 'module_id'); 
    }

    public function submodules(){
        return $this->children()->with('submodules'); 
    }
}
