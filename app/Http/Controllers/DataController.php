<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Role;
use App\Models\Admin;
use App\Models\Organisation;
use App\Libraries\DataTable;
use App\Libraries\Response;
use App\Http\Resources\ApiResource;
use Auth;
class DataController extends Controller
{
    

    public function organisations(Request $request){
        $columns = ['name'];
        $data = DataTable::resource(Organisation::noTrash()->withCount('users'))
                ->search($columns,$request->search)
                ->sorting('created_at desc')
                ->getData($request->limit, 'organisations', 'App\Http\Resources\ApiResource');
        return Response::success($data,'Listed', 200);
    }
    
    public function users(Request $request){
        $search = ['name', 'designation', 'username'];
        $searchRelations = [
            'organisation' => ['name'],
            'role' => ['name']
        ];
        $is_admin = Auth::user()->role->id == 1;
        if(!$is_admin){
            $filter = ['id' =>  Auth::id()];           
        }
        else{
            $filter = [];   
        }
        $data = DataTable::resource(Admin::with(['role', 'organisation'])->noTrash())
                ->filter($filter)
                ->search($search,$request->search, $searchRelations)
                ->sorting('created_at desc')
                ->getData($request->limit, 'users', 'App\Http\Resources\ApiResource');
        return Response::success($data,'Listed', 200);
    }
    
    public function edit(Request $request){
        $user  = decrypt($request->user);
        $user = Admin::find($user);
        $code = 200; $message = "Listed";    
        if($request->isMethod('PUT')){
            $user->name = $request->name;
            $user->designation = $request->designation;
            $user->organisation_id = Organisation::where('name', $request->organisation)->first()->id;
            $user->role_id = Role::where('name', $request->role)->first()->id;
            $user->username = $request->username;
            $user->save();
            $code = 201; $message = "Updated";            
        }
        return Response::success(new ApiResource($user),$message, $code);
    }
    
    public function status(Request $request){
        $id  = decrypt($request->id);
        if($request->type=="user"){
            $data = Admin::find($id);
        }
        else{
            $data = Organisation::find($id);
        }
        $data->status = !$data->status;
        $data->save();
        return Response::success(new ApiResource($data),'Updated', 201);
    }
    
    public function delete($user){
        $user  = decrypt($user);
        $user = Admin::find($user);
        $user->is_deleted = 1;
        $user->save();
        return Response::success($user,'Deleted', 201);
    }
    
    public function dropdown(Request $request){
        $organisations = Organisation::noTrash()->where('status', 1)->get();
        $roles = Role::where('status', 1)->get();
        $data = [
            'organisations' => ApiResource::collection($organisations),
            'roles' => ApiResource::collection($roles)
        ];
        return Response::success($data,'Listed', 200);
    }
}
