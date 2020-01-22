/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var spriteuh = document.getElementById('spriteuh');
var spritedh = document.getElementById('spritedh');
var spriteuhi = document.getElementById('spriteuhi');
var spritedhi = document.getElementById('spritedhi');
var spriteut = document.getElementById('spriteut');
var spritedt = document.getElementById('spritedt');
var spriteul = document.getElementById('spriteul');
var spritedl = document.getElementById('spritedl');
var clothesHead = document.getElementById('clothesHead');
var clothesHips = document.getElementById('clothesHips');
var clothesLegs = document.getElementById('clothesLegs');
var clothesTorso = document.getElementById('clothesTorso');
var clothes = document.querySelector('.vet-all img');

var scorePlayer = 0;
var scorePlayerByItem = new Object();
scorePlayerByItem["head"] = 0;
scorePlayerByItem["hips"] = 0;
scorePlayerByItem["legs"] = 0;
scorePlayerByItem["torso"] = 0;

class Player {
    constructor() {
        this.name= "me"; 
        this.sex= 1; 
        this.ta = "";
        this.positions = ["clara","guillaume", "franck", "tatjiana", "ph" ]
        this.positions["clara"] = [0,0,0,0];
        this.positions["guillaume"] = [0,0,0,0];
        this.positions["franck"] = [0,0,0,0];
        this.positions["tatjiana"] = [0,0,0,0];
        this.positions["ph"] = [0,0,0,0];
        this.head=0;
        this.torso= 0; 
        this.hips= 0; 
        this.legs = 0; 
        this.score = 0;
        this.sentenceTemplate = "";
        this.environementTemplate = "";
    } 
    
    savePlayer() {
    }
    loadPlayer(globalPuppet) {                
        clothesHead.style.marginLeft = "-"+( (this.positions[globalPuppet.name.toLowerCase()][0]*189)).toString()+"px";
        clothesTorso.style.marginLeft = "-"+( (this.positions[globalPuppet.name.toLowerCase()][1]*189)).toString()+"px";
        clothesHips.style.marginLeft = "-"+( (this.positions[globalPuppet.name.toLowerCase()][2]*189)).toString()+"px";
        clothesLegs.style.marginLeft = "-"+( (this.positions[globalPuppet.name.toLowerCase()][3]*189)).toString()+"px";
        console.log("____________________________________");
        console.log(clothesHead.style.marginLeft, clothesTorso.style.marginLeft, clothesHips.style.marginLeft, clothesLegs.style.marginLeft );    
        console.log("____________________________________");
    }
    updatePlayer(sourceScore, score, puppetClotheValue){
        let indice = 0;
        if ( sourceScore == "torso" ) {
            indice = 1;
        }
        if ( sourceScore == "hips" ) {
            indice = 2;
        }
        if ( sourceScore == "legs" ) {
            indice = 3;
        }
        
        this.positions[globalPuppet.name.toLowerCase()][indice]=puppetClotheValue;
        this.score = score;
        console.log(playerOne);
    }    
}
var playerOne = new Player();

class Puppet {
    constructor( isTa, image, imagenu, email, name, sex, head, torso, hips, legs, sentenceTemplate, environementTemplate, score) {
        this.isTa = isTa; 
        this.image= image; 
        this.imagenu= imagenu; 
        this.email= email; 
        this.name= name; 
        this.sex= sex; 
        this.head= head; 
        this.torso= torso; 
        this.hips= hips; 
        this.legs = legs; 
        this.sentenceTemplate = sentenceTemplate;
        this.environementTemplate = environementTemplate;
        this.score = score;
    } 
    
    displayPuppet(){
        document.getElementById("nude").innerHTML = `${this.name} is nude !!!`;
        if ( this.sex == 0 ){
            document.getElementById("him").innerHTML = `Dress her !`;            
            document.getElementById("proper").innerHTML = `
                         But do it properly, this girl
                         is a bit fussy, she does'nt accept any clothes you may think of ...`;
            document.getElementById("rule").innerHTML = `
                         As soon as you think that your fashion choice is 
                         her fashion choice too, click here above to check your TA agreement !`
        }
        if ( this.sex == 1 ){
            document.getElementById("him").innerHTML = `Dress him !`;            
            document.getElementById("proper").innerHTML = `
                         But do it properly, this man
                         is a bit fussy, he does'nt accept any clothes you may think of ...`;
            document.getElementById("rule").innerHTML = `
                         As soon as you think that your fashion choice is 
                         his fashion choice too, click here above to check your TA agreement !`
        }
        if ( this.sex == 2 ){
            document.getElementById("him").innerHTML = `Dress that body whatever !`;            
            document.getElementById("proper").innerHTML = `
                         But do it properly, this person
                         is a bit fussy, he does'nt accept any clothes you may think of ...`;
            document.getElementById("rule").innerHTML = `
                         As soon as you think that your fashion choice is 
                        your TA fashion choice too, click here above to check your TA agreement !`            
        }        
        document.getElementById("ken-header-in").innerHTML = `Dress ${this.name} !`; 
        document.getElementById("ken-nu").style.backgroundImage = "url('../"+this.imagenu+"')"; 
        let ma = Number(clothesHead.style.marginLeft.split("px")[0])-189;
        //document.getElementById("ken-header-comment").innerHTML = 0;

    }    
}  

const franckPuppet = new Puppet( true, "media/franck.png", "media/franck-nu.png" , "Franck@ironhack.com",     "Franck",   1, -2, 3 , 5 , 2 , 4 , 4, 0);           
const claraPuppet = new Puppet( true, "media/clara.png", "media/clara-nu.png" , "clara@ironhack.com",       "Clara",    0, 2, 3 , 5 , 2 , 4 , 4, 0);
const tatjianaPuppet = new Puppet( true, "media/tatjiana.png", "media/tatjiana-nu.png", "tatjiana@ironhack.com", "Tatjiana", 0, 2, 3 , 5 , 2 , 4 , 4,0);
const phPuppet = new Puppet( true, "media/ph.png", "media/ph-nu.png" , "ph@ironhack.com",             "Ph",       1, 2, 3 , 5 , 2 , 4 , 4, 0);
const guillaumePuppet = new Puppet( true, "media/guillaume.png" , "media/guillaume-nu.png", "guillaume@ironhack.com", "Guillaume", 2, 2, 3 , 5 , 2 , 4 , 4, 0);

var  yourPuppet = new Puppet( true, "media/guillaume.png", "media/guillaume-nu.png", "guillaume@ironhack.com", "Guillaume", 0, 2, 3 , 5 , 2 , 4 , 4, 0);

let globalPuppet = new Object(); 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function goUpInClothesH() {
    let ma = Number(clothesHead.style.marginLeft.split("px")[0])-189;
    let levelP = (Math.floor(ma/189)).toString();
    if ( ma <= 7) {
        clothesHead.style.marginLeft = ma.toString()+"px";        
    }
    let localScore = rateHead[0].rate; 
    let puppetClotheValue = levelP ; 
    modifyScore("head", localScore, puppetClotheValue ); 
}
function goDownInClothesH() {
    let ma = Number(clothesHead.style.marginLeft.split("px")[0])+189;
    let levelP = (Math.floor(ma/189)).toString();
    if ( ma <= 7 ) {
        clothesHead.style.marginLeft = ma.toString()+"px";
    }
    let localScore = rateHead[0].rate; 
    let puppetClotheValue = levelP ; 
    modifyScore("head", localScore, puppetClotheValue ); 
}
function goUpInClothesHi() {
    let ma = Number(clothesHips.style.marginLeft.split("px")[0])-189;
    let levelP = (Math.floor(ma/189)).toString();
    if ( ma <= 7 ) {
    clothesHips.style.marginLeft = ma.toString()+"px";
    }
    let localScore = rateHips[0].rate;
    let puppetClotheValue = levelP ; 
    modifyScore("hips", localScore, puppetClotheValue ); 
}
function goDownInClothesHi() {
    let ma = Number(clothesHips.style.marginLeft.split("px")[0])+189;
    let levelP = (Math.floor(ma/189)).toString();
    if ( ma <= 7 ) {
        clothesHips.style.marginLeft = ma.toString()+"px";
    }
    let localScore = rateHips[0].rate;
    let puppetClotheValue = levelP ; 
    modifyScore("hips", localScore, puppetClotheValue ); 
}
function goUpInClothesT() {
    let ma = Number(clothesTorso.style.marginLeft.split("px")[0])-189;
    let levelP = (Math.floor(ma/189)).toString();
    if ( ma <= 7 ) {
        clothesTorso.style.marginLeft = ma.toString()+"px";
    }
    let localScore = rateTorso[0].rate;
    let puppetClotheValue = levelP ; 
    modifyScore("torso", localScore, puppetClotheValue ); 
}
function goDownInClothesT() {
    let ma = Number(clothesTorso.style.marginLeft.split("px")[0])+189;
    let levelP = (Math.floor(ma/189)).toString();
    if ( ma <= 7 ) {
        clothesTorso.style.marginLeft = ma.toString()+"px";
    }
    let localScore = rateTorso[0].rate;
    let puppetClotheValue = levelP ; 
    modifyScore("torso", localScore, puppetClotheValue ); 
}
function goUpInClothesL() {
    let ma = Number(clothesLegs.style.marginLeft.split("px")[0])-189;
    let levelP = (Math.floor(ma/189)).toString();
    if ( ma <= 7 ) {
        clothesLegs.style.marginLeft = ma.toString()+"px";
    }
    let localScore = rateLegs[0].rate;
    let puppetClotheValue = levelP ; 
    modifyScore("legs", localScore, puppetClotheValue ); 
}
function goDownInClothesL() {
    let ma = Number(clothesLegs.style.marginLeft.split("px")[0])+189;
    let levelP = (Math.floor(ma/189)).toString();
    if ( ma <= 7 ) {
        clothesLegs.style.marginLeft = ma.toString()+"px";
    }
    let localScore = rateLegs[0].rate;
    let puppetClotheValue = levelP ; 
    modifyScore("legs", localScore, puppetClotheValue ); 
}

let score = 0;

spriteuh.addEventListener('click', function () {
    goUpInClothesH();    
});
spritedh.addEventListener('click', function () {
    goDownInClothesH();
});
spriteuhi.addEventListener('click', function () {
    goUpInClothesHi();
});
spritedhi.addEventListener('click', function () {
    goDownInClothesHi();
});
spriteut.addEventListener('click', function () {
    goUpInClothesT();
});
spritedt.addEventListener('click', function () {
    goDownInClothesT();
});
spriteul.addEventListener('click', function () {
    goUpInClothesL();
});
spritedl.addEventListener('click', function () {
    goDownInClothesL();
});

var sexe = [ "female", "male", "no-genre" ];
var sentenceTemplate = ["war is peace", "ognorance is strengh", "freedom is slavery"];

var environementalTemplate = [
    {
      "name": "The Shawshank Redemption",
      "image":  "Frank",
    },
    {
      "name": "The Franck Redemption",
      "image":  "Darabont",
    },
    {
      "name": "The guillaume Redemption",
      "image":  "Nighel",
    },
];

var rateHead = [
    {
        "image": "sans",
        "name": "sans",
        "rate" : -5,
    },
    {
        "image": "",
        "name": "",
        "rate" : 12,
    },
    {
        "image": "",
        "name": "",
        "rate" : -12,
    },
    {
        "image": "",
        "name": "",
        "rate" : +6,
    },
]

var rateTorso = [
    {
        "image": "sans",
        "name": "sans",
        "rate" : 0,
    },
    {
        "image": "",
        "name": "",
        "rate" : 12,
    },
    {
        "image": "",
        "name": "",
        "rate" : -12,
    },
    {
        "image": "",
        "name": "",
        "rate" : +6,
    },
]

var rateHips = [
    {
        "image": "sans",
        "name": "sans",
        "rate" : 0,
    },
    {
        "image": "",
        "name": "",
        "rate" : 12,
    },
    {
        "image": "",
        "name": "",
        "rate" : -12,
    },
    {
        "image": "",
        "name": "",
        "rate" : +6,
    },
]

var rateLegs = [
    {
        "image": "sans",
        "name": "sans",
        "rate" : 0,
    },
    {
        "image": "",
        "name": "",
        "rate" : 12,
    },
    {
        "image": "",
        "name": "",
        "rate" : -12,
    },
    {
        "image": "",
        "name": "",
        "rate" : +6,
    },
]
function modifyScore( sourceScore, localScore, puppetClotheValue) {      
    scorePlayerByItem[sourceScore] = puppetClotheValue;
    scorePlayer = scorePlayer+localScore;    
    document.getElementById("your-score").innerHTML =  `Instant score : ${scorePlayer} pts<div class="bullshit">but this is bullshit just to please the TA ...</div>`; 
    playerOne.updatePlayer(sourceScore, scorePlayer , puppetClotheValue)
} 

var checkme = document.getElementById("chek-me-up")
checkme.addEventListener('click', function () {
    checkMe();
});

function checkMe(){
    
    if (window.location.href.split("=")[1] == "ph") {
        globalPuppet=phPuppet; 
    }
    if (window.location.href.split("=")[1] == "clara") {
        globalPuppet=claraPuppet; 
    }
    if (window.location.href.split("=")[1] == "tatjiana") {
        globalPuppet=tatjianaPuppet; 
    }
    if (window.location.href.split("=")[1] == "guillaume") {
        globalPuppet=guillaumePuppet; 
    }
    if (window.location.href.split("=")[1] == "franck") {
        globalPuppet=franckPuppet; 
    }
    
    let details = "";
    let enderScore = 0;
    console.log("_________________________________________");
    console.log(scorePlayerByItem);
    console.log(globalPuppet);
    if ( globalPuppet.head != scorePlayerByItem["head"] ){
       details += "<span class='hclue'>i 've got a bad feeling about your head ... </span>";
    } else {
       details += "<span class='hclue' style='black'>You're the dude </span>";         
       enderScore += 1;
   }
    if ( globalPuppet.torso != scorePlayerByItem["torso"] ){
       details += "<span class='tclue'>not shaped enough ... </span>";         
    } else {
       details += "<span class='hclue' style='black'>This TA is the best velvet designer in thh world ... </span>";         
       enderScore += 1;
    }
    if ( globalPuppet.hips != scorePlayerByItem["hips"] ){
       details += "<span class='hiclue'>hips don't lie ... </span>";                 
    } else {
       details += "<span class='hclue' style='black'>Don't hesitate with these hips ... </span>";         
       enderScore += 1;
    }
    if ( globalPuppet.legs != scorePlayerByItem["legs"] ){
       details += "<span class='lclue'>don't show me your legs anymore ... </span>";         
    } else {
       details += "<span class='hclue' style='black'>THe always tell the truth </span>";         
       enderScore += 1;
    }
    
    details += globalPuppet.head+" "+globalPuppet.torso+" "+globalPuppet.hips+" "+globalPuppet.legs
    details += scorePlayerByItem["head"]+" "+scorePlayerByItem["torso"]+" "+scorePlayerByItem["hips"]+" "+scorePlayerByItem["legs"]
    
    //verifir le scor ligne par ligne
   document.getElementById("comments").innerHTML = "Bad news for your sunshine, this is not what you expected to see you're too bad ! No time for excuses ! Go back to work and do it better next time ... and as i am not a bad guy here are some clues details to help you : "+details;

    if ( enderScore >= 4) {
        document.getElementById("comments").innerHTML = "You 're the designer of Chanel !!! "
    }

}

var navToClara = document.getElementById('navToClara');
var navToTatjiana = document.getElementById('navToTatjiana');
var navToGuillaume = document.getElementById('navToGuillaume');
var navToFranck = document.getElementById('navToFranck');
var navToPh = document.getElementById('navToPh');

navToClara.addEventListener('click', function () {
    navTo("clara");    
});
navToTatjiana.addEventListener('click', function () {
    navTo("tatjiana");    
});
navToGuillaume.addEventListener('click', function () {
    navTo("guillaume");    
});
navToFranck.addEventListener('click', function () {
    navTo("franck");    
});
navToPh.addEventListener('click', function () {
    navTo("ph");    
});

if (window.location.href.split("=")[1] != "") {
    navTo(window.location.href.split("=")[1])
}

function navTo(ta) {
    if ( ta == "ph") {
        phPuppet.displayPuppet();
        globalPuppet=phPuppet;         
    }
    if ( ta == "clara") {
        claraPuppet.displayPuppet();    
        globalPuppet=claraPuppet; 
    }
    if (ta == "tatjiana") {
        tatjianaPuppet.displayPuppet();    
        globalPuppet=tatjianaPuppet; 
    }
    if (ta == "guillaume") {
        guillaumePuppet.displayPuppet();    
        globalPuppet=guillaumePuppet; 
    }
    if (ta == "franck") {
        franckPuppet.displayPuppet();    
        globalPuppet=franckPuppet; 
    }    
    console.log(globalPuppet);
    playerOne.loadPlayer(globalPuppet);
}


