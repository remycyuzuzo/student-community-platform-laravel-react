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
        Schema::create('info_board_tags', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->foreignId('tag_id')->constrained('tags')->cascadeOnDelete();
            $table->foreignId('info_board_id')->constrained('info_boards')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('info_board_tags');
    }
};
