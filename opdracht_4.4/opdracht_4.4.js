//a)
function onsNamen(param) {
    if (param == "Carmen" || param == "Tunahan"){
        return "yes"
} else return "Not in the group" }

console.log(onsNamen("Tunahan"))


//b)
function onsNamenAanroep(param) {
    document.getElementById("show_message").innerText = onsNamen(param)
}
onsNamenAanroep("Tunahan")

//c)
OnsNamenArrow = param => document.getElementById("show_message").innerText = onsNamen(param)
OnsNamenArrow("Elias")

