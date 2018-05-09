$(document).ready(function(){
    $("#header").load("html/include/header.html");
    $("#footer").load("html/include/footer.html");
    $("#content").load("html/main.html");
});

function move(src) {
    $("#content").load(src + ".html");
}