<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ApiResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $data = [
            'id' => encrypt($this->id),
            'name' => $this->name,
            'status_name' => $this->status==1? "success-active" : "danger-active"
        ];
        if($this->username){
            $data['username'] = $this->username;
        }
        if($this->organisation){
            $data['organisation'] = $this->organisation->name;
        }
        if($this->organisation){
            $data['designation'] = $this->designation;
        }
        if($this->users_count){
            $data['users'] = $this->users_count;
        }
        if($this->role){
            $data['role'] = $this->role->name;
            $data['modules'] = $this->role->modules;
        }

        return $data;
    }
}
