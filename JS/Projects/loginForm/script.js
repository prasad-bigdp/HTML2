const PasswordInp = document.getElementById('password')
const icon=document.getElementById('icon')
function change ()
{
    if (PasswordInp.type == "password")
    {
        PasswordInp.type = "text"
        icon.innerHTML='<i class="fa-solid fa-eye-slash"></i>'
    }
    else
    {
        PasswordInp.type="password"
    }
}