<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Admin;
use Hash;
class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            ["role_id" => 1, "organisation_id" => 1, "name" => 'Sci-Flare', "designation" => "Manager", "username" => "admin@sci-flare.com", "password" => Hash::make('sciflareY649'), 'created_at' => now(), 'updated_at' => now()],
            ["role_id" => 2, "organisation_id" => 1, "name" => 'Vinoth Kumar K', "designation" => "Developer", "username" => "admin@649.com", "password" => Hash::make('vinOTH#2022'), 'created_at' => now(), 'updated_at' => now()]
        ];
        foreach ($data as $key => $datum) {
            Admin::create($datum);
        }
        Admin::factory()->count(25)->create();
    }
}
