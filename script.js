const billingToggle = document.getElementById("billingToggle");

const amounts = document.querySelectorAll(".amount");

const periods = document.querySelectorAll(".period");


billingToggle.addEventListener("change", function() {

    if (billingToggle.checked) {

        amounts.forEach(function(amount) {

            amount.textContent = amount.dataset.yearly;

        });

        periods.forEach(function(period) {

            period.textContent = "/year";

        });

    } else {

        amounts.forEach(function(amount) {

            amount.textContent = amount.dataset.monthly;

        });

        periods.forEach(function(period) {

            period.textContent = "/month";

        });

    }

});
