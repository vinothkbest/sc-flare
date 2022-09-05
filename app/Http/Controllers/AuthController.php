<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use Auth;
use Hash;
use App\Models\Admin;
use App\Models\Role;
use App\Libraries\Response;
class AuthController extends Controller{

    public function login(Request $request){
		$rules = [
	    	'username' => 'required|regex:/^[0-9a-z\.\@\_\-]{8,26}$/',
	    	'password' => 'required|min:10'
	    ];
		$messages = [
	    	'username.required' => 'Please enter your username',
	    	'username.regex' => 'Please enter valid username',
	    	'password.required' => 'Please enter your password',
	    	'password.min' => 'Password minimum of 10 characters'
		];
	    $validator = Validator::make($request->all(), $rules, $messages);
	    if($validator->fails())
	    	return Response::error('',$validator->errors(), 400);

		if(Auth::attempt($request->only('username', 'password'))){
			$token = Auth::user()->createToken($request->username)->accessToken;
			$admin = Admin::with(['role' => function ($role){
				return $role->whereHas('modules', function($module){
					return $module->where('status', '1');
				})->with(['modules' => function($module){
					return $module->orderBy('parent_order')->orderBy('module_id')->orderBy('order');
				}]);
			}])->with('organisation')->find(Auth::id());
			$data = [
				'admin' => $admin, 'token' => $token
			];
			return Response::success($data,'Login successfully', 200);
		}
		else
			return Response::error('','Invalid credentials given!', 200);
   	}

   	public function payload(){
		$token = request()->bearerToken();
		$admin = Admin::with('organisation')->with(['role' => function ($role){
			return $role->whereHas('modules', function($module){
				return $module->where('status', '1');
			})->with(['modules' => function($module){
				return $module->orderBy('parent_order')->orderBy('module_id')->orderBy('order');
			}]);
		}])->find(Auth::id());
		$data = [
			'admin' => $admin, 'token' => $token
		]; 
		return Response::success($data,'Login successfully', 200);
   	} 
   	public function logout(){
	    request()->user()->token()->revoke();
       	return Response::success('','Logout successfully', 200);
   	}
}
