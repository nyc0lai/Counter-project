let count = Math.floor(Math.random()*999);
document.getElementById("label").innerHTML = count;
document.getElementById("minus").onclick = decrimentLabel;
document.getElementById("plus").onclick = incrimentLabel;

function decrimentLabel() {
    count--;
    document.getElementById("label").innerHTML = count;
}

function incrimentLabel() {
    count++;
    document.getElementById("label").innerHTML = count;
}