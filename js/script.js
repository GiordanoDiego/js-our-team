/*
console.log('nomeVariabile', nomeVariabile, typeof nomeVariabile);

document.getElementById('idHtml').innerHTML = noveVariabileJS;

//valore input 
    userName = document.getElementById('userName');
    userNameValue = userName.value;

//controllare se il valore è Nan
    if(isNaN(kmValue))

*/



/* 
    MILESTONE 2:
    Stampare le stesse informazioni su DOM sottoforma di stringhe
    Consigli del giorno:
    Ragioniamo come sempre a step.
    Prima la logica in italiano e poi traduciamo in codice.
    E ricordiamoci che console.log() è nostro amico!
    Buon lavoro!
*/

// mileston 0
// creo array di oggetti
const team = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        img: "wayne-barnett-founder-ceo.jpg",
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        img: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        img: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        img: "scott-estrada-developer.jpg"
    },

    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg"
    }
];

//milestone 1
console.log('team', team, typeof team);

// mileston 1
for (let i = 0; i<team.length; i++){
    console.log("Mebro Team", team[i]);

    for(let key in team[i]){
        console.log("-", key, ":",team[i][key]);
    }
}
