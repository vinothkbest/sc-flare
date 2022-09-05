<?php
namespace App\Libraries;
Class DataTable {
    private static $query;

    public static function resource(object $model){
        self::$query = $model;
        return new Self;
    }
    public static function filter(array $params = [], array $relations = []){
        $query = Self::$query;
        if(count($params)) :
            foreach ($params as $key => $value) {    
                $query->when($value !=null, function($q) use($key,$value){
                    switch (is_array($value)) {
                        case true:
                            return $q->whereIn($key, $value); 
                            break;
                        
                        default:
                            if(\DateTime::createFromFormat('d-m-Y', $value)){
                                return $q->whereDate($key, '<=', date("Y-m-d",strtotime($value)));
                            }
                            else{
                                return $q->where($key, $value); 
                            }
                            break;
                    }
                });
            }
        endif;
        if(count($relations)) :
            foreach ($relations as $key => $relation) {
                $query->whereHas($key, function ($q) use($relation){
                    foreach ($relation as $key => $value) {    
                        $q->when($value !=null, function($q) use($key,$value){
                            switch (is_array($value)) {
                                case true:
                                    return $q->whereIn($key, $value); 
                                    break;
                                
                                default:
                                    $value = explode('CMP', $value);
                                    if(count($value)==2){
                                        if(\DateTime::createFromFormat('d-m-Y', $value[1])){
                                            return $q->whereDate($key, $value[0],  date("Y-m-d",strtotime($value[1])));
                                        }
                                    }                                    
                                    else{
                                        return $q->where($key, $value[0]); 
                                    }
                                    break;
                            }
                        });
                    }
                });     
            }
        endif;
        Self::$query =$query;
        return new Self;
    }

    public static function jsonFilter(array $params = [], array $relations = []) // json data filter
    {
        $query = Self::$query;
        if(count($params)) :
            foreach ($params as $key => $value) {    
                $query->when($value, function($q) use($key,$value){
                    return $q->whereJsonContains($key, $value); 
                });
            }
        endif;
        if(count($relations)) :
            foreach ($relations as $key => $relation) {
                $query->whereHas($key, function ($q) use($relation){

                    foreach ($relation as $key => $value) {    
                        $q->when($value, function($q) use($key,$value){
                            return $q->whereJsonContains($key, $value);
                        });
                    } 
                }) ;    
            }
        endif;
        Self::$query =$query;
        return new Self;
    }

    public static function search(array $columns = [],$term, array $relations = []){
        Self::$query = Self::$query->where(function ($q) use($columns,$term,$relations) {
            if(count($columns)) :
                foreach ($columns as $key => $column) {
                    
                    switch (\DateTime::createFromFormat('d-m-Y', $term)) {
                        case true:
                            $q->orWhereDate($column, date("Y-m-d",strtotime($term))); 
                            break;
                        
                        default:                       
                            $q->orWhere($column, "LIKE", "%$term%"); 
                            break;
                    }     
                }
            endif;
            if(count($relations)) :
                foreach ($relations as $key => $relation) {
                    $q->whereHas($key, function($q) use($term,$relation) {
                        $q->where(function ($q) use($term,$relation) {
                                    
                            foreach ($relation as $relationColumn) {
                        
                                switch (\DateTime::createFromFormat('d-m-Y', $term)) {
                                    case true:
                                        $q->orWhereDate($relationColumn, date("Y-m-d",strtotime($term))); 
                                        break;
                                    
                                    default:                       
                                        $q->orWhere($relationColumn, "LIKE", "%$term%"); 
                                        break;
                                }     
                            }
                        });
                    }) ;          
                }
            endif;
            return $q;
        });
        return new Self;
    }

    public static function sorting(string $raw) // incoming raw must be comma separated
    {
        Self::$query = Self::$query->orderByRaw($raw);
        return new Self;
    }

    public static function getData(int $limit,string $jsonKey = '',$ResourceName='') : array
    {
        $pageData = Self::$query->paginate($limit);
        return  $data = [   $jsonKey?$jsonKey:'items' => $ResourceName? $ResourceName::collection($pageData->items()) : $pageData->items(),
                    'pagination' => [
                        'page' => $pageData->currentPage(),
                        'prev' => $pageData->currentPage() == 1 ? null: $pageData->currentPage()-1,
                        'next' => $pageData->lastPage() == $pageData->currentPage()? null: $pageData->currentPage() +1,
                        'last' => $pageData->lastPage(),
                        'limit' => $limit,
                        'offset' => $limit * ($pageData->currentPage()-1)
                ]
        ];
    }

    public static function debug(){
        return Self::$query->toSql();
    }

    // $totalRecords = Self::retrieve([],'count');
    // $records = Self::retrieve($pageData);
    // $currentPage = $pageData['offset']==0 ? 1: intval($pageData['offset']/$pageData['limit']);   
    // $lastPage = intval($totalRecords / $pageData['limit']);   
    // return  $data = [   $jsonKey?$jsonKey:'items' => $ResourceName? $ResourceName::collection($records) : $records,
    //             'pagination' => [
    //                 'page' => $currentPage,
    //                 'prev' => $currentPage == 1 ? '' : $currentPage-1,
    //                 'next' => $lastPage == $currentPage? '' : $currentPage+1,
    //                 'last' => $lastPage,
    //                 'limit' => $pageData['limit'],
    //                 'offset' => ($pageData['limit'] * ($currentPage-1))+10
    //         ]
    // ];
}