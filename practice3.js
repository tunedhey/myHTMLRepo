function displayBGImage() {
    document.body.style.backgroundImage = `url("https://i.pinimg.com/736x/ff/af/03/ffaf03f6c7bfad3c90f02d5207847793.jpg")`;
}

document.getElementById("changeColor").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("calculator").style.background = "skyblue";
});

document.getElementById("calculator").addEventListener("submit", function (event) {
    event.preventDefault(); // stop form from refreshing page

    // Get values from input fields
    let bill = parseFloat(document.getElementById("bill").value);
    let tip = parseInt(document.getElementById("tip").value);
    let people = parseInt(document.getElementById("people").value);

    let total_tip = bill * (tip / 100)
    let bill_per_person = (bill + total_tip) / people

    alert("Each person should pay $" + bill_per_person + "!");

    // Clear form inputs
    document.getElementById("calculator").reset();
});