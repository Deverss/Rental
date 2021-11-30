<?php

namespace Database\Seeders;

use App\Models\User;
use Faker\Factory;
use Illuminate\Database\Seeder;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::create([
           'name' => 'tuananh',
           'email' => 'tuananh@email.com',
           'password' => bcrypt('password'), 
        ]);

    }
}
