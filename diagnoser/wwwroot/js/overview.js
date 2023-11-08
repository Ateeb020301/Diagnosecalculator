 let test;
 window.onload = async function() {
    // const url = "bruker/Lagre";
    // let bruker = {
    //     fornavn: "Ateeb",
    //     etternavn: "Salam",
    //     alder: "21",
    //     email: "aklsjdf@msn.com",
    //     tlf: "45418389",
    //     kjonn: "Male",
    //     symptom: "symptom",
    //     diagnose: "diagnose1"
    // }
    // $.post(url, bruker, function(verify) {
    //     if (verify) {
    //         console.log("Good");
    //         hentAlleBrukere();
    //     } else {
    //         console.log("SHIT");
    //     }
    // });
    hentAlleBrukere();
}

function hentAlleBrukere() {
    
    $.get("bruker/HentAlleDiagnoser", function (brukere) {
        console.log(brukere);
        formaterBrukere(brukere);
    });
}

function formaterBrukere(brukere) {
    console.log(brukere)
    let ut = "<table class='table table-striped' border ='1px'>" +
        "<tr>" +
        "<th>First Name</th><th>Last Name</th><th>Age</th><th>E-mail</th><th>Phone</th><th>Gender</th><th>Symptom</th><th>Diagnosis</th><th>Endre Info</th><th>Slett Info</th>" +
        "</tr>";
    for (let bruker of brukere) {
        ut += "<tr>" + 
            "<td>" + bruker.brukere.fornavn + "</td>" +
            "<td>" + bruker.brukere.etternavn + "</td>" +
            "<td>" + bruker.brukere.alder + "</td>" +
            "<td>" + bruker.brukere.email + "</td>" +
            "<td>" + bruker.brukere.tlf + "</td>" +
            "<td>" + bruker.brukere.kjonn + "</td>" +
            "<td>" + bruker.symptom + "</td>" +
            "<td>" + bruker.diagnose + "</td>" +
            "<td> <button class='btn btn-primary'><a href='endre.html?id="+bruker.did+"'>Endre</a></button></td>"+
            "<td> <button class='btn btn-danger' onclick='slettBruker("+bruker.did+")'>Slett</button></td>"+
            "</tr>";
    }
    ut += "</table>";
    $("#brukere").html(ut);
}


function slettBruker(id) {
    const url = "bruker/Slett?id="+id;
    $.get(url, function (OK) {
        if (OK) {
            window.location.href = 'overview.html';
        }
        else {
            $("#feil").html("Feil i db - prøv igjen senere");
        }

    });
}