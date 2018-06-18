var secciones=[];
var cargado=false;
document.addEventListener("DOMContentLoaded",cargarArray,false);
document.querySelector('#btn-prese').addEventListener("click",function() {OcultarSecciones(0);});
document.querySelector('#btn-forma').addEventListener("click",function() {OcultarSecciones(1);});
document.querySelector('#btn-expe').addEventListener("click",function() {OcultarSecciones(2);});
document.querySelector('#btn-port').addEventListener("click",function() {OcultarSecciones(3);});

/* Funciones */

function cargarArray()
{
    var item;
    if(cargado==false)
    {
        for (var i = 0; i <=3; i++) {
            item=document.querySelector("#section-"+i);
            console.log(item);
            secciones.push(item);
        }
         OcultarSecciones(0);
    }
    cargado=true;
}

function OcultarSecciones(elemento) 
{
    for (var i = 0; i<=3; i++) {
        if (elemento!=i)
        {
            secciones[i].style.display = "none";
        }
        else
        {
            secciones[elemento].style.display = "block";            
        }
    }
}