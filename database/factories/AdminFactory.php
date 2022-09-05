<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Organisation;
use Hash;
class AdminFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $designations = ['Developer', 'Sr. Developer', 'Lead', 'Human Resource'];
        $des_key = array_rand($designations);
        $organisations = ['Sci-Flare Technologies', 'Ardhas Technologies', 'Google', 'Meta Inc', 'Amazon'];
        $organisation = (int)array_rand($organisations)+1;
        return [
            'name' => ucwords($this->faker->name()),
            'designation' => $designations[$des_key], 
            'organisation_id' => $organisation, 
            'username' => $this->faker->unique()->safeEmail(),
            'password' => Hash::make('user#2022'),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function unverified()
    {
        return $this->state(function (array $attributes) {
            return [
                'email_verified_at' => null,
            ];
        });
    }
}
