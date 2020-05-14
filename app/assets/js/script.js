var regle_jeu = document.getElementById('regle_jeu');
var overlay = document.getElementById('overlay');
var buttonClose = document.getElementById('buttonClose');
var level = document.getElementById('level');
var retour = document.getElementById('retour_arriere');
var HP = document.getElementById('HP');
var SW = document.getElementById('SW');
var CM = document.getElementById('CM');


function popup(){
    overlay.style.display = 'block';
    regle_jeu.style.display = 'none';
}
function choiceLevel(choice)
{
    if(choice.textContent == "Easy")
    {
        overlay.style.display = 'none';
        level.style.display = 'block';
        HP.style.display = 'block';
        SW.style.display ='none';
        CM.style.display ='none';
    }

    else if(choice.textContent == "Medium"){
        overlay.style.display = 'none';
        level.style.display ='block';
        HP.style.display = 'none';
        CM.style.display ='none';
        SW.style.display ='block';     
    }
    else if(choice.textContent == "Hard"){
        overlay.style.display = 'none';
        level.style.display ='block';
        HP.style.display = 'none';
        CM.style.display ='block';  
        SW.style.display ='none';    
    }
} 
buttonClose.addEventListener('click', close);
function close(){
    overlay.style.display = 'none';
    regle_jeu.style.display = 'block';
}
retour.addEventListener('click', retour_arriere);
function retour_arriere(){
    overlay.style.display = 'block';
    level.style.display = 'none';
}
