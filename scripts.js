


const botao = document.querySelector("#botao-converter");
const currecyMoeda2 = document.querySelector("#moeda-2");
const paragraphCurrency2 = document.querySelector(".paragraph-valor-2");
const paragraphErro = document.querySelector(".paragraph-2")

function currencyTodos() {
    const currecyMoeda1 = document.querySelector("#moeda-1");
    const input = document.querySelector("#valor").value;
    const paragraphCurrency1 = document.querySelector(".paragraph-valor-1");
    const imgResultado1 = document.querySelector(".img-valor-1");
    const imgResultado2 = document.querySelector(".img-valor-2");
    const resultado1 = document.querySelector(".resultado-valor-1");
    const resultado2 = document.querySelector(".resultado-valor-2");

    const valorDolar = 5.2;
    const valorEuro = 5.88;
    const valorBitcoin = 386.07056;
    const valorLibra = 6.72;

    if (currecyMoeda1.value != "real" && currecyMoeda2.value != "real") {
        paragraphErro.textContent = "É necessário que algum deles seja BRL";
        currecyMoeda2.style.marginBottom = "2px"
        
        return;
    }
    else {
        paragraphErro.textContent = "";
        currecyMoeda2.style.marginBottom = "20px"
    }


    if (currecyMoeda1.value === "real") {
        paragraphCurrency1.textContent = "Real";
        imgResultado1.src = "./assets/brasil 2 (1).png";
    }
    if (currecyMoeda2.value === "real") {
        paragraphCurrency2.textContent = "Real";
        imgResultado2.src = "./assets/brasil 2 (1).png";
    }


    if (currecyMoeda1.value === "dolar") {
        paragraphCurrency1.textContent = "Dólar Americano";
        imgResultado1.src = "./assets/estados-unidos.png";
    }
    if (currecyMoeda2.value === "dolar") {
        paragraphCurrency2.textContent = "Dólar Americano";
        imgResultado2.src = "./assets/estados-unidos.png";
    }


    if (currecyMoeda1.value === "coin") {
        paragraphCurrency1.textContent = "Bitcoin";
        imgResultado1.src = "./assets/bitcoin 1.png";
    }
    if (currecyMoeda2.value === "coin") {
        paragraphCurrency2.textContent = "Bitcoin";
        imgResultado2.src = "./assets/bitcoin 1.png";
    }


    if (currecyMoeda1.value === "libra") {
        paragraphCurrency1.textContent = "Libra Esterlina";
        imgResultado1.src = "./assets/libra 1.png";
    }
    if (currecyMoeda2.value === "libra") {
        paragraphCurrency2.textContent = "Libra Esterlina";
        imgResultado2.src = "./assets/libra 1.png";
    }


    if (currecyMoeda1.value === "euro") {
        paragraphCurrency1.textContent = "Euro";
        imgResultado1.src = "./assets/Euro.png";
    }
    if (currecyMoeda2.value === "euro") {
        paragraphCurrency2.textContent = "Euro";
        imgResultado2.src = "./assets/Euro.png";
    }
    
}

const currecyMoeda1 = document.querySelector("#moeda-1");
function currencyConverter() {
    const currecyMoeda1 = document.querySelector("#moeda-1");
    const input = document.querySelector("#valor").value;
    const paragraphCurrency1 = document.querySelector(".paragraph-valor-1");
    const imgResultado1 = document.querySelector(".img-valor-1");
    const imgResultado2 = document.querySelector(".img-valor-2");
    const resultado1 = document.querySelector(".resultado-valor-1");
    const resultado2 = document.querySelector(".resultado-valor-2");

    const valorDolar = 5.2;
    const valorEuro = 5.88;
    const valorBitcoin = 386.07056;
    const valorLibra = 6.72;

    if (currecyMoeda1.value != "real" && currecyMoeda2.value != "real") {
        paragraphErro.textContent = "É necessário que algum deles seja BRL";
        currecyMoeda2.style.marginBottom = "2px"
        return;
    }
    else {
        paragraphErro.textContent = "";
        currecyMoeda2.style.marginBottom = "20px"
    }

    if (currecyMoeda1.value === "real") {
        paragraphCurrency1.textContent = "Real";
        imgResultado1.src = "./assets/brasil 2 (1).png";
    }
    if (currecyMoeda2.value === "real") {
        paragraphCurrency2.textContent = "Real";
        imgResultado2.src = "./assets/brasil 2 (1).png";
    }


    if (currecyMoeda1.value === "dolar") {
        paragraphCurrency1.textContent = "Dólar Americano";
        imgResultado1.src = "./assets/estados-unidos.png";
    }
    if (currecyMoeda2.value === "dolar") {
        paragraphCurrency2.textContent = "Dólar Americano";
        imgResultado2.src = "./assets/estados-unidos.png";
    }


    if (currecyMoeda1.value === "coin") {
        paragraphCurrency1.textContent = "Bitcoin";
        imgResultado1.src = "./assets/bitcoin 1.png";
    }
    if (currecyMoeda2.value === "coin") {
        paragraphCurrency2.textContent = "Bitcoin";
        imgResultado2.src = "./assets/bitcoin 1.png";
    }


    if (currecyMoeda1.value === "libra") {
        paragraphCurrency1.textContent = "Libra Esterlina";
        imgResultado1.src = "./assets/libra 1.png";
    }
    if (currecyMoeda2.value === "libra") {
        paragraphCurrency2.textContent = "Libra Esterlina";
        imgResultado2.src = "./assets/libra 1.png";
    }


    if (currecyMoeda1.value === "euro") {
        paragraphCurrency1.textContent = "Euro";
        imgResultado1.src = "./assets/Euro.png";
    }
    if (currecyMoeda2.value === "euro") {
        paragraphCurrency2.textContent = "Euro";
        imgResultado2.src = "./assets/Euro.png";
    }
}

function conversorDeCurrency() {
    const currecyMoeda1 = document.querySelector("#moeda-1");
    const input = document.querySelector("#valor").value;
    const paragraphCurrency1 = document.querySelector(".paragraph-valor-1");

    const imgResultado1 = document.querySelector(".img-valor-1");
    const imgResultado2 = document.querySelector(".img-valor-2");

    const resultado1 = document.querySelector(".resultado-valor-1");
    const resultado2 = document.querySelector(".resultado-valor-2");

    const valorEuro = 5.88;
    const valorDolar = 5.2;
    const valorBitcoin = 386.07056;
    const valorLibra = 6.72;

    if (currecyMoeda1.value != "real" && currecyMoeda2.value != "real") {
        paragraphErro.textContent = "É necessário que algum deles seja BRL";
        currecyMoeda2.style.marginBottom = "2px"
        return;
    }
    else {
        paragraphErro.textContent = "";
        currecyMoeda2.style.marginBottom = "20px"
    }

    if (currecyMoeda1.value === "dolar") {
        paragraphCurrency1.textContent = "Dólar Americano";
        imgResultado1.src = "./assets/estados-unidos.png";
        resultado1.textContent = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(input / valorDolar);
    }
    if (currecyMoeda1.value === "real") {
        paragraphCurrency1.textContent = "Real";
        imgResultado1.src = "./assets/brasil 2 (1).png";
        resultado1.textContent = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(input);
    }
    if (currecyMoeda1.value === "euro") {
        paragraphCurrency1.textContent = "Euro";
        imgResultado1.src = "./assets/Euro.png";
        resultado1.textContent = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "EUR"
        }).format(input / valorEuro);
    }
    if (currecyMoeda1.value === "coin") {
        paragraphCurrency1.textContent = "Bitcoin";
        imgResultado1.src = "./assets/bitcoin 1.png";
        resultado1.textContent = new Intl.NumberFormat("pt-SV", {
            style: "currency",
            currency: "BTC"
        }).format(input / valorBitcoin);
    }
    if (currecyMoeda1.value === "libra") {
        paragraphCurrency1.textContent = "Libra Esterlina";
        imgResultado1.src = "./assets/libra 1.png";
        resultado1.textContent = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(input / valorLibra);
    }

    if (currecyMoeda2.value === "dolar") {
        paragraphCurrency2.textContent = "Dólar Americano";
        imgResultado2.src = "./assets/estados-unidos.png";
        resultado2.textContent = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(input / valorDolar);
    }
    if (currecyMoeda2.value === "real") {
        paragraphCurrency2.textContent = "Real";
        imgResultado2.src = "./assets/brasil 2 (1).png";
        resultado2.textContent = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(input);
    }
    if (currecyMoeda2.value === "euro") {
        paragraphCurrency2.textContent = "Euro";
        imgResultado2.src = "./assets/Euro.png";
        resultado2.textContent = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "EUR"
        }).format(input / valorEuro);
    }
    if (currecyMoeda2.value === "coin") {
        paragraphCurrency2.textContent = "Bitcoin";
        imgResultado2.src = "./assets/bitcoin 1.png";
        resultado2.textContent = new Intl.NumberFormat("pt-SV", {
            style: "currency",
            currency: "BTC"
        }).format(input / valorBitcoin);
    }
    if (currecyMoeda2.value === "libra") {
        paragraphCurrency2.textContent = "Libra Esterlina";
        imgResultado2.src = "./assets/libra 1.png";
        resultado2.textContent = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(input / valorLibra);
    }
}

botao.addEventListener("click", conversorDeCurrency)
currecyMoeda2.addEventListener("change", currencyTodos)
currecyMoeda1.addEventListener("change", currencyConverter)
