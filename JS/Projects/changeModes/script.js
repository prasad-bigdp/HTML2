const icon=document.getElementById('icon')
function change ()
{
    document.body.classList.toggle('dark')
    if ((icon.classList.contains('fa-moon')))
    {
       icon.classList.replace('fa-moon','fa-sun')
    }
    else
    {
        icon.classList.replace("fa-sun", "fa-moon")
    }
			document.body.classList.remove("xyz")
}