function get_hehe(){
    document.getElementById('hehe').innerHTML = "Tomo je feggatino";
}
function get_hihi(){
    document.getElementById('hehe').innerHTML = "Flutter je bolji";
}
function get_hoho(){
    document.getElementById('hehe').innerHTML = "Kotlin bad";
}
window.onload = function(){
    if (setTimeout("get_hehe()", 5000)){
        if (setTimeout("get_hehe()", 5000)){
            setTimeout("get_hoho()", 5000);
        }
    }

}