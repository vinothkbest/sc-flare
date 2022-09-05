<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Organisation;
class OrganisationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $organisations = ['Sci-Flare Technologies', 'Ardhas Technologies', 'Google', 'Meta Inc', 'Amazon'];
        
        foreach ($organisations as $key => $organisation) {
            Organisation::create(['name' => $organisation]);
        }      
        
    }
}
