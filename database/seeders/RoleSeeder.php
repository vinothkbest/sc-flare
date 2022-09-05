<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Role;
class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        $data = [
            ["name" => 'Admin', 'created_at' => now(), 'updated_at' => now()],
            ["name" => 'User', 'created_at' => now(), 'updated_at' => now()]
        ];
        foreach ($data as $key => $datum) {
            Role::create($datum);
        }
    }
}
