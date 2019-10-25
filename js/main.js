let onOff = true;

function display() {

    if (onOff) {
        document.getElementById("aSide").style.width = "0";
        document.getElementById("li").style.display = "none";

        onOff = false;
    } else {
        document.getElementById("aSide").style.width = "40%";
        document.getElementById("li").style.display = "flex";

        onOff = true;
    }
} 