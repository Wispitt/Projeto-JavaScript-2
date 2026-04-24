


const botao = document.querySelector("#botao-converter");
botao.onclick = () => {
    const currecyMoeda1 = document.querySelector("#moeda-1").value;
    const currecyMoeda2 = document.querySelector("#moeda-2").value;
    const input = document.querySelector("#valor").value;

    const paragraphCurrency1 = document.querySelector(".paragraph-valor-1");
    const paragraphCurrency2 = document.querySelector(".paragraph-valor-2");

    const imgResultado1 = document.querySelector(".img-valor-1");
    const imgResultado2 = document.querySelector(".img-valor-2");

    const resultado1 = document.querySelector(".resultado-valor-1");
    const resultado2 = document.querySelector(".resultado-valor-2");

    const valorEuro = 5.88;

    const valorDolar = 5.2;

    if (currecyMoeda1 === "real" && currecyMoeda2 === "dolar") {
        resultado1.textContent = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(input);

        resultado2.textContent = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(input / valorDolar)
    }

    if (currecyMoeda2 === "real" && currecyMoeda1 === "dolar") {
        resultado1.textContent = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(input);

        resultado2.textContent = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(input / valorDolar);
        resultado1.textContent = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(input / valorDolar);

        resultado2.textContent = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(input);
        paragraphCurrency1.textContent = "Dólar Americano";
        paragraphCurrency2.textContent = "Real";

        imgResultado1.src = "./assets/estados-unidos.png";
        imgResultado2.src = "./assets/brasil 2 (1).png";
    }




    if (currecyMoeda2 === "euro" && currecyMoeda1 === "real") {
        resultado1.textContent = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(input);

        resultado2.textContent = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "EUR"
        }).format(input / valorEuro);

        imgResultado1.src = "./assets/brasil 2 (1).png";
        imgResultado2.src = "./assets/Euro.png";

        paragraphCurrency1.textContent = "Real";
        paragraphCurrency2.textContent = "Euro";


    }

    if (currecyMoeda1 === "euro" && currecyMoeda2 === "real") {
        resultado1.textContent = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(input);

        resultado2.textContent = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "EUR"
        }).format(input / valorEuro);
        resultado1.textContent = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "EUR"
        }).format(input / valorEuro);

        resultado2.textContent = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(input);

        imgResultado1.src = "./assets/Euro.png";
        imgResultado2.src = "./assets/brasil 2 (1).png";

        paragraphCurrency1.textContent = "Euro";
        paragraphCurrency2.textContent = "Real";
    }



} 
