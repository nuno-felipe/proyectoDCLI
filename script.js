window.addEventListener('load',function(){
    var botonSeleccionarColor=document.getElementById('seleccionar');
    var inputSeleccionarColor=document.getElementById('colorHex');
    var inputLista=document.querySelector(".listaInput");
    var botonLista=document.getElementsByClassName('listaBoton')[0];
    var listaUl=document.querySelector('.listaUl');



    inputSeleccionarColor.addEventListener('keyup',comprobarColor);
    botonSeleccionarColor.addEventListener('click',cambiarColor,true);
    botonLista.addEventListener('click',anadirLista);



    function comprobarColor(){
        let regEx=new RegExp('^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$');
        if(regEx.test(this.value)){
            this.className="correcto";
        }else{
            this.className="incorrecto";
        }
    }
    function cambiarColor(){
        if(inputSeleccionarColor.className==="correcto"){
            document.getElementsByTagName("body")[0].style["backgroundColor"]=inputSeleccionarColor.value;
        }
    }
    function borrarLista(){
        this.parentElement.remove();
    }
    function listaCompleta(){
        this.parentElement.className='completo';
    }
    
    function anadirLista(e){
        e.preventDefault();//el boton está dentro de un form y con preventDafualt() evitamos que se ejecute el form 
        var contenedorLista = document.createElement('div');
        contenedorLista.className="divLista";
        var listaLi = document.createElement('li');
        listaLi.innerText=inputLista.value;
        contenedorLista.appendChild(listaLi);
        var botonCompleto=document.createElement('button');
        botonCompleto.innerText='ok';
        var botonBorrar=document.createElement('button');
        botonBorrar.innerText='Borrar';
        contenedorLista.appendChild(botonCompleto);
        contenedorLista.appendChild(botonBorrar);
        listaUl.appendChild(contenedorLista);

        botonBorrar.addEventListener('click',borrarLista);
        botonCompleto.addEventListener('click',listaCompleta);
        inputLista.value='';
    }
    const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "01 Jan 2022";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);


        
})