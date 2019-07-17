function changeTutors() {
    if(document.getElementById("togBtn").checked === false){
        document.getElementById("CIEtutors").style.display = "block";
        document.getElementById("NCEAtutors").style.display = "none";
    }
    else{
        document.getElementById("CIEtutors").style.display = "none";
        document.getElementById("NCEAtutors").style.display = "block";
    }
}
