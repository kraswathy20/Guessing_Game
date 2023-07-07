let max = parseInt(prompt("Welcome! Enter your maximum number:"));
while(!max){
    max = parseInt(prompt("Enter A Valid Number:"));
}
let rad = parseInt(Math.floor(Math.random()*max)+1);

let guess=prompt("Enter your guess: (Type 'q' to Quit)")

for(i=1;i<=max;i++){
    if(guess=='q'|| guess=='Q'){
        console.log("Quit");
        break;
    }
    else if(guess==rad){
        console.log(`It took you ${i} guesses`);
        break;
    }
    else if(guess<rad){
        console.log("Low");
        input=prompt("Too low,Guess again:");
        guess=input;
    }
    else if(guess>rad){
        console.log("High");
        input=prompt("Too High,Guess again:");
        guess=input;
    }
    else{
        input=prompt("Invalid Entry,Guess again:");
        guess=input;
    }
}


