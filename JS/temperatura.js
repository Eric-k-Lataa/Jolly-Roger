function calculartemfcn() {
    /*Celius-Fahrenheit*/
    celsiusf = parseFloat(document.querySelector("#celsius-fahrenheit").value);
    fahrenheit = parseFloat(document.querySelector("#fahrenheit").value);

    /* Calculos */
    if(!isNaN(celsiusf) && isNaN(fahrenheit)){
        celAfar=(celsiusf*1.8)+32
        document.querySelector("#fahrenheit").value = celAfar.toFixed(2); 
    }
    else if(!isNaN(fahrenheit) && isNaN(celsiusf)){
        farAcel=(fahrenheit-32)/1.8
        document.querySelector("#celsius-fahrenheit").value = farAcel.toFixed(2);
    }

    /*Celius-Kelvin*/
    celsiusk = parseFloat(document.querySelector("#celsius-kelvin").value);
    kelvin = parseFloat(document.querySelector("#kelvin").value);

    /* Calculos */
    if(!isNaN(celsiusk) && isNaN(kelvin)){
        celAkel=celsiusk+273.15
        document.querySelector("#kelvin").value = celAkel.toFixed(2); 
    }
    else if(!isNaN(kelvin) && isNaN(celsiusk)){
        kelAcel=kelvin-273.15
        document.querySelector("#celsius-kelvin").value = kelAcel.toFixed(2); 
    }

    /*Celius-Rankine*/
    celsiusr = parseFloat(document.querySelector("#celsius-rankine").value);
    rankine = parseFloat(document.querySelector("#rankine").value);

    /* Calculos */
    if(!isNaN(celsiusr) && isNaN(rankine)){
        celAran=(1.8*celsiusr)+491.67
        document.querySelector("#rankine").value = celAran.toFixed(2); 
    }
    else if(!isNaN(rankine) && isNaN(celsiusr)){
        ranAcel=(rankine-491.67)/1.8
        document.querySelector("#celsius-rankine").value = ranAcel.toFixed(2); 
    }

    /*Fahrenheit-Kelvin*/
    fahrenheitk = parseFloat(document.querySelector("#fahrenheit-kelvin").value);
    kelvinf = parseFloat(document.querySelector("#kelvin-fahrenheit").value);

    /* Calculos */
    if(!isNaN(fahrenheitk) && isNaN(kelvinf)){
        farAkel=((fahrenheitk-32)/1.8)+273.15
        document.querySelector("#kelvin-fahrenheit").value = farAkel.toFixed(2); 
    }
    else if(!isNaN(kelvinf) && isNaN(fahrenheitk)){
        kelAfar=1.8*(kelvinf-273.15)+32
        document.querySelector("#fahrenheit-kelvin").value = kelAfar.toFixed(2); 
    }

    /*Fahrenheit-Rankine*/
    fahrenheitr = parseFloat(document.querySelector("#fahrenheit-rankine").value);
    rankinef = parseFloat(document.querySelector("#rankine-fahrenheit").value);

    /* Calculos */
    if(!isNaN(fahrenheitr) && isNaN(rankinef)){
        farAran=fahrenheitr+459.67
        document.querySelector("#rankine-fahrenheit").value = farAran.toFixed(2); 
    }
    else if(!isNaN(rankinef) && isNaN(fahrenheitr)){
        ranAfar=rankinef-459.67
        document.querySelector("#fahrenheit-rankine").value = ranAfar.toFixed(2); 
    }

    /*Kelvin-Rankine*/
    kelvinr = parseFloat(document.querySelector("#kelvin-rankine").value);
    rankinek = parseFloat(document.querySelector("#rankine-kelvin").value);

    /* Calculos */
    if(!isNaN(kelvinr) && isNaN(rankinek)){
        kelAran=kelvinr*1.8
        document.querySelector("#rankine-kelvin").value = kelAran.toFixed(2); 
    }
    else if(!isNaN(rankinek) && isNaN(kelvinr)){
        ranAkel=rankinek/1.8
        document.querySelector("#kelvin-rankine").value = ranAkel.toFixed(2); 
    }
}