document.querySelectorAll(".add-to-quote").forEach(button => {

    button.addEventListener("click", function(){

        let product = {
            name: this.dataset.name,
            brand: this.dataset.brand,
            category: this.dataset.category,
            qty: 1
        };

        let quote = JSON.parse(localStorage.getItem("quote")) || [];

        let existing = quote.find(item => item.name === product.name);

        if(existing){
            existing.qty++;
        }else{
            quote.push(product);
        }

        localStorage.setItem("quote", JSON.stringify(quote));

        alert(product.name + " added to Quote.");
    });

}); 
