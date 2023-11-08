
const data = null;
var container = document.getElementById("container");
var form = document.getElementById("myForm");
var tabell = document.getElementById("tabell");

const arrSymptomer = [];
const arrBodyPart = [
                     {id: 16, name: "Abdomen, pelvis & buttocks", location: [{id: 36, name: "Abdomen", symptom: [{id: 10, name: "Abdominal Pain"},{id:44, name: "Nausea"}]},{id: 40, name: "Buttocks & rectum", symptom: [{id: 50, name: "Diarrhea"},{id:79, name: "Difficult defeaction"}]},{id: 38, name: "Genitals & groin", symptom: [{id: 39, name: "Increased urine quantity"},{id:59, name: "Frequent urination"}]},{id: 39, name: "Hips & hip joint", symptom: [{id: 103, name: "Pain radiating to the leg"},{id:118, name: "Physical inactivity"}]},{id: 37, name: "Pelvis", symptom: [{id: 160, name: "Urge to urinate"},{id:161, name: "Urination during the night"}]}]},
                     {id: 7, name: "Arms & shoulder", location: [{id: 40, name: "Arms general", symptom: [{id: 79, name: "Difficult defecation"},{id:80, name: "Hard defecation"}]},{id: 30, name: "Finger", symptom: [{id: 91, name: "Changes in the nails"},{id:178, name: "Limited mobility of the fingers"}]},{id: 28, name: "Forearm & elbow", symptom: [{id: 186, name: "Hand pain"},{id:971, name: "Arm Swelling"}]},{id: 29, name: "Hand & wrist", symptom: [{id: 115, name: "Tremor at rest"},{id:132, name: "Tremor on movement"}]},{id: 26, name: "Upper arm & shoulder", symptom: [{id: 971, name: "Arm Swelling"}]}]},
                     {id: 15, name: "Chest & back", location: [{id: 33, name: "Back", symptom: [{id: 103, name: "Pain radiating to the leg"},{id:104, name: "Back pain"}]},{id: 31, name: "Chest", symptom: [{id: 15, name: "Cough"},{id:17, name: "Chest Pain"}]},{id: 32, name: "Lateral Chest", symptom: [{id: 183, name: "Side pain"},{id:248, name: "Swollen glands in the armpit"}]}]},
                     {id: 6, name: "Head, throat & neck", location: [{id: 23, name: "Face & eyes", symptom: [{id: 24, name: "Black head"},{id:33, name: "Eye Redness"}]},{id: 22, name: "Forehead & head in general", symptom: [{id: 9, name: "Headaches"},{id:11, name: "Fever"}]},{id: 21, name: "Hair & scalp", symptom: [{id: 152, name: "Hair loss"},{id:239, name: "Bold area among hair on the head"}]},{id: 25, name: "Mouth & jaw", symptom: [{id: 15, name: "Cough"},{id:35, name: "Lip Swelling"}]}, {id: 24, name: "Nose, ears, throat & neck", symptom: [{id: 13, name: "Sore throat"},{id:15, name: "Cough"}]}]},
                     {id: 10, name: "Legs", location: [{id: 44, name: "Foot", symptom: [{id: 89, name: "Cold feet"},{id:91, name: "Changes in the nails"}]},{id: 49, name: "Legs general", symptom: [{id: 12, name: "Pain in the limbs"},{id:27, name: "Joint Pain"}]},{id: 43, name: "Lower leg & ankle", symptom: [{id: 142, name: "Pain in the calves"},{id:43, name: "Leg ulcer"}]},{id: 41, name: "Thigh & knee", symptom: [{id: 146, name: "Leg Cramps"},{id:145, name: "Feeling of tension in the legs"}]},{id: 45, name: "Toes", symptom: [{id: 27, name: "Joint pain"},{id:201, name: "Tingling"}]}]},
                     {id: 17, name: "Skin, joints & general", location: [{id: 47, name: "General, joints & other", symptom: [{id: 11, name: "Fever"},{id:12, name: "Pain in the limbs"}]}, {id: 46, name: "skin", symptom: [{id: 21, name: "Itching of skin"},{id:24, name: "Blackhead"}]}]}
                    ];
                    console.log(arrBodyPart)
const arrBodyPart2 = [];
const arrdiagnose=[];

let gender = 'male';
let age = '20'
let symtomId = 138;
let bodyPartId = 17;
let bodyPartId2 = 46;
var option = "";
let result;
let urlDiagnose=[];
let urlKroppSymp=[];
let urlBodyPart=[];
let diagnose1;
let symptom;
let counter=0;
let urlBody;


async function dropdown3() {
    localStorage.setItem('id', arrBodyPart[selectBody.selectedIndex-1].location[selectBodyPart.selectedIndex-1].symptom[selectName.selectedIndex-1].id);
    symptom = arrBodyPart[selectBody.selectedIndex-1].location[selectBodyPart.selectedIndex-1].symptom[selectName.selectedIndex-1].name;
    diagnoseResultat();
    
}

function dropdownaddDiagnosis() {
    localStorage.setItem('id', arrBodyPart[selectBody.selectedIndex-1].location[selectBodyPart.selectedIndex-1].symptom[selectName.selectedIndex-1].id);
    let symptid = localStorage.getItem('id');
    fetch(`https://healthservice.priaid.ch/diagnosis?symptoms=[${symptid}]&gender=${gender}&year_of_birth=${age}&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImF0ZWViQGxpdmUubm8iLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6Ijg2NzUiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ZlcnNpb24iOiIxMDkiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xpbWl0IjoiMTAwMDAiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXAiOiJMaWdodCIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGFuZ3VhZ2UiOiJlbi1nYiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvZXhwaXJhdGlvbiI6IjIwMjMtMTAtMzEiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXBzdGFydCI6IjIwMjItMTAtMjAiLCJpc3MiOiJodHRwczovL2F1dGhzZXJ2aWNlLnByaWFpZC5jaCIsImF1ZCI6Imh0dHBzOi8vaGVhbHRoc2VydmljZS5wcmlhaWQuY2giLCJleHAiOjE2NjcyMTQwNjYsIm5iZiI6MTY2NzIwNjg2Nn0.dfN5VXOfK5pTkpIZfUT1BC4zzPYzl4Niv7swsrfWLGE&format=json&language=en-gb`)
    .then((response) => response.json())
    .then((data) => diagnoseEndre(data));
}

function diagnoseEndre(data) {
    symptom = arrBodyPart[selectBody.selectedIndex-1].location[selectBodyPart.selectedIndex-1].symptom[selectName.selectedIndex-1].name;
    diagnose1=data[0].Issue.Name;
}

async function dropdown2() {
    bodyPartId2 = arrBodyPart2[selectBodyPart.selectedIndex - 1].ID;
    console.log(bodyPartId2)
    //document.getElementById("demo").innerHTML=bodyPartId2;
    findSymptome();
}



async function LocateBodyPart() {
    selectName.selectedIndex = 0;
    var selectBodyPart = document.getElementById("selectBodyPart");
    selectBodyPart.innerHTML = "<option selected disabled>Choose body Part</option>";
    for (i = 0; i < arrBodyPart[selectBody.selectedIndex-1].location.length; i++) {
        selectBodyPart.options[selectBodyPart.options.length] = new Option(arrBodyPart[selectBody.selectedIndex-1].location[i].name, arrBodyPart[selectBody.selectedIndex-1].location[i].id);
    }

}

async function LocateBody() {
    selectBodyPart.selectedIndex = 0;
    selectName.selectedIndex = 0;
    var selectBody = document.getElementById("selectBody");
    console.log(arrBodyPart)
    selectBody.innerHTML = "<option selected disabled>Choose body</option>";
    for (i = 0; i < arrBodyPart.length; i++) {
        selectBody.options[selectBody.options.length] = new Option(arrBodyPart[i].name, arrBodyPart[i].id);
    }
}

function diagnoseFormaterTabell(data){
    console.log(data);
    document.getElementById("tabell").innerHTML="<tr><th>Accuracy</th><th>Diagnose</th></tr>";
    for (i = 0; i < data.length; i++) {
        document.getElementById("tabell").innerHTML += "<tr><td>" + (data[i].Issue.Accuracy).toFixed(1) + "%</td><td>" + data[i].Issue.Name + "</td></tr>";
    }
    diagnose1=data[0].Issue.Name;
}

async function diagnoseResultat() {
    result = "";
    let symptid = localStorage.getItem('id');
    fetch(`https://healthservice.priaid.ch/diagnosis?symptoms=[${symptid}]&gender=${gender}&year_of_birth=${age}&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImF0ZWViQGxpdmUubm8iLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6Ijg2NzUiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ZlcnNpb24iOiIxMDkiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xpbWl0IjoiMTAwMDAiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXAiOiJMaWdodCIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGFuZ3VhZ2UiOiJlbi1nYiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvZXhwaXJhdGlvbiI6IjIwMjMtMTAtMzEiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXBzdGFydCI6IjIwMjItMTAtMjAiLCJpc3MiOiJodHRwczovL2F1dGhzZXJ2aWNlLnByaWFpZC5jaCIsImF1ZCI6Imh0dHBzOi8vaGVhbHRoc2VydmljZS5wcmlhaWQuY2giLCJleHAiOjE2NjcyMTQwNjYsIm5iZiI6MTY2NzIwNjg2Nn0.dfN5VXOfK5pTkpIZfUT1BC4zzPYzl4Niv7swsrfWLGE&format=json&language=en-gb`)
    .then((response) => response.json())
    .then((data) => diagnoseFormaterTabell(data));

}

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







