<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
use App\Models\Session;
class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        
        if(Schema::hasTable('sessions')){

            if(count(request()->all())){
                Session::create([
                    'admin_id' => \Auth::id(),
                    'ip_address' => request()->ip(),
                    'user_agent' =>  request()->header('User-Agent'),
                    'payload' => request()->getContent(),
                    'last_activity' => request()->path()
                ]);
            }
        }
    }
}
