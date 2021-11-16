<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('uid');
            $table->text('type');
            $table->text('title');
            $table->mediumText('description');
            $table->integer('people');
            $table->integer('area');
            $table->integer('views');
            $table->integer('remain');
            $table->string('imageAddress');
            $table->tinyInteger('bed');
            $table->tinyInteger('airC');
            $table->tinyInteger('tv');
            $table->tinyInteger('fridg');
            $table->string('vr');
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
        Schema::dropIfExists('posts');
    }
}
