<?php
namespace App\Libraries;

Class Response{
    public static function success($data,$message,$code){
        return response()->json(['status' => true, 'data' => $data, 'message' => $message], $code);
    }
    public static function error($data,$message,$code){
        return response()->json(['status' => false, 'data' => $data, 'message' => $message], $code);
    }
    public static function ckData($file,$folder){
        return response()->json(['fileName' => $file, 'uploaded' => 1 , 'url' => url("public/5hjgff5jkss892msb/$folder/$file")],201);
    }
}