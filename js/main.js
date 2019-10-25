let onOff = true;

function display() {

    if (onOff) {
        document.getElementById("aSide").style.width = "5rem";
        document.getElementById("li").style.visibility = "hidden";

        onOff = false;
    } else {
        document.getElementById("aSide").style.width = "14rem";
        document.getElementById("li").style.visibility = "visible";

        onOff = true;
    }
} 