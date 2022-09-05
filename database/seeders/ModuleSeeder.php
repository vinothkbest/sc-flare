<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Module;

class ModuleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            ["name" => 'User Management', "icon" => 'cil-user', "uri" => '/users', 'is_parent' => 1, 'order' => 1, 'module_id' => 1, 'parent_order' => 1, 'created_at' => now(), 'updated_at' => now()],
            ["name" => 'Organisation Management', "icon" => 'cil-bank', "uri" => '/organisations', 'is_parent' => 1, 'order' => 2, 'module_id' => 2, 'parent_order' => 2, 'created_at' => now(), 'updated_at' => now()],
        ];
        foreach ($data as $key => $datum) {
            Module::create($datum);
        }
    }
}
