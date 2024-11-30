function calculapesFcn() {
    peso = parseFloat(document.querySelector("#peso").value);
    estatura = parseFloat(document.querySelector("#estatura").value);
    IMC=peso/Math.pow(estatura,2);
    document.querySelector('#IMC').value = IMC.toFixed(2);

    if(IMC<18.5){
        document.querySelector('#codigocolor').value = "BAJO PESO";
        document.querySelector('#codigocolor').style.backgroundColor = 'rgb(137, 207, 240)';
        document.querySelector('#codigocolor').style.color = 'rgb(0, 0, 255)';     
    }
    else if(IMC>=18.5 && IMC<25){
        document.querySelector('#codigocolor').value = "PESO NORMAL";
        document.querySelector('#codigocolor').style.backgroundColor = 'rgb(144, 238, 144)';
        document.querySelector('#codigocolor').style.color = 'rgb(0, 128, 0)';       
    }
    else if(IMC>=25 && IMC<30){
        document.querySelector('#codigocolor').value = "SOBREPESO";
        document.querySelector('#codigocolor').style.backgroundColor = 'rgb(255, 255, 143)';
        document.querySelector('#codigocolor').style.color = 'rgb(255, 191, 0)';       
    }
    else if(IMC>=30 && IMC<35){
        document.querySelector('#codigocolor').value = "OBESIDAD I";
        document.querySelector('#codigocolor').style.backgroundColor = 'rgb(255, 165, 0)';
        document.querySelector('#codigocolor').style.color = 'rgb(160, 82, 45)';       
    }
    else if(IMC>=35 && IMC<40){
        document.querySelector('#codigocolor').value = "OBESIDAD II";
        document.querySelector('#codigocolor').style.backgroundColor = 'rgb(255, 95, 31)';
        document.querySelector('#codigocolor').style.color = 'rgb(255, 223, 186)';       
    }
    else if(IMC>=40){
        document.querySelector('#codigocolor').value = "OBESIDAD III";
        document.querySelector('#codigocolor').style.backgroundColor = 'rgb(255, 0, 0)';
        document.querySelector('#codigocolor').style.color = 'rgb(136, 8, 8)';       
    }
}