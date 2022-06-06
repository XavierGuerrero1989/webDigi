let botonSafeNet = document.getElementById("safeNet")
let safeNet = document.getElementById("safenetInst")
let soSelect = document.getElementById ("preCrypto")
let instMac = document.getElementById("cryptoApple")
let instWin = document.getElementById("cryptoWin")
let epassInst = document.getElementById ("epassInst")
let instAthena = document.getElementById("athenaInst")
let faqText = document.getElementById("faqTxt")

botonSafeNet.addEventListener("click", function () {

    if (safeNet.style.display == "none") {
        safeNet.style = "display: block;"
        instWin.style = "display: none;"
        instMac.style = "display: none;"
        soSelect.style = "display: none;"
        epassInst.style = "display: none;"
        instAthena.style = "display: none;"
        faqText.style = "display: none;"
        location.href = "#safenetInst"
    } else { 
        safeNet.style = "display: none;"
    }

}) 

