import {useState} from "react"
function Random(){
 var[count,Setcount]=useState(0)
 function fire(){
    Setcount(Math.floor(Math.random() * 100));
 }
    

return(<div class="var">
    <h3> Random Number Generator</h3>
    <h4>Generate random number is {count}</h4>
    <button onClick={fire}>random</button>
</div>)
}
export default Random