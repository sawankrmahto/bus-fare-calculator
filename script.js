function calculateFare() {
    let distance = parseFloat(document.getElementById("distance").value);
    let busType = document.getElementById("busType").value;
    let studentDiscount = document.getElementById("studentDiscount").checked;
    let fare = 0;

    if (isNaN(distance) || distance <= 0) {
        document.getElementById("result").innerText = "Please enter valid distance!";
        return;
    }

    let baseFare = 0;
    let extraRate = 0;

    if (busType === "normal") {
        baseFare = 10;
        extraRate = 2;
    } else if (busType === "ac") {
        baseFare = 20;
        extraRate = 4;
    } else if (busType === "express") {
        baseFare = 15;
        extraRate = 3;
    }

    if (distance <= 5) {
        fare = baseFare;
    } else {
        fare = baseFare + ((distance - 5) * extraRate);
    }

    if (studentDiscount) {
        fare = fare * 0.8;
    }

    document.getElementById("result").innerText = "Total Fare: ₹" + fare.toFixed(2);
}

function resetForm() {
    document.getElementById("distance").value = "";
    document.getElementById("busType").value = "normal";
    document.getElementById("studentDiscount").checked = false;
    document.getElementById("result").innerText = "Total Fare: ₹0";
}