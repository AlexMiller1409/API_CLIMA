let url 
function saoPaulo(){
  lat  = -23.536921
  long = -46.639133
  temperatura()
}
function rj(){
  lat  = -22.9066343
  long = -43.1804255 
  temperatura()
}  
function bh(){
  lat  = -19.912998  
  long = -43.940933 
  temperatura()
}  
function vit(){
  lat  =  -20.3222
  long = -40.3381
  temperatura()
}  
function curi(){
  lat  = -25.4284
  long = -49.2733 
  temperatura()
}  
function floripa(){
  lat  = -27.5969
  long = -48.5495
  temperatura()
}  
function portoAlegre(){
  lat  = -30.0277
  long = -51.2287 
  temperatura()
}   
function salvador(){
  lat  = -12.9704
  long = -38.5124 
  temperatura()
}   
function brasilia(){
  lat  = -15.7801
  long = -47.9292 
  temperatura()
} 
function belem(){
  lat  =  -1.45502
  long = -48.5024 
  temperatura()
} 
function temperatura() {
    console.log(lat)
    console.log(long)
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=a8e227646a99cc1fdf44a2392d183e41`;
    fetchApi(url);
}
function fetchApi(url) {
    let city = document.querySelector('.city');
    let temp = document.querySelector('span');
    fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      let tempInCelsius = (data.main.temp).toFixed(1);
      city.innerText = `Hoje a temperatura em ${data.name} é:`;
      temp.innerText = Math.round(tempInCelsius-273,15);
    })
    .catch((err) => {
      city.innerText = `Impossível acessar o OpenWeather. Verifique a sua conexão.`;
      temp.innerText = `-`;
    })
}

