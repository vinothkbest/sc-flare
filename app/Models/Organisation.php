<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Organisation extends Model
{
    use HasFactory;

    
    protected $fillable = [
        'created_at',
        'updated_at',
        'name'
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    public function scopeNoTrash($query){
        return $query->where('is_deleted', 0);
    }

    public function users(){
        return $this->hasMany(Admin::class);
    }
}
