var arrayTeste = [];

for(var i = 0; i < 10;i++){
    arrayTeste.push(function(){
      console.log(i);
    })
}

arrayTeste[2]();
