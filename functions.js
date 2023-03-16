const computerChoise = document.querySelector('#pc-choise'); 
const userChoise = document.querySelector('#user-choise'); 
const ruselt = document.querySelector('#ruselt'); 
const gameAssets = ['Rock' , 'Paper' , 'Scissors'] ; 
const buttons = document.querySelectorAll('.button') ;


function pcChoise(){
    computerChoise.innerHTML =gameAssets[Math.floor(Math.random() * 3)]; 
} 

function gameLogic(){
    let pc =  computerChoise.innerHTML ; 
    let user = userChoise.innerHTML ;
    let finalRuselt ; 
    if (pc === user ){
        finalRuselt = 'Draw'
    }
    if (pc === 'Rock' && user === 'Paper' ) {
        finalRuselt = 'You Win!'
    }
    if (pc === 'Rock' && user === 'Scissors' ) {
        finalRuselt = 'You Lost!'
    }
    
    if (pc === 'Paper' && user === 'Scissors' ) {
        finalRuselt = 'You win!'
    }
    
    if (pc === 'Paper' && user === 'Rock' ) {
        finalRuselt = 'You Lost!'
    }

    if (pc === 'Scissors' && user === 'Rock' ) {
        finalRuselt = 'You Win!'
    }

    if (pc === 'Scissors' && user === 'Paper' ) {
        finalRuselt = 'You Lost!'
    }

    ruselt.innerHTML = finalRuselt
}


buttons.forEach(buttons => buttons.addEventListener('click' , (e) => {
    userChoise.innerHTML = e.target.id  ;
    pcChoise() ;
    gameLogic();
} ))

