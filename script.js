function tweedeFunction(){
    var voornaam = document.getElementById("invoer").value;
    document.getElementById("uitvoer").innerHTML = "welkom " + voornaam;
    
    for (var x = 0 ; x < 3 ; x++){
        console.log("Nieuw rondje " +x)
    }
}