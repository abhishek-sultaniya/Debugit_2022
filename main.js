const api = {
    key: "7b15d94bdd24b231abeaf386c6ede6f3",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  var l=0;
  var m=0;
  console.log("hellocoord1");
  window.addEventListener("load",()=>{
     if (navigator.geolocation) 
    {
      navigator.geolocation.getCurrentPosition((position)=>
      {
    l=position.coords.latitude;
    m=position.coords.longitude;
    console.log("hellocoord");
    console.log(l);
    console.log(m);
    // console.log("polar");    
    fetch(`${api.base}weather?lat=${l}&lon=${m}&units=metric&APPID=${api.key}`)
        .then(weat => {
          return weat.json();
        }).then((data)=>
        {
          console.log(data);
          // 1
          let city = document.querySelector('.location');
          city.innerText = `${data.name}, ${data.sys.country}`;

          // 2
          let w= document.querySelector('.description');
          console.log(data.weather[0].main)
          w.innerText = data.weather[0].main;

          // 3
          let temp = document.querySelector('.temp');
          temp.innerHTML = `${Math.round(data.main.temp)}<span>°c</span>`;

          // 4
          let now = new Date();
          console.log(now.getFullYear()); 
          let date = document.querySelector('.time');
          date.innerText =  `${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()}`;

          let dora = document.querySelector('.dora');
          dora.innerText =  `${now.getHours()}:${now.getMinutes()+1}`;

          // 5
          let windy = document.querySelector('.windy');
          console.log(data.wind.speed);
          windy.innerText = `${(data.wind.speed)} m/s`
          
    let feel = document.querySelector('.feel');
    feel.innerText = `${(data.main.feels_like)}°c`;

    let maxtem = document.querySelector('.maxtem');
    maxtem.innerText = `${(data.main.temp_max)}°c`;

    let mintem = document.querySelector('.mintem');
    mintem.innerText = `${(data.main.temp_min)}°c`;

    let humu = document.querySelector('.humus');
    humu.innerText = `${(data.main.humidity)}%`;

        })
  })}});

  console.log("hellocoord3");
  
  //  function getRes () 
  // {
  //   console.log("polar");
  //   fetch(`${api.base}weather?lat=${l}&lon=${l}&units=metric&APPID=${api.key}`)
  //     .then(weat => {
  //       return weat.json();
  //     }).then(displayR);
  // }
  
  // function displayR(weat) 
  // {
  //   console.log("polong");
  //   console.log(weat);
  // }
  // console.log("hellocoord4");
  // getRes();
  // console.log("hellocoord5");

  const searchbox = document.querySelector('.input_text');
  searchbox.addEventListener('keypress', setQuery);
  const pola = document.querySelector('.input_button');
  pola.addEventListener('click', sett);
  
  function setQuery(evt) {
    console.log("inside is pressed")
    if (evt.keyCode == 13) {
        console.log(searchbox.value)
      getResults(searchbox.value);
      console.log("enter is pressed")
      console.log(searchbox.value) 
    }
  }
  function sett() {
    console.log("inside is pressed")
    console.log(searchbox.value)
    getResults(searchbox.value); 
  }
  
  function getResults (query) 
  {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(weather => {
        return weather.json();
      }).then((weather)=>
      {
        console.log(weather)

    let city = document.querySelector('.location');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
  
    console.log(new Date(weather.dt*1000-(3600*5500)+(((weather.timezone)*1000)))); // My location time
    console.log(new Date(weather.dt*1000-(3600*5500))); // Greenwhich time extracted
    console.log(new Date(weather.dt*1000)); // My india time
    let gg=new Date(weather.dt*1000-(3600*5500)+(((weather.timezone)*1000)));
  
    let date = document.querySelector('.time');
    date.innerText =  `${gg.getDate()}-${gg.getMonth()+1}-${gg.getFullYear()}`;

    let dora = document.querySelector('.dora');
    dora.innerText =  `${gg.getHours()}:${gg.getMinutes()+1}`;
  
    let temp = document.querySelector('.temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;
  
    let weatherel = document.querySelector('.description');
    console.log(weather.weather[0].main)
    weatherel.innerText = weather.weather[0].main;

    let windy = document.querySelector('.windy');
    console.log(weather.wind.speed);
    windy.innerText = `${(weather.wind.speed)} m/s`;

    let feel = document.querySelector('.feel');
    feel.innerText = `${(weather.main.feels_like)}°c`;

    let maxtem = document.querySelector('.maxtem');
    maxtem.innerText = `${(weather.main.temp_max)}°c`;

    let mintem = document.querySelector('.mintem');
    mintem.innerText = `${(weather.main.temp_min)}°c`;

    let humu = document.querySelector('.humus');
    humu.innerText = `${(weather.main.humidity)}%`;
    }
      )
  }
  
  const boxer = document.querySelector('.setting');
  const boxing = document.querySelector('.input_setting');
  boxing.addEventListener('click', removall);
  function removall() {
    console.log("Toshiba")
    console.log(boxer.style.visibility)
    console.log("Toshiba22")
    if(boxer.style.visibility=="hidden")
    boxer.style.visibility="visible"
    else
    boxer.style.visibility=="hidden"
  }

  // const boxer = document.querySelector('.saveButton');
  // boxer.addEventListener('click', removall);
  // function removall() {
  //   console.log("To")
  //   boxer.style.visibility="hidden"; 
  // }