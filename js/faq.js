let botonFaq = document.getElementById("faq")
let faqText = document.getElementById("faqTxt")
let instAthena = document.getElementById("athenaInst")
let epassInst = document.getElementById ("epassInst")
let safeNet = document.getElementById("safenetInst")
let soSelect = document.getElementById ("preCrypto")
let instMac = document.getElementById("cryptoApple")
let instWin = document.getElementById("cryptoWin")


botonFaq.addEventListener("click", function () {

    if (faqText.style.display == "none") {
        faqText.style = "display: block;"
        instWin.style = "display: none;"
        instMac.style = "display: none;"
        soSelect.style = "display: none;"
        epassInst.style = "display: none;"
        instAthena.style = "display: none;"
        safeNet.style = "display: none;"
    } else { 
        faqText.style = "display: none;"
    }

}) 