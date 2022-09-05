<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class Admin extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    
    protected $fillable = [
        'name',
        'username',
        'password',
        'profile',
        'designation',
        'organisation_id'
    ];

    protected $hidden = [
        'password',
        'remember_token',
        'created_at',
        'updated_at'
    ];

    public function scopeNoTrash($query){
        return $query->where('is_deleted', 0);
    }

    public function role(){
        return $this->belongsTo(Role::class);
    }

    public function organisation(){
        return $this->belongsTo(Organisation::class);
    }
}
