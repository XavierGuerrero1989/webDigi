let athenaBoton = document.getElementById("athena")
let instAthena = document.getElementById("athenaInst")
let epassInst = document.getElementById ("epassInst")
let safeNet = document.getElementById("safenetInst")
let soSelect = document.getElementById ("preCrypto")
let instMac = document.getElementById("cryptoApple")
let instWin = document.getElementById("cryptoWin")
let faqText = document.getElementById("faqTxt")

athenaBoton.addEventListener("click", function () {

    if (instAthena.style.display == "none") {
        instAthena.style = "display: block;"
        soSelect.style = "display: none;"
        instWin.style = "display: none;"
        instMac.style = "display: none;"
        safeNet.style = "display: none;"
        epassInst.style = "display: none;"
        faqText.style = "display: none;"
        location.href = "#athenaInst"
    } else { 
        instAthena.style = "display: none;"
    }

}) 
