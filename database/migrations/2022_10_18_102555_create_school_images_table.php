<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('school_images', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->string('url');
            $table->foreignId('school_id')->constrained('schools')->cascadeOnDelete();
            $table->string('caption')->nullable();
            $table->string('image_display_name')->nullable();
            $table->unsignedBigInteger('user_id')->nullable();

            $table->foreign('user_id')->references('id')->on('users')->nullOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('school_images');
    }
};
