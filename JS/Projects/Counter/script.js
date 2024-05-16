let c = 0;
let cvalue = document.getElementById('count')
console.log(cvalue.textContent);
function incr ()
{
    c++;
    cvalue.textContent = c;
}
function decr() {
    c--;
	cvalue.textContent = c
}
function reset ()
{
    c=0
	cvalue.textContent = c
}
/*<div id="counter">
        <p id="count">0</p>
        <div id="buttons">
            <button onclick="incr()">increment</button>
        </div>
    </div>
*/