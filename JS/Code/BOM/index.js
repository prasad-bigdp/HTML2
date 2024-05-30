//BOM- browser object model
console.log(window.innerHeight, window.outerHeight, innerWidth, outerWidth)
window.navigator.geolocation.getCurrentPosition((pos)=>console.log(pos))