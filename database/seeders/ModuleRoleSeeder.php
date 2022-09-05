<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ModuleRole;

class ModuleRoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            ["module_id" => 1, "role_id" => 1],
            ["module_id" => 2, "role_id" => 1],
            ["module_id" => 2, "role_id" => 2]
        ];
        foreach ($data as $key => $datum) {
            ModuleRole::insert($datum);
        }
    }
}
