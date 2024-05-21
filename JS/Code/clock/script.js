const clock = document.getElementById('clock');
function getTime ()
{
    const date = new Date();
    console.log(date.toLocaleTimeString())
    clock.textContent = date.toLocaleTimeString()
}


setInterval(getTime, 1000)

console.log("hello world")
function myLogic (a, b)
{
    console.log(a+b)
}
myLogic("raj", "shekhar")
myLogic("raj", "shekhar")
myLogic("raj", "shekhar")
myLogic("raj", "shekhar")
myLogic("raj", "shekhar")
myLogic("raj", "shekhar")
myLogic("raj", "shekhar")
myLogic("raj", "shekhar")
myLogic("raj", "shekhar")
myLogic("raj","shekhar")
myLogic("raj", "shekhar")
myLogic("raj", "shekhar")
myLogic("raj", "shekhar")