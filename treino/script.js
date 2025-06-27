function Verificar() {
     var fsex = document.getElementsByName("ama")
    var res = document.getElementById("res")
if (fsex[0].checked) {
    res.innerHTML = "ainda bem!"
} else {
    window.alert ("AMA SIM, OXE")
}
}
