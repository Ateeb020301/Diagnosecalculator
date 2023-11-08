$(function () {
    // hent kunden med kunde-id fra url og vis denne i skjemaet

    const id = window.location.search.substring(1);
    const url = "Bruker/HentEn?" + id;
    $.get(url, function (bruker) {
        console.log(bruker);
        $("#id").val(bruker.id); // må ha med id inn skjemaet, hidden i html
        $("#fornavn").val(bruker.fornavn);
        $("#etternavn").val(bruker.etternavn);
        $("#alder").val(bruker.alder);
        $("#email").val(bruker.email);
        $("#tlf").val(bruker.tlf);
        $("#kjonn").val(bruker.kjonn);
    }); 
    LocateBody();
    counter++;
});

async function findSymptome() {
    try {
        var selectName = document.getElementById("selectName");
        selectName.innerHTML = "<option selected disabled>Choose your Symptom</option>";
        for (i = 0; i < arrBodyPart[selectBody.selectedIndex-1].location[selectBody.selectedIndex-1].symptom.length; i++) {
            selectName.options[selectName.options.length] = new Option(arrBodyPart[selectBody.selectedIndex-1].location[selectBodyPart.selectedIndex-1].symptom[i].name, arrBodyPart[selectBody.selectedIndex-1].location[selectBodyPart.selectedIndex-1].symptom[i].id);
        }

    } catch (err) {
        console.error(err);
    }
}

async function dropdown2() {
    bodyPartId2 = arrBodyPart2[selectBodyPart.selectedIndex - 1].ID;
    console.log(bodyPartId2)
    //document.getElementById("demo").innerHTML=bodyPartId2;
    findSymptome();
}



function endreBruker() {
    if(document.getElementById("s2_inp9").checked){
		gender = document.getElementById("s2_inp9").value;
	}else{
		gender = document.getElementById("s2_inp10").value;
	}
    const bruker = {
        id: $("#id").val(), // må ha med denne som ikke har blitt endret for å vite hvilken kunde som skal endres
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        alder: $("#alder").val(),
        email: $("#email").val(),
        kjonn: gender,
        tlf: $("#tlf").val(),
    };
    const diag = {
        did: $("#id").val(),
        symptom: symptom,
        diagnose: diagnose1,
        brukere: bruker
    }
    console.log(diag);

    //Du må fikse nye metoder for å kunne jobbe med begge på C#, la meg vise
    $.post("Bruker/Endre", diag, function (OK) {
        if (OK) {
            window.location.href = 'overview.html';
        }
        else {
            $("#feil").html("Feil i db - prøv igjen senere");
        }
    });
}