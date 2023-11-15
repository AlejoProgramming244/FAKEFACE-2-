user_name = localStorage.getItem("userfake")

document.getElementById("user_name").innerHTML = "¡Hola " + user_name +", " + "ahora eres uno de nosotros!";

function exit()
{
    window.location="index.html";
}