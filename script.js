function showConsole(event) {
    event.preventDefault();

    function display(){
        alert("data submitted");
    }
    document.getElementById("btn").addEventListener("click", display);
}