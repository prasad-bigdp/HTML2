console.log(document)
const res = document.getElementsByTagName('h1')[0].innerText
console.log(res)

const r1 = document.getElementsByTagName('p')
console.log(r1[1])

const r2 = document.getElementsByClassName('para')
console.log(r2[0])

const r3 = document.getElementById('pa')
console.log(r3)

const r4 = document.querySelectorAll('div>h1')
console.log(r4)




function change ()
{
   document.getElementById("he").innerHTML =
       '<img src="https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8bmF0dXJhbHxlbnwwfHx8fDE3MTU3NTA4NjJ8MA&ixlib=rb-4.0.3" alt="image" height="100"> '
    alert(document.getElementById("inp").value)
    //XSS
}















