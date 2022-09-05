<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdminsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('admins', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('role_id')->default('2');
            $table->unsignedBigInteger('organisation_id')->nullable();
            $table->string('name');
            $table->string('designation');
            $table->string('username')->unique();
            $table->string('password');
            $table->boolean('status')->default(1)->comment(' 1=active 0=disabled');
            $table->boolean('is_deleted')->default(0)->comment('1=yes');
            $table->foreign('role_id')->references('id')->on('roles');
            $table->foreign('organisation_id')->references('id')->on('organisations');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('admins');
    }
}
