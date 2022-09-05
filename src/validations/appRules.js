export function alpha_space(value){
    return /^[A-Za-z\ \-\.]*$/.test(value)
}
export function freezed_text(value){
    return /^[A-Za-z0-9\.\,\(\)\/\&\-\ \r\n]*$/.test(value)
}
export function alpha(value){
    return /^[A-Za-z\-]*$/.test(value)
}
export function no_space(value){
    return /^[\S]*$/.test(value)
}
export function is_array(value){
    return Array.isArray(value);
}
export function is_empty(value){
    return value.length > 0;
}
export function is_text(value){
    if(value) return /^[a-zA-Z0-9\-\.\,\%\_\&\ ]*$/.test(value) 
    else return true
}
export function numbers(value){
    if(value) return /^[0-9]*$/.test(value)
    else return true
}
export function format(file){
    let extensions = new Array("jpg","png","jpeg");
    let extension = file?.name?.split('.').pop().toLowerCase(); 
    return extensions.includes(extension) || !file?.name
}
export function filesize(file){    
    return file?.size <= 2100000 || !file?.name //2mb
}
export function formats(files){
    var extensions = new Array("jpg","png","jpeg", "pdf", "docx", "doc", 'txt');
    const formats = files?.map(file => {
        let extension = file.name?.split('.').pop().toLowerCase();
        return extensions.includes(extension) || !file?.name
    })
    return !formats.includes(false);
}

export function filesizes(files){  
    let sizes = files?.map(file => {
        return file.size <= 2240000 || !file?.name //2MB
    })
    return !sizes.includes(false);

}
export function is_tw(url){  
    return /^(https)[\:](\/\/)(www.)?(twitter.com)[A-Za-z0-9\/\?\&\_\%\=\-\.]*$/.test(url);
}
export function is_fb(url){  
    return /^(https)[\:](\/\/)(www.)?(facebook.com)[A-Za-z0-9\/\?\&\_\%\=\-\.]*$/.test(url);
}
export function is_linkin(url){  
    return /^(https)[\:](\/\/)(www.)?(in.)?(linkedin.com)[A-Za-z0-9\&\/\?\_\%\=\-\.]*$/.test(url);
}
export function is_youtube(url){  
    return /^(https)[\:](\/\/)(www.)?(youtube.com)[A-Za-z0-9\&\/\?\_\%\=\-\.]*$/.test(url);
}
export function is_insta(url){  
    return /^(https)[\:](\/\/)(www.)?(instagram.com)[A-Za-z0-9\&\/\?\_\%\=\-\.]*$/.test(url);
}