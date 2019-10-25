let onOff = true; 

function display() {

    if(onOff) {
    document.getElementById("aSide").style.display = "none";
    document.getElementById("aSide").style.width = "10%";
    
    onOff = false;
    } else {
        document.getElementById("aSide").style.display = "flex";
        document.getElementById("aSide").style.width = "40%";
        onOff = true;
    }
} 