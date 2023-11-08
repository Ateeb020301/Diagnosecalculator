window.onload = function() {
	$.get("Bruker/HentAlleDiagnoser", function(data) {
		console.log(data);
	});
}

function fun1() {
	document.getElementById("form").style.background = "white";

	document.getElementById("start").style.display = "none";
	document.getElementById("start").style.display = "none";
	document.getElementById("form_ul").style.display = "block";
	document.getElementById("uli5").style.display = "block";
	document.getElementById("scheme").style.display = "block";

	document.getElementById("s1").style.display = "block";
	document.getElementById("s2").style.display = "none";
	document.getElementById("s3").style.display = "none";
	document.getElementById("s4").style.display = "none";

	document.getElementById("uli1").style.color = "gold";
	document.getElementById("uli2").style.color = "teal";
	document.getElementById("uli3").style.color = "teal";
	document.getElementById("uli4").style.color = "teal";
}

function fun2() {
	document.getElementById("form").style.background = "teal";

	document.getElementById("start").style.display = "block";
	document.getElementById("form_ul").style.display = "none";
	document.getElementById("scheme").style.display = "none";
	document.getElementById("feil1").style.display = "none";

	document.getElementById("s1").style.display = "none";
	document.getElementById("s2").style.display = "none";
	document.getElementById("s3").style.display = "none";
	document.getElementById("s4").style.display = "none";

	document.getElementById("uli1").style.color = "teal";
	document.getElementById("uli2").style.color = "teal";
	document.getElementById("uli3").style.color = "teal";
	document.getElementById("uli4").style.color = "teal";

}

function fun3() {
	if (document.getElementById("s1_inp1").checked == true) {

		document.getElementById("s1").style.display = "none";
		document.getElementById("s2").style.display = "block";
		document.getElementById("s3").style.display = "none";
		document.getElementById("s4").style.display = "none";

		document.getElementById("uli1").style.color = "teal";
		document.getElementById("uli2").style.color = "gold";
		document.getElementById("uli3").style.color = "teal";
		document.getElementById("uli4").style.color = "teal";

	}
	else {
		document.getElementById("feil1").style.display = "block";
	}
}

function fun4() {

	document.getElementById("s1").style.display = "block";
	document.getElementById("s2").style.display = "none";
	document.getElementById("s3").style.display = "none";
	document.getElementById("s4").style.display = "none";

	document.getElementById("uli1").style.color = "gold";
	document.getElementById("uli2").style.color = "teal";
	document.getElementById("uli3").style.color = "teal";
	document.getElementById("uli4").style.color = "teal";


}
let navn;
let etternavn;
let alder;
let email;
let tlf;

function fun5() {
			
	
		document.getElementById("s1").style.display 		= "none";
		document.getElementById("s2").style.display 		= "none";
		document.getElementById("s3").style.display 		= "block";
		document.getElementById("s4").style.display 		= "none";
		
		document.getElementById("uli1").style.color 		= "teal";
		document.getElementById("uli2").style.color 		= "teal";
		document.getElementById("uli3").style.color 		= "gold";
		document.getElementById("uli4").style.color 		= "teal";
		
		document.getElementById("feil1").style.display 		= "none";
		document.getElementById("feil2").style.display 		= "block";
		lagreInfo();
		LocateBody();
		
}

let kundebruker = {};

function lagreInfo(){
	
	
	navn= document.getElementById("s2_inp1").value;
	etternavn= document.getElementById("s2_inp2").value;
	alder= document.getElementById("s2_inp3").value;
	email= document.getElementById("s2_inp4").value;
	tlf= document.getElementById("s2_inp5").value;
	if(document.getElementById("s2_inp9").checked){
		gender=document.getElementById("s2_inp9").value;
	}else if(document.getElementById("s2_inp10").checked){
		gender=document.getElementById("s2_inp10").value;
	}
	kundebruker = {navn: navn, etternavn: etternavn, alder: alder, email: email, tlf: tlf, kjonn: gender};
	

	let ut = navn+" "+etternavn+" "+alder+" "+email+" "+tlf+" "+gender
	console.log(ut);
	document.getElementById("s2_inp9").checked=false;
	document.getElementById("s2_inp10").checked=false;
	document.getElementById("s2_inp1").value=" ";
	document.getElementById("s2_inp2").value=" ";
	document.getElementById("s2_inp3").value=" ";
	document.getElementById("s2_inp4").value=" ";
	document.getElementById("s2_inp5").value=" ";
	
}


function lagreBruker() {
	const bruker = {
        fornavn: kundebruker.navn,
        etternavn: kundebruker.etternavn,
        alder: kundebruker.alder,
        email: kundebruker.email,
        kjonn: kundebruker.kjonn,
        tlf: kundebruker.tlf,
		symptom: symptom,
        diagnose: diagnose1
    };
	$.post("bruker/Lagre", bruker, function (OK) {
		if (OK) {
			//window.location.href = 'overview.html';
			console.log("Bra");
		}
		else {
			console.log("Feil i Lagring av bruker")
		}
	});
};


function fun6() {

	document.getElementById("s1").style.display = "none";
	document.getElementById("s2").style.display = "block";
	document.getElementById("s3").style.display = "none";
	document.getElementById("s4").style.display = "none";

	document.getElementById("uli1").style.color = "teal";
	document.getElementById("uli2").style.color = "gold";
	document.getElementById("uli3").style.color = "teal";
	document.getElementById("uli4").style.color = "teal";

}


function fun7() {


	document.getElementById("s1").style.display = "none";
	document.getElementById("s2").style.display = "none";
	document.getElementById("s3").style.display = "none";
	document.getElementById("s4").style.display = "block";

	document.getElementById("uli1").style.color = "teal";
	document.getElementById("uli2").style.color = "teal";
	document.getElementById("uli3").style.color = "teal";
	document.getElementById("uli4").style.color = "gold";

	document.getElementById("uli5").style.display = "none";
	document.getElementById("feil3").style.display = "block";
	lagreBruker();


}

function fun8() {

	document.getElementById("start").style.display = "block";
	document.getElementById("form_ul").style.display = "none";
	document.getElementById("scheme").style.display = "none";
	document.getElementById("feil1").style.display = "none";

	document.getElementById("s1").style.display = "none";
	document.getElementById("s2").style.display = "none";
	document.getElementById("s3").style.display = "none";
	document.getElementById("s4").style.display = "none";

	document.getElementById("uli1").style.color = "teal";
	document.getElementById("uli2").style.color = "teal";
	document.getElementById("uli3").style.color = "teal";
	document.getElementById("uli4").style.color = "teal";

}

var i = 1;

function fun9() {
	if (i % 2 == 1) {
		document.getElementById("header").style.background = "#24252A";
		document.getElementById("body").style.background = "#5D6D7E";
		document.getElementById("form").style.background = "#24252A";
		document.getElementById("menu-list").style.color = "white";
		document.body.style.color = "white";
		document.getElementById("btn1").innerHTML = "Light";
		
		i = i + 1;
	}
	else {
		document.getElementById("header").style.background = "teal";
		document.getElementById("body").style.background = "black";
		document.getElementById("form").style.background = "white";
		document.body.style.color = "white";
		document.getElementById("btn1").innerHTML = "Dark";
		i = i - 1;
	}
}

function fun13() {

	if (document.getElementById("s3_inp12").checked == true) {
		document.getElementById("sym_a").style.display = "block";
	}
	else {
		document.getElementById("sym_a").style.display = "none";
	}

	if (document.getElementById("s3_inp13").checked == true) {
		document.getElementById("sym_b").style.display = "block";
	} else {
		document.getElementById("sym_b").style.display = "none";
	}

	if (document.getElementById("s3_inp14").checked == true) {
		document.getElementById("sym_c").style.display = "block";
	} else {
		document.getElementById("sym_c").style.display = "none";
	}

}