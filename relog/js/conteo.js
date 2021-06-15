  /* particlesJS("particles-js", {
    "particles": {"number": {"value": 80, "density": {"enable": true, "value_area": 800}}, "color": { "value": "#ffffff"},
      "shape": {"type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 },
        "image": {"src": "img/github.svg", "width": 100, "height": 100 }}, "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false }},
      "size": { "value": 3,  "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 100,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });*/

const TiempoRestante = fechalimite => {
  let ahora = new  Date(),
       tiempofaltante = (new Date(fechalimite) - ahora + 1000 ) / 1000,
       segundosfaltantes = ('0' + Math.floor(tiempofaltante % 60)).slice(-2),
       minutosfaltantes = ('0' + Math.floor(tiempofaltante / 60 % 60)).slice(-2),
       horasfaltantes = ('0' + Math.floor(tiempofaltante / 3600 % 24)).slice(-2),
       diasfaltantes = Math.floor(tiempofaltante / (3600 * 24));
  return{tiempofaltante, segundosfaltantes, minutosfaltantes, horasfaltantes, diasfaltantes}
};

const contador = (fechalimite, mensaje) => {
  const dia = document.getElementById('dia');
  const hora = document.getElementById('horas');
  const minuto = document.getElementById('minuto');
  const segundo = document.getElementById('segundo');

  const actualiza =  setInterval( () => {
    let t= TiempoRestante(fechalimite);
    //elem.innerHTML = `${t.diasfaltantes} D: ${t.horasfaltantes} H: ${t.minutosfaltantes} min: ${t.segundosfaltantes} seg`;
    dia.innerHTML = t.diasfaltantes;
    hora.innerHTML = t.horasfaltantes;
    minuto.innerHTML =t.minutosfaltantes;
    segundo.innerHTML=t.segundosfaltantes;
    if(t.tiempofaltante <= 0){
      clearInterval(contador);
      /*elem.innerHTML = mensaje;*/
    }
  }, 1000)
}
contador("May 27 2021 23:03:47 GMT-0400",'Bienvenidos');
