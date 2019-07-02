function button(){
  var x = document.getElementById("button");
  if(x.innerText === ":)"){
    x.innerHTML = "<h1>:(</h1>";
  }else{
    x.innerHTML = "<h1>:)</h1>";
  }
}

function image(){
  var x = document.getElementById("image");
  console.log(x);
  if(x.innerHTML === "<img src = 'Miyano Cheer.gif' style = 'width:80px'>"){
    x.innerHTML = "<img src = 'Becky.gif' style = 'width:80px'>";
  }else if(x.innerHTML === "<img src = 'Becky.gif' style = 'width:80px'>"){
    x.innerHTML = "<img src = 'Pepe Sabers.gif' style = 'width:80px'>";
  }else if(x.innerHTML === "<img src = 'Pepe Sabers.gif' style = 'width:80px'>"){
    x.innerHTML = "<img src = 'Pepe Hype 2.gif' style = 'width:80px'>";
  }else{
    x.innerHTML = "<img src = 'Miyano Cheer.gif' style = 'width:80px'>";
  }
}
