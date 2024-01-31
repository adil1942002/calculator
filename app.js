let inp = document.getElementById("inp");
let arr = [];
function btn(num){
arr.push(num)
inp.value += num;
}
function resalt(){
    inp.value = eval(inp.value)
}

function clearall(){
inp.value = " ";
}
function del(){
    inp.value = " ";
    arr.pop();
    arr.forEach((x)=>{
        inp.value += x;

    })
    }
