let cryptoBoton = document.getElementById ("crypto")
let soSelect = document.getElementById ("preCrypto")
let safeNet = document.getElementById("safenetInst")
let epassInst = document.getElementById ("epassInst")
let instAthena = document.getElementById("athenaInst")
let faqText = document.getElementById("faqTxt")

cryptoBoton.addEventListener("click", function() {

    if (soSelect.style.display == "none") {
        soSelect.style = "display: block;"
        safeNet.style = "display: none;"
        epassInst.style = "display: none;"
        instAthena.style = "display: none;"
        instWin.style = "display: none;"
        instMac.style = "display: none;"
        safeNet.style = "display: none;"
        epassInst.style = "display: none;"
        faqText.style = "display: none;"
        location.href = "#preCrypto"
    } else { 
        soSelect.style = "display: none;"
        
    }
}) 

let macBoton = document.getElementById("cryptoMacBoton")
let winBoton = document.getElementById("cryptoWinBoton")
let instMac = document.getElementById("cryptoApple")
let instWin = document.getElementById("cryptoWin")



macBoton.addEventListener("click", function() {

    if (instMac.style.display == "none") {
        instMac.style = "display: block;"
        instWin.style = "display: none;"
        safeNet.style = "display: none;"
        epassInst.style = "display: none;"
        instAthena.style = "display: none;"
        faqText.style = "display: none;"
    } else { 
        instMac.style = "display: none;"
    }
})

winBoton.addEventListener("click", function() {

    if (instWin.style.display == "none") {
        instWin.style = "display: block;"
        instMac.style = "display: none;"
        safeNet.style = "display: none;"
        epassInst.style = "display: none;"
        instAthena.style = "display: none;"
        faqText.style = "display: none;"
    } else { 
        instWin.style = "display: none;"
    }
})

