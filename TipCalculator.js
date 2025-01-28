// Function to validate the service amount
function isValidAmount(amount) {
    // Check if the amount is within the valid range (5 to 500)
    return amount >= 5 && amount <= 500;
}

// Function to get the tip percentage based on service quality
function getTipPercentage(quality) {
    // Return the corresponding tip percentage
    switch (quality) {
        case "great":
            return 0.20; // 20% for great service
        case "ok":
            return 0.15; // 15% for OK service
        case "poor":
            return 0.10; // 10% for poor service
        default:
            return null; // Invalid quality
    }
}

// Main function to calculate the tip
function calculateTip() {
    // Get the user inputs
    const amount = parseFloat(document.getElementById("amount").value);
    const quality = document.getElementById("quality").value;

    // Validate the service amount
    if (!isValidAmount(amount)) {
        // Display error message if the amount is invalid
        document.getElementById("output").innerHTML = "<p>Invalid amount! Please enter a value between $5 and $500.</p>";
        return;
    }

    // Get the tip percentage based on quality
    const tipPercentage = getTipPercentage(quality);

    // Validate the service quality selection
    if (tipPercentage === null) {
        // Display error message if the quality is invalid
        document.getElementById("output").innerHTML = "<p>Invalid service quality selection.</p>";
        return;
    }

    // Calculate the tip and total amount
    const tip = amount * tipPercentage; // Tip amount
    const total = amount + tip; // Total amount (service + tip)

    // Display the results in the output section
    document.getElementById("output").innerHTML = `
        <p>Service Amount: $${amount.toFixed(2)}</p>
        <p>Service Quality: ${quality.charAt(0).toUpperCase() + quality.slice(1)}</p>
        <p>Recommended Tip: $${tip.toFixed(2)}</p>
        <p>Total Amount: $${total.toFixed(2)}</p>
    `;
}
