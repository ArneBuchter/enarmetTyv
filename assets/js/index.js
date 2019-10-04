document.addEventListener('DOMContentLoaded', () => {

Rumble();
barRoll();


    function goodToGo (){
        if(credits <= 0){
        gameOver.innerHTML = `
        <div class="game-over">
        <p class="game-over__text">GAME OVER</p>
        <a href="./index.html" class="game-over__link">PLAY AGAIN</a>
        </div>
        `
        } 
    }
    
    function Rumble(){
        playGame.addEventListener('click', () => {
            winns.innerHTML = '';
            credits--
            goodToGo();
            barRoll();
        })
        
    }
    
    function calc() {
        return Math.floor(Math.random() * 100);
    }

    function barRoll() {

        one = calc();
        two = calc();
        three = calc();
       
         let procentOne = one;
         let procentTwo = two;
         let procentThree = three;
         let bonusArray = [];
         let imgArray = [];
        
        for(let i = 0; i < slotBar.length; i++){
            if(procentOne >= slotBar[i].tal[0] && procentOne <= slotBar[i].tal[1]){
                
                imgInsert(displayOne, i);  
                bonusArray[0]=slotBar[i].bonus;
                imgArray[0]=slotBar[i].icon;
                break
            }
        } 

        for(let i = 0; i < slotBar.length; i++){
            if(procentTwo >= slotBar[i].tal[0] && procentTwo <= slotBar[i].tal[1]){
                
                imgInsert(displayTwo, i);
                bonusArray[1]=slotBar[i].bonus;
                imgArray[1]=slotBar[i].icon;
                break
            }
        }

        for(let i = 0; i < slotBar.length; i++){
            if(procentThree >= slotBar[i].tal[0] && procentThree <= slotBar[i].tal[1]){
                
                imgInsert(displayThree, i);
                bonusArray[2]=slotBar[i].bonus;
                imgArray[2]=slotBar[i].icon;
                break
            }
        }
        
        if(imgArray[0] == imgArray[1] && imgArray[1] == imgArray[2]){
           
            let getWins = winner.innerHTML;
            let amount = parseInt(getWins);
            let wins = bonusArray[0] + amount;
            winner.innerHTML = wins;
            credits += bonusArray[0];
            winns.innerHTML = bonusArray[0];

        } else if (imgArray[0] == imgArray[1]){
            let getWins = winner.innerHTML;
            let amount = parseInt(getWins);
            let wins = 2 + amount
            credits += 2;
            winner.innerHTML =  wins;
            winns.innerHTML = 2;
        }
    
        let scoreboard = document.querySelector('.score');

        scoreboard.innerHTML = credits +' point';
    }

    function imgInsert (display, index){
        let before = prevIndexInArray(slotBar, index);
        let after = nextIndexInArray(slotBar, index);

        display.innerHTML = `
        <img class="img" src="./assets/icons/${slotBar[before].icon}">
       <img class="img" src="./assets/icons/${slotBar[index].icon}"> 
       <img class="img" src="./assets/icons/${slotBar[after].icon}">
       `  
    }

}) //DOM