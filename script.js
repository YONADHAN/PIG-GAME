'use strict';
let activeplayer=0;
let sum=[0,0];
let current=0;

const startercondition = function(){
    activeplayer=0;
    sum=[0,0];
    current=0;
    document.querySelector(`#current--${activeplayer}`).textContent=sum[activeplayer]
    //starting condition
    btnRoll.classList.remove('hidden');
    scoreEl0.textContent=0;
    scoreEl1.textContent=0;
    diceEl.classList.add('hidden');
    for(let h=0;h<2;h++){
        document.querySelector(`.player--${h}`).classList.remove('player--winner');
        document.querySelector(`.player--${h}`).classList.remove('player--looser');
    }
    

}

//switch player function
const switchPlayer = function(){
    document.querySelector(`#current--${activeplayer}`).textContent=0;
    document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
    activeplayer = (activeplayer===0)? 1 : 0;
    document.querySelector(`.player--${activeplayer}`).classList.add('player--active');
}


//selecting all important elements to alter on time
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const scoreEl0 = document.querySelector('#score--0');
const scoreEl1 = document.querySelector('#score--1');
const NewGame = document.querySelector('.btn--new');




//button roll functions
startercondition();
btnRoll.addEventListener('click',function(){
    //On clicking btn, a random number gets generated
    let RandomNumber = Math.trunc(Math.random()*6)+1;
    console.log(RandomNumber);
    //At the same time corresponding dice image is displayed
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${RandomNumber}.png`;
        //If a random number 1 is generated, switch players
    if (RandomNumber!==1){
        //add scores
        sum[activeplayer]+=RandomNumber;
        current+=RandomNumber;      
        document.querySelector(`#current--${activeplayer}`).textContent=current;
        if(sum[activeplayer]>10){
            document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
            document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
            document.querySelector(`.player--${(activeplayer===0)?1:0}`).classList.add('player--looser');
            document.querySelector(`#score--${activeplayer}`).textContent=sum[activeplayer];
            diceEl.classList.add('hidden');
            btnRoll.classList.add('hidden');
        }
       
        
    }else{
        //switch players
        document.querySelector(`#score--${activeplayer}`).textContent=sum[activeplayer];
        current=0;
        switchPlayer();
    }
})

btnHold.addEventListener('click',function(){
    document.querySelector(`#score--${activeplayer}`).textContent=sum[activeplayer];
    current=0;
    switchPlayer();
})

NewGame.addEventListener('click',function(){
    startercondition();
})