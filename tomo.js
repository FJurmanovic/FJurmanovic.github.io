function get_hehe(){
    document.getElementById('hehe').style.visibility = "visible";
    document.getElementById('hihi').style.visibility = "hidden";
    document.getElementById('hoho').style.visibility = "hidden";
}
function get_hihi(){
    document.getElementById('hehe').style.visibility = "hidden";
    document.getElementById('hihi').style.visibility = "visible";
    document.getElementById('hoho').style.visibility = "hidden";
}
function get_hoho(){
    document.getElementById('hehe').style.visibility = "hidden";
    document.getElementById('hihi').style.visibility = "hidden";
    document.getElementById('hoho').style.visibility = "visible";
}
window.onload = function(){
    while(true){
        setTimeout("get_hehe()", 3000);
        setTimeout("get_hihi()", 3000);
        setTimeout("get_hoho()", 3000);
    }
}