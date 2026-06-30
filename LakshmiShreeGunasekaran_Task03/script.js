function convertTemperature() {

    let temperature = parseFloat(document.getElementById("temperature").value);

    let unit = document.getElementById("unit").value;

    let result = document.getElementById("result");

    if (isNaN(temperature)) {
        result.innerHTML = "Please enter a valid temperature.";
        return;
    }

    if (unit === "celsius") {

    let fahrenheit = (temperature * 9/5) + 32;

    let message = "";

    if (temperature <= 10) {
        message = "❄️ Cold Temperature";
    }
    else if (temperature <= 30) {
        message = "🌤️ Moderate Temperature";
    }
    else {
        message = "🔥 Hot Temperature";
    }

    result.innerHTML = `
        <h2>${fahrenheit.toFixed(2)} °F</h2>
        <p>${message}</p>
    `;

}

else {

    let celsius = (temperature - 32) * 5/9;

    let message = "";

    if (celsius <= 10) {
        message = "❄️ Cold Temperature";
    }
    else if (celsius <= 30) {
        message = "🌤️ Moderate Temperature";
    }
    else {
        message = "🔥 Hot Temperature";
    }

    result.innerHTML = `
        <h2>${celsius.toFixed(2)} °C</h2>
        <p>${message}</p>
    `;

}

}