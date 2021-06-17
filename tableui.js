function doFunction() {
    var els = document.getElementsByTagName("tr");
    for (var i = 1; i < els.length; i += 2) {
        els[i].style = "background-color:black; color: white"
    }


}

function myFunction() {
    var element, name, arr;
    // element = document.getElementById("myDIV");
    element = document.getElementsByClassName("tables")
    name = "zebra";
    arr = element.className.split(" ");
    if (arr.indexOf(name) == -1) {
        element.className += " " + name;
    }
}