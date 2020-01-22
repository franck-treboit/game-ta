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
var checkMeAll = document.getElementById('check-me-all');
var checkme = document.getElementById("chek-me-up");
var navToClara = document.getElementById('navToClara');
var navToTatjiana = document.getElementById('navToTatjiana');
var navToGuillaume = document.getElementById('navToGuillaume');
var navToFranck = document.getElementById('navToFranck');
var navToPh = document.getElementById('navToPh');

var scorePlayer = 0;
var scorePlayerByItem = new Object();
scorePlayerByItem["head"] = 0;
scorePlayerByItem["hips"] = 0;
scorePlayerByItem["legs"] = 0;
scorePlayerByItem["torso"] = 0;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
    loadPlayer(myPuppet) {                
        clothesHead.style.marginLeft = ( (this.positions[myPuppet.name.toLowerCase()][0]*189)).toString()+"px";
        clothesTorso.style.marginLeft = ( (this.positions[myPuppet.name.toLowerCase()][1]*189)).toString()+"px";
        clothesHips.style.marginLeft = ( (this.positions[myPuppet.name.toLowerCase()][2]*189)).toString()+"px";
        clothesLegs.style.marginLeft = ( (this.positions[myPuppet.name.toLowerCase()][3]*189)).toString()+"px";
        this.score;
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
    }    
}
var playerOne = new Player();

class Puppet {
    constructor( isTa, image, imagenu, email, name, sex, head, torso, hips, legs, sentenceTemplate, environementTemplate, score, bgc) {
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
        this.backgroundColor = bgc;
    } 
    
    displayPuppet(){
        document.getElementById("nude").innerHTML = `${this.name} is nude !!!`;
        if ( this.sex == 0 ){
            document.getElementById("him").innerHTML = `Dress her !`;            
            document.getElementById("proper").innerHTML = `
                         But do it properly, this girl
                         is a bit fussy, she does'nt accept any clothes you may think of ...`;
            document.getElementById("rule").innerHTML = `
                         As soon as you think that your fashion choices are 
                         her fashion choices too, click here above to check your TA agreement !`
        }

            
        if ( this.sex == 1 ){
            document.getElementById("him").innerHTML = `Dress him !`;            
            document.getElementById("proper").innerHTML = `
                         But do it properly, this man
                         is a bit fussy, he does'nt accept any clothes you may think of ...`;
            document.getElementById("rule").innerHTML = `
                         As soon as you think that your fashion choices are 
                         his fashion choices too, click here above to check your TA agreement !`         
        }
        if ( this.sex == 2 ){
            document.getElementById("him").innerHTML = `Dress that body whatever !`;            
            document.getElementById("proper").innerHTML = `
                         But do it properly, this person
                         is a bit fussy, he does'nt accept any clothes you may think of ...`;
            document.getElementById("rule").innerHTML = `
                         As soon as you think that your fashion choices are 
                        your TA fashion choices too, click here above to check your TA agreement !`            
        }        
        document.getElementById("ken-header-in").innerHTML = `Dress ${this.name} !`; 
        document.getElementById("ken-nu").style.backgroundImage = "url('../"+this.imagenu+"')"; 
        let ma = Number(clothesHead.style.marginLeft.split("px")[0])-189;
        document.getElementById("ken-main").style.backgroundColor = this.backgroundColor;
        
        
        
        

    }    
}  

const franckPuppet = new Puppet( true, "media/franck.png", "media/franck-nu.png" , "Franck@ironhack.com",     "Franck",   1,         -2, -3 , -5 , -2 , 4 , 4, 0, "#b11e1e");           
const claraPuppet = new Puppet( true, "media/clara.png", "media/clara-nu.png" , "clara@ironhack.com",       "Clara",    0,           -2, -3 , -5 , -2 , 4 , 4, 0, "#23dca0");
const tatjianaPuppet = new Puppet( true, "media/tatjiana.png", "media/tatjiana-nu.png", "tatjiana@ironhack.com", "Tatjiana", 0,      -2, -3 , -5 , -2 , 4 , 4, 0, "#5f1a1d");
const phPuppet = new Puppet( true, "media/ph.png", "media/ph-nu.png" , "ph@ironhack.com",             "Ph",       1,                 -2, -3 , -5 , -2 , 4 , 4, 0, "#c211ce");
const guillaumePuppet = new Puppet( true, "media/guillaume.png" , "media/guillaume-nu.png", "guillaume@ironhack.com", "Guillaume",2, -2, -3 , -5 , -2 , 4 , 4, 0, "#107ad6");
var  yourPuppet = new Puppet( true, "media/guillaume.png", "media/guillaume-nu.png", "guillaume@ironhack.com", "Guillaume", 0,       -2, -3 , -5 , -2 , 4 , 4, 0, "#FFFFFF");

let globalPuppet = new Object(); 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function goUpInClothesH() {
    let ma = Number(clothesHead.style.marginLeft.split("px")[0])-189;
    let levelP = (Math.floor(ma/189)).toString();
    if ( ma <= 7) {
        clothesHead.style.marginLeft = ma.toString()+"px";        
        document.getElementById("spriteuh").innerHTML= "< Head "+ Math.abs(levelP);
        document.getElementById("spritedh").innerHTML= "Head "+ Math.abs(levelP)+" >";
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
        document.getElementById("spriteuh").innerHTML= "< Head "+ Math.abs(levelP);
        document.getElementById("spritedh").innerHTML= "Head "+ Math.abs(levelP)+" >";
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
        document.getElementById("spriteuhi").innerHTML= "< Hips "+ Math.abs(levelP);
        document.getElementById("spritedhi").innerHTML= "Hips "+ Math.abs(levelP)+" >";
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
        document.getElementById("spritedhi").innerHTML= "Hips "+ Math.abs(levelP)+" >";
        document.getElementById("spriteuhi").innerHTML= "< Hips "+ Math.abs(levelP);
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
        document.getElementById("spriteut").innerHTML= "< Torso "+  Math.abs(levelP);
        document.getElementById("spritedt").innerHTML= "Torso "+  Math.abs(levelP)+" >";
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
        document.getElementById("spritedt").innerHTML= "Torso "+  Math.abs(levelP)+" >";
        document.getElementById("spriteut").innerHTML= "< Torso "+  Math.abs(levelP);
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
        document.getElementById("spriteul").innerHTML= "< Legs "+ Math.abs(levelP);
        document.getElementById("spritedl").innerHTML= "Legs "+ Math.abs(levelP)+" >";
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
        document.getElementById("spriteul").innerHTML= "< Legs "+ Math.abs(levelP);
        document.getElementById("spritedl").innerHTML= "Legs "+ Math.abs(levelP)+" >";
    }
    let localScore = rateLegs[0].rate;
    let puppetClotheValue = levelP ; 
    modifyScore("legs", localScore, puppetClotheValue ); 
}

let score = 0;


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
        "rate" : 6,
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
        "rate" : 6,
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
        "rate" : 6,
    },
]
function modifyScore( sourceScore, localScore, puppetClotheValue) {      
    scorePlayerByItem[sourceScore] = puppetClotheValue;
    scorePlayer = playerOne.score+localScore;    
    document.getElementById("your-score").innerHTML =  `Instant score : ${scorePlayer} pts<div class="bullshit">but this is bullshit just to please the TA ...</div>`; 
    playerOne.updatePlayer(sourceScore, scorePlayer , puppetClotheValue);
    playerOne.score = localScore;
} 

function checkMe(){
    let details = "";
    let enderScore = 0;
    if ( globalPuppet.head != scorePlayerByItem["head"] ){
       details += "<span class='hclue'>Head: i 've got a bad feeling about it ...</span><br />";
    } else {
       details += "<span class='hclue' style='black'>Head: You're the dude </span><br />";         
       enderScore += 1;
   }
    if ( globalPuppet.torso != scorePlayerByItem["torso"] ){
       details += "<span class='tclue'>Torso: not shaped enough ... </span><br />";         
    } else {
       details += "<span class='hclue' style='black'>Torso: This TA is the best velvet costume designer in the world ... </span><br />";         
       enderScore += 1;
    }
    if ( globalPuppet.hips != scorePlayerByItem["hips"] ){
       details += "<span class='hiclue'>Hips: hips don't lie ... </span><br />";                 
    } else {
       details += "<span class='hclue' style='black'>Hips: Don't hesitate with these hips ... </span><br />";         
       enderScore += 1;
    }
    if ( globalPuppet.legs != scorePlayerByItem["legs"] ){
       details += "<span class='lclue'>Legs: don't show me your legs anymore ... </span><br />";         
    } else {
       details += "<span class='hclue' style='black'>Legs: They always tell the truth </span><br />";         
       enderScore += 1;
    }
    
    details += globalPuppet.head+" "+globalPuppet.torso+" "+globalPuppet.hips+" "+globalPuppet.legs
    details += scorePlayerByItem["head"]+" "+scorePlayerByItem["torso"]+" "+scorePlayerByItem["hips"]+" "+scorePlayerByItem["legs"]
    
    //verifir le scor ligne par ligne
   document.getElementById("comments").innerHTML = "Bad news for your sunshine, this is not what you expected to see you're too bad ! No time for excuses ! Go back to work and do it better next time ... and as i am not a bad guy here are some clues details to help you : <br />"+details;

    if ( enderScore >= 4) {
        document.getElementById("comments").innerHTML = "<span style='fontsize:20px;color:green;'>You 're the new Largerfeld !!! You won a date with the TA of your choice (well ... not .. that was a trap). Happy to see you again<span>"
    }
}

function checkAll() {
    
        let finalScore = 0;
        console.log(playerOne.positions);
        console.log(claraPuppet);
        console.log(guillaumePuppet);
        console.log(franckPuppet);
        console.log(phPuppet);
        console.log(tatjianaPuppet);
                
        (claraPuppet.head == playerOne.positions["clara"][0]) ? finalScore++ : null ;
        (claraPuppet.torso == playerOne.positions["clara"][1]) ? finalScore++ : null ;
        (claraPuppet.hips == playerOne.positions["clara"][2]) ? finalScore++ : null ;
        (claraPuppet.legs == playerOne.positions["clara"][3]) ? finalScore++ : null ;

        (guillaumePuppet.head == playerOne.positions["guillaume"][0]) ? finalScore++ : null ;
        (guillaumePuppet.torso == playerOne.positions["guillaume"][1]) ? finalScore++ : null ;
        (guillaumePuppet.hips == playerOne.positions["guillaume"][2]) ? finalScore++ : null ;
        (guillaumePuppet.legs == playerOne.positions["guillaume"][3]) ? finalScore++ : null ;

        (franckPuppet.head == playerOne.positions["franck"][0]) ? finalScore++ : null ;
        (franckPuppet.torso == playerOne.positions["franck"][1]) ? finalScore++ : null ;
        (franckPuppet.hips == playerOne.positions["franck"][2]) ? finalScore++ : null ;
        (franckPuppet.legs == playerOne.positions["franck"][3]) ? finalScore++ : null ;

        (phPuppet.head == playerOne.positions["ph"][0]) ? finalScore++ : null ;
        (phPuppet.torso == playerOne.positions["ph"][1]) ? finalScore++ : null ;
        (phPuppet.hips == playerOne.positions["ph"][2]) ? finalScore++ : null ;
        (phPuppet.legs == playerOne.positions["ph"][3]) ? finalScore++ : null ;

        (tatjianaPuppet.head == playerOne.positions["tatjiana"][0]) ? finalScore++ : null ;
        (tatjianaPuppet.torso == playerOne.positions["tatjiana"][1]) ? finalScore++ : null ;
        (tatjianaPuppet.hips == playerOne.positions["tatjiana"][2]) ? finalScore++ : null ;
        (tatjianaPuppet.legs == playerOne.positions["tatjiana"][3]) ? finalScore++ : null ;
        
        let toAlert=""; 
        //finalScore =20;
        if ( finalScore < 20 ){
            toAlert = "Well ... what's your problem ? a standard alert box is not enough ? But you fail ! you are just an ugly looser, then because of you and because of Pauline who has not been able to translate 'confetti' in english, your fucking score of "+finalScore+"/20 does'nt worth more than an alert box ... so try to dress up your TA's differently and maybe ... "   
        } else { 
            toAlert = "What ??? You were expecting a nice popup with design, music, confetti ? but because we ran out of money ( and because of Pauline again  ...) and despite fucking score of "+finalScore+"/20, we decide to use the standard alert box to inform you that your winner price will only be available when you will began you retirement period ... good bye."               
        }   
        alert(toAlert);
        if ( finalScore >= 20 ){
            window.close();
        }   

}

if (window.location.href.split("=")[1] != "") {
    navTo(window.location.href.split("=")[1])
}

function navTo(ta) {
    if ( ta == "ph") {
        phPuppet.displayPuppet();
        globalPuppet=phPuppet; 
        playerOne.loadPlayer(phPuppet);
    }
    if ( ta == "clara") {
        claraPuppet.displayPuppet();    
        globalPuppet=claraPuppet; 
        playerOne.loadPlayer(claraPuppet);
    }
    if (ta == "tatjiana") {
        tatjianaPuppet.displayPuppet();    
        globalPuppet=tatjianaPuppet; 
        playerOne.loadPlayer(tatjianaPuppet);
    }
    if (ta == "guillaume") {
        guillaumePuppet.displayPuppet();    
        globalPuppet=guillaumePuppet; 
        playerOne.loadPlayer(guillaumePuppet);
    }
    if (ta == "franck") {
        franckPuppet.displayPuppet();    
        globalPuppet=franckPuppet; 
        playerOne.loadPlayer(franckPuppet);
    }    
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
checkMeAll.addEventListener('click', function () {
    checkAll();
});
checkme.addEventListener('click', function () {
    checkMe();
});
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


