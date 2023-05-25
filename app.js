var inp = document.getElementById("inp");
function btn(num){
inp.value += num;
}
function resalt(){
    inp.value = eval(inp.value)
}

function clearall(){
inp.value = " ";
}