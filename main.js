









var igrac1= Math.floor(Math.random()*6)+1;
var kockica = document.getElementsByClassName('kockica')[0];

kockica.style.transform = 'rotate('+ Math.floor(Math.random()*30)+1+ 'deg)';

for(var i=0; i<7; i++){
var divcrvena = document.createElement('div')
kockica.appendChild(divcrvena);
divcrvena.className = 'zajednicko';
divcrvena.id = 'tacka' + i;

}	

var nula = document.getElementById('tacka0');
var jedan = document.getElementById('tacka1');
var dva = document.getElementById('tacka2');
var tri = document.getElementById('tacka3');
var cetri = document.getElementById('tacka4');
var pet = document.getElementById('tacka5');
var sest= document.getElementById('tacka6');

if(igrac1 == 1){
  
  nula.setAttribute('id','onered');
  jedan.setAttribute('id','twored');
  tri.setAttribute('id','fourred');
  cetri.setAttribute('id','fivered');
  pet.setAttribute('id','sixred');
  sest.setAttribute('id','sevenred');

}else if(igrac1 == 2){
   
  jedan.setAttribute('id','twored');
  tri.setAttribute('id','fourred');
  cetri.setAttribute('id','fivered');
  pet.setAttribute('id','sixred');
  dva.setAttribute('id','threered');

}else if(igrac1 == 3){
   
  jedan.setAttribute('id','twored');
  tri.setAttribute('id','fourred');
  cetri.setAttribute('id','fivered');
  pet.setAttribute('id','sixred');


}else if(igrac1 == 4){
    
  tri.setAttribute('id','fourred');
  pet.setAttribute('id','sixred');
  dva.setAttribute('id','threered');

}else if(igrac1 == 5){
    
  tri.setAttribute('id','fourred');
  pet.setAttribute('id','sixred');


}else if(igrac1 == 6){
    
  dva.setAttribute('id','threered');


}

var igrac2 = Math.floor(Math.random()*6)+1;
var kockica1 = document.getElementsByClassName('kockica1')[0];
kockica1.style.transform = 'rotate('+ Math.floor(Math.random()*25)+1 + 'deg)'


for (var i=0; i<7; i++){
    var divplavi = document.createElement('div');
    kockica1.appendChild(divplavi);
    divplavi.className = 'zajednicko'
    divplavi.id = 'tackab' + i;
}

var nula = document.getElementById('tackab0');
var jedan = document.getElementById('tackab1');
var dva = document.getElementById('tackab2');
var tri = document.getElementById('tackab3');
var cetri = document.getElementById('tackab4');
var pet = document.getElementById('tackab5');
var sest= document.getElementById('tackab6');

if(igrac2 == 1){
    
    for(var i=0; i<7; i++){
    	if(i!=2){
           eval('tackab'+i+'.style.background = "blue"');
    	}
    }
}
if(igrac2 == 2){
    
    for(var i=0; i<7; i++){
    	if(i!=0 && i!=6){
           eval('tackab'+i+'.style.background = "blue"');
    	}
    }
}
if(igrac2 == 3){
    
    for(var i=0; i<7; i++){
    	if(i!=0 && i!=6 && i!=2){
           eval('tackab'+i+'.style.background = "blue"');
    	}
    }
}
if(igrac2 == 4){
    
    for(var i=0; i<7; i++){
    	if(i!=0 && i!=6 && i!=1 && i!=4){
           eval('tackab'+i+'.style.background = "blue"');
    	}
    }
}
if(igrac2 == 5){
    
    for(var i=0; i<7; i++){
    	if(i!=0 && i!=6 && i!=1 && i!=4  && i!=2){
           eval('tackab'+i+'.style.background = "blue"');
    	}
    }
}
if(igrac2 == 6){
    
    for(var i=0; i<7; i++){
    	if(i!=0 && i!=6 && i!=1 && i!=4  && i!=3  && i!=5 ){
           eval('tackab'+i+'.style.background = "blue"');
    	}
    }
}

