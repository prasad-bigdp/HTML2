// let x=0,y=0,z=0
// function fun ()
// {
//     x++; y++; z++;
//     document.body.style.backgroundColor=`rgb(${x},${y},${z})`
// }
/* hexa code by random*/
function fun ()
 {
    const randomColor = Math.round(Math.random() * 10000000).toString(16)
 document.body.style.backgroundColor="#"+randomColor
 }
//array of colors