window.addEventListener('load',function(){
    //variables
    //colores
    var botonSeleccionarColor=document.getElementById('seleccionar');
    var inputSeleccionarColor=document.getElementById('colorHex');
    //lista
    var inputLista=document.querySelector(".listaInput");
    var botonLista=document.getElementsByClassName('listaBoton')[0];
    var listaUl=document.querySelector('.listaUl');
    //añonuevo
    var diasId = document.getElementById("dias");
    var horasId = document.getElementById("horas");
    var minutosId = document.getElementById("minutos");
    var segundosId = document.getElementById("segundos");
    var anoNuevo = "01 Jan 2022";
    //nombre
    var nombreImput = document.getElementById("inputNombre");
    var nombreBoton = document.getElementById("btnNombre");
    var formasDiv = document.getElementById("formasDiv");


    //addEventListeners
    inputSeleccionarColor.addEventListener('keyup',comprobarColor);
    botonSeleccionarColor.addEventListener('click',cambiarColor,true);
    botonLista.addEventListener('click',anadirLista);
    nombreBoton.addEventListener('click',formasNombre);


    //funciones
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
    //--
    function borrarLista(){
        this.parentElement.remove();
    }
    function listaCompleta(){
        this.parentElement.className='completo';
    }

    function anadirLista(e){
        e.preventDefault();//el boton está dentro de un form y con preventDafualt() evitamos que se ejecute el form 
        if(inputLista.value!=""){
            var contenedorLista = document.createElement('div');
            var listaLi = document.createElement('li');
            var botonCompleto=document.createElement('button');
            var botonBorrar=document.createElement('button');
            contenedorLista.className="divLista";
            listaLi.innerText=inputLista.value;
            contenedorLista.appendChild(listaLi);
            botonCompleto.innerText='ok';
            botonBorrar.innerText='Borrar';
            contenedorLista.appendChild(botonCompleto);
            contenedorLista.appendChild(botonBorrar);
            listaUl.appendChild(contenedorLista);
            botonBorrar.addEventListener('click',borrarLista);
            botonCompleto.addEventListener('click',listaCompleta);
            inputLista.value='';
        }
    }
    //--
    function cuentaAtras() {
        var dataAnoNuevo = new Date(anoNuevo);
        var diahoy = new Date();
        var totalsegundos = (dataAnoNuevo - diahoy) / 1000;
        var days = Math.floor(totalsegundos / 3600 / 24);
        var hours = Math.floor(totalsegundos / 3600) % 24;
        var mins = Math.floor(totalsegundos / 60) % 60;
        var seconds = Math.floor(totalsegundos) % 60;
        diasId.innerHTML = days;
        horasId.innerHTML = hours;
        minutosId.innerHTML =mins;
        segundosId.innerHTML = seconds;
    }
    cuentaAtras();
    setInterval(cuentaAtras, 1000);//cada segundo se ejecuta la funcion cuenta atrás
    //--
    function formasNombre(){
        var nombre=nombreImput.value;
        while (formasDiv.hasChildNodes()) {  
            formasDiv.removeChild(formasDiv.firstChild);
        }
        if(nombre==''){
            alert("El campo está vacio");
        }else{
            let nombreReves=nombre.split("").reverse().join("");
            let letrasSeparadas=nombre.split("").join("-");
            var parrafo=document.createElement('p');
            parrafo.innerText="Nombre al revés: "+nombreReves;
            formasDiv.appendChild(parrafo);
            var parrafo=document.createElement('p');
            parrafo.innerText="Letras separadas: "+letrasSeparadas;
            formasDiv.appendChild(parrafo);
        }
        nombreImput.value='';

    }

    
    


        
})