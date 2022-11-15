let verbs = ["tenir", "abstenir", "appartenir", "contenir", "détenir", "entretenir", "maintenir",
"obtenir", "retenir", "soutenir", "venir", "avenir", "advenir", "bienvenir", "circonvenir",
"contrevenir", "convenir", "devenir", "disconvenir", "intervenir", "obvenir", "parvenir",
"prévenir", "provenir", "redevenir", "ressouvenir", "revenir", "souvenir", "subvenir",
"survenir", "acquérir", "conquérir", "enquérir", "quérir", "reconquérir", "requérir", "sentir",
"consentir", "pressentir", "ressentir", "mentir", "démentir", "partir", "départir", "repartir",
"repentir", "sortir", "désassortir", "rassortir", "ressortir", "vêtir", "dévêtir", "revêtir",
"survêtir", "ouvrir", "couvrir", "découvrir", "redécouvrir", "recouvrir", "entrouvrir",
"rentrouvrir", "rouvrir", "offrir", "souffrir", "cueillir", "accueillir", "recueillir",
"assaillir", "saillir", "tressaillir", "défaillir", "faillir", "bouillir", "débouillir",
"dormir", "endormir", "rendormir", "courir", "accourir", "concourir", "discourir", "encourir",
"parcourir", "recourir", "secourir", "mourir", "servir", "desservir", "resservir", "fuir",
"enfuir", "gésir", "racabouillir", "issir", "ouïr", "férir", "asservir", "recevoir",
"apercevoir", "assavoir", "concevoir", "décevoir", "percevoir", "voir", "entrevoir", "prévoir",
"revoir", "entrapercevoir", "entr'apercevoir", "pourvoir", "dépourvoir", "savoir", "devoir",
"redevoir", "pouvoir", "repouvoir", "mouvoir", "émouvoir", "promouvoir", "pleuvoir",
"repleuvoir", "falloir", "valoir", "équivaloir", "prévaloir", "revaloir", "vouloir", "revouloir",
"asseoir", "rasseoir", "seoir", "messeoir", "surseoir", "choir", "déchoir", "chaloir",
"comparoir", "apparoir", "échoir"];


// Creation de la methode Shuffle() 
String.prototype.shuffle =function() {
 var a = this.split(""),
 n = a.length;
 
 for(var i=n-1; i>0; i--){
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;

 }
 return a.join("");

}


// couleur aleatoire
let c = Math.floor(Math.random() * 360);
let color_x = "hsl("+ c +", 100%, 50%)";

// un verbe aleatoir
let x = Math.floor(Math.random() * verbs.length);
let verb = verbs[x];


let home = document.getElementById("home");
let game = document.getElementById("game");
let win = document.getElementById("win");
let lose = document.getElementById("lose");

let quiz = document.getElementById("quiz");
let answer = document.getElementById("answer");

let jouer = document.querySelectorAll(".jouer");
let lancer = document.querySelector(".lancer");

let indice = document.querySelectorAll(".indice");



lancer.onclick= function() {
    // Disparition de l'accueil et apparition du jeu
    home.style.display = "none";
    game.style.display = "block";
    
    // Affectation du Shuffle
   quiz.style.color= color_x;
    quiz.innerHTML = verb.shuffle();

   // Affectation des lettres indices
    for (let i=0; i<indice.length; i++)
    {
        // couleur
        indice[i].style.color = color_x;

        // lettre
        indice[i].innerHTML = verb.charAt(i);
    }


// fin du temps
    let fin =  setTimeout(function(){
        if (answer.value.toLowerCase() === verb.toLowerCase())
        {
            // Bravo
            game.style.display="none";
            win.style.transform= "scale(1) skew(0deg)";
        }
        else
        {
            // Perdu
            game.style.display = "none";
            lose.style.display = "block";
        }
    }, 60*1000);


    setInterval(function(){
        
        if (answer.value.toLowerCase()  === verb.toLowerCase())
        {
            // Arret du compte à reebours
            clearTimeout(fin);

            // Apparition du Bravo
            game.style.display="none";
            win.style.transform= "scale(1) skew(0deg)";
        }
    }, 100);
}

// Recharger le jeu

for (let i=0; i<jouer.length; i++)
{
    jouer[i].onclick=function(){
        location.reload();
    }
}