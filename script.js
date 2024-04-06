/**
 * @description Function is used to generate the random rgb
 */
function changeColor() {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const bgColor ="RGB ( "+ x + ", " + y + ", " + z + " )";
    document.body.style.background = bgColor.toLowerCase().replace(" ","");
    document.getElementById("rgb-color").innerHTML = bgColor.toString();
}

function copyColor() {
    const colorValue = document.getElementById("rgb-color").innerHTML;
    navigator.clipboard.writeText(colorValue)
}