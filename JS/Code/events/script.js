function fun (e)
{
    console.log(e.target)
    alert("item clicked")
    e.stopPropagation()
}
document.getElementById('btn').addEventListener('click', fun)
/* design a simple input box which takes a string and returns reversed string */
/*event propagation:capturing and bubbling,capturing*/
document.getElementById("c").addEventListener("click", function ()
{
    alert("child called")
},{capture:true})
document.getElementById('p').addEventListener("click", function () {
 	alert("parent called")
})
document.getElementById("gp").addEventListener("click", function () {
	alert("grandparent called")
}, { capture: true })
document.getElementById('myDiv').addEventListener('click', myLogic)
function myLogic (e)
{
    alert(e.target.textContent+" is clicked")
}
document.getElementById("mydivouter").addEventListener('click', function ()
{
    document.getElementById("myDiv").classList.toggle('close')
})