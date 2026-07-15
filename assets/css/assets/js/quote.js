document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll(".add-to-quote");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            const product = {
                name: this.dataset.name,
                brand: this.dataset.brand,
                category: this.dataset.category,
                qty: 1
            };

            let quote = JSON.parse(localStorage.getItem("quote")) || [];

            const existing = quote.find(item => item.name === product.name);

            if (existing) {
                existing.qty++;
            } else {
                quote.push(product);
            }

            localStorage.setItem("quote", JSON.stringify(quote));

            alert(product.name + " added to Quote!");

        });

    });

}); 
