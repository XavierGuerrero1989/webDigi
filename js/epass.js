let epassBoton = document.getElementById ("epass")
let epassInst = document.getElementById ("epassInst")
let safeNet = document.getElementById("safenetInst")
let soSelect = document.getElementById ("preCrypto")
let instMac = document.getElementById("cryptoApple")
let instWin = document.getElementById("cryptoWin")
let instAthena = document.getElementById("athenaInst")
let faqText = document.getElementById("faqTxt")

epassBoton.addEventListener("click", function () {

    if (epassInst.style.display == "none") {
        epassInst.style = "display: block;"
        soSelect.style = "display: none;"
        instWin.style = "display: none;"
        instMac.style = "display: none;"
        safeNet.style = "display: none;"
        instAthena.style = "display: none;"
        faqText.style = "display: none;"
        location.href = "#epassInst"
    } else { 
        epassInst.style = "display: none;"
    }

}) 
