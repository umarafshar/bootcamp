// IPL Winner Guess
let card = document.querySelector('.card');
let btn1 = document.querySelector('.btn-1');

let logo = document.querySelector('.card__logo');
let team = document.querySelector('.card__team-name');
let captain = document.querySelector('.card__team-captain');
let owner = document.querySelector('.card__team-owner');


let teamArr = [
{
    logo: "./Assets/CSK.avif",
    teamName: "Chennai Super Kings",
    teamCaptain: "MS Dhoni",
    teamOwner: "Chennai Super Kings Cricket Limited",
    color: "LemonChiffon"
},
{
    logo: "./Assets/DC.avif",
    teamName: "Delhi Capitals",
    teamCaptain: "Axar Patel",
    teamOwner: "JSW GMR Cricket Pvt Ltd",
    color: "lightblue"
},
{
    logo: "./Assets/GT.avif",
    teamName: "Gujarat Titans",
    teamCaptain: "Shubman Gill",
    teamOwner: "Irelia Sports India Private Limited",
    color: "yellow"
},
{
    logo: "./Assets/KKR.avif",
    teamName: "Kolkata Knight Riders",
    teamCaptain: "Ajinkya Rahane",
    teamOwner: "Knight Riders Sports Private Limited",
    color: "wheat"
},
{
    logo: "./Assets/LSG.avif",
    teamName: "Lucknow Super Giants",
    teamCaptain: "Rishabh Pant",
    teamOwner: "RPSG Sports Private Limited",
    color: "lightgreen"
},
{
    logo: "./Assets/MI.avif",
    teamName: "Mumbai Indians",
    teamCaptain: "Hardik Pandya",
    teamOwner: "Indiawin Sports Pvt. Ltd",
    color: "orange"
},
{
    logo: "./Assets/PBK.avif",
    teamName: "Punjab Kings",
    teamCaptain: "Shreyas Iyer",
    teamOwner: "K.P.H. Dream Cricket Private Limited",
    color: "salmon"
},
{
    logo: "./Assets/RR.avif",
    teamName: "Rajasthan Royals",
    teamCaptain: "Sanju Samson",
    teamOwner: "Royal Multisport Private Limited",
    color: "Gray"
},
{
    logo: "./Assets/RCB.avif",
    teamName: "Royal Challengers Bengaluru",
    teamCaptain: "Rajat Patidar",
    teamOwner: "Royal Challengers Sports Private Ltd",
    color: "maroon"
},
{
    logo: "./Assets/SRH.avif",
    teamName: "Sunrisers Hyderabad",
    teamCaptain: "Pat Cummins",
    teamOwner: "Sun TV Network Limited",
    color: "tomato"
},
]

    // console.log('Hello Brother')
    // console.log(teamArr[0].teamName)
        
    
    // console.log(teamArr)
    btn1.addEventListener('click', function(){
        let num = teamArr[Math.floor(Math.random() * teamArr.length)];
        // console.log(num.teamName)

        logo.src = num.logo;
        logo.alt = num.teamName;
        team.innerHTML = num.teamName;
        captain.innerHTML = num.teamCaptain;
        owner.innerHTML = num.teamOwner;
        card.style.backgroundColor = num.color;

})

//  Rock Paper Scissors Game
let btn2 = document.querySelector('.btn-2');
let p1Title = document.querySelector('.card__left-title');
let p1Img = document.querySelector('.card__left-img');
let p2Title = document.querySelector('.card__right-title');
let p2Img = document.querySelector('.card__right-img');
let result = document.querySelector('.result')
let p1card = document.querySelector('.card__left')
let p2card = document.querySelector('.card__right')

let gameArr = [
    {
        img: "./Assets/rock.png",
        name: "Rock",
    },
    {
        img: "./Assets/paper.png",
        name: "Paper",
    },
    {
        img: "./Assets/scissors.png",
        name: "Scissors",
    }
]

btn2.addEventListener('click', function() {
    let p1 = gameArr[Math.floor(Math.random() * gameArr.length)];
    let p2 = gameArr[Math.floor(Math.random() * gameArr.length)];

    p1Title.innerHTML = p1.name;
    p2Title.innerHTML = p2.name;
    
    p1Img.src = p1.img;
    p2Img.src = p2.img;

    if (p1.name === "Rock" && p2.name === "Scissors") {
        p1card.style.backgroundColor = "lightgreen"
        p2card.style.backgroundColor = "crimson"
        result.innerHTML = "Congrats! Player 1 Win"
    } else if (p1.name === "Paper" && p2.name === "Rock") {
        p1card.style.backgroundColor = "lightgreen"
        p2card.style.backgroundColor = "crimson"
        result.innerHTML = "Congrats! Player 1 Win"
    } else if (p1.name === "Scissors" && p2.name === "Paper") {
        p1card.style.backgroundColor = "lightgreen"
        p2card.style.backgroundColor = "crimson"
        result.innerHTML = "Congrats! Player 1 Win"
    } else if (p1.name === p2.name) {
        p1card.style.backgroundColor = "wheat"
        p2card.style.backgroundColor = "wheat"
        result.innerHTML = "Ohh! This Draw"
    } else {
        p1card.style.backgroundColor = "crimson"
        p2card.style.backgroundColor = "lightgreen"
        result.innerHTML = "Sorry! Player 1 Lose"
    }


    console.log(`Player 1: ${p1.name}
Player 2: ${p2.name}`)
})