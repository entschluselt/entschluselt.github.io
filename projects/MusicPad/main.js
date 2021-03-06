window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const balls = document.querySelector(".balls");
    const colors =[
        "#eb5c5c",
        "#39f067",
        "#c31f6c",
        "#2755d3",
        "#fabf5f",
        "#20ddf2"
    ];
    // 
    pads.forEach((pad,index) =>{
        pad.addEventListener('click',function(){
            sounds[index].currentTime=0;
            sounds[index].play();
            createbubble(index);
        });
    });

    // making bubbles
    const createbubble = (index) => {
        const bubble = document.createElement("div");
        balls.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationend',function(){
            balls.removeChild(this);
        });
    };
    
});