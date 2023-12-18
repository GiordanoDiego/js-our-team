
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


/* 
    MILESTONE 2:
    Stampare le stesse informazioni su DOM sottoforma di stringhe
*/

let teamContainer = document.getElementById('teams_container');
console.log("teamContainer Team",teamContainer);


for (let i = 0; i<team.length; i++){
    console.log("Mebro Team", team[i]);
    

    for(let key in team[i]){
        if(key == "img"){
            teamContainer.innerHTML += `<img src="./img/${team[i][key]}" alt="">`;
        }else{
            console.log("-", key, ":",team[i][key]);
            teamContainer.innerHTML += " - " +"<strong>" +key +"</strong>" + ": " +team[i][key] + "<br>";
        }
        
    }
    teamContainer.innerHTML += "<hr>";
}
