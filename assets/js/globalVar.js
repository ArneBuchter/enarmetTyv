let credits = 100
let gameOver = document.querySelector('.container');
let displayOne = document.querySelector('#imgone');
let displayTwo  = document.querySelector('#imgtwo');
let displayThree = document.querySelector('#imgthree')
let one;
let two;
let three;
let playGame = document.querySelector('.role');
let winner = document.querySelector('.point'); 
let winns = document.querySelector('.winns');

const slotBar = [
    {icon: 'appelsin.png', tal: [5, 12], bonus: 50}, 
    {icon:'bar.png', tal: [0, 4], bonus: 500}, 
    {icon: 'blomme.png', tal: [13, 19], bonus: 60}, 
    {icon: 'citron.png', tal: [20, 31], bonus: 30}, 
    {icon: 'diamant.png', tal: [32, 42], bonus: 30}, 
    {icon: 'jordbaer.png', tal: [43, 53], bonus: 30}, 
    {icon: 'kirsebaer.png', tal: [54, 65], bonus: 20}, 
    {icon: 'klokker.png', tal: [66, 79], bonus: 20}, 
    {icon: 'melon.png', tal: [80, 90], bonus: 35}, 
    {icon: 'syv.png', tal: [91, 99], bonus: 40}
]