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
    setTimeout("get_hehe()", 3000);
    setTimeout("get_hihi()", 3000);
    setTimeout("get_hoho()", 3000);
}