function get_hehe(){
    document.getElementById('hehe').innerHTML = "Flutter je bolji";
}
window.onload = function(){
    setTimeout("get_hehe()", 3000);
}