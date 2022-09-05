<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;
    
    protected $hidden = [
        'created_at',
        'updated_at',
        'status'
    ];
    protected $fillable = [
        'created_at',
        'updated_at',
        'name'
    ];

    public function modules(){        
        return $this->belongsToMany(Module::class)->where('status',1);
    }
}
