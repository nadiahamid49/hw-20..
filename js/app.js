let num = Number(prompt(`Enter Your Number`));

if( num % 2 == 0){
    document.querySelector(`p`).innerText = `Even`;
}else if(num % 2 == 1){
    document.querySelector(`p`).innerText = `odd`;
}