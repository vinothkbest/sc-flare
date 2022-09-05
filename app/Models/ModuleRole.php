<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\Pivot;

class ModuleRole extends Pivot
{
    use HasFactory;

    
    protected $fillable = [
        'module_id',
        'role_id'
    ];
}
