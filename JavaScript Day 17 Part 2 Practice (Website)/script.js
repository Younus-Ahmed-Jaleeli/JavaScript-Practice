async function main() {

    const response = await fetch("https://dummyjson.com/carts");
    const data = await response.json();


    // console.log(data);
    // console.log(data.carts);
    // console.log(data.carts[0]);
    // console.log(data.carts[0].products);
    // console.log(data.carts[0].products[0]);
    // console.log(data.carts[0].products[0].title);
    // console.log(data.carts[0].products[0].price);
    // console.log(data.carts[0].products[0].quantity);


    data.carts.forEach((c) => {

        const productArray = c.products;
        console.log(productArray);
        // console.log(productArray[2]);

        productArray.forEach((p) => {

            const idElem = document.createElement("span");
            idElem.innerText = "ID: " + p?.id;
            // console.log(idElem);

            const imgElem = document.createElement("img");
            imgElem.setAttribute("src", p?.thumbnail);
            // console.log(imgElem);

            const titleElem = document.createElement("h3");
            titleElem.innerText = p?.title;
            // console.log(titleElem);

            const priceElem = document.createElement("span");
            priceElem.innerText = "Price:" + p?.price;
            // console.log(priceElem);

            const totalElem = document.createElement("span");
            totalElem.innerText = "Total:" + p?.total;
            // console.log(totalElem);

            const DiscElem = document.createElement("span");
            DiscElem.innerText = "Discount Percentage: " + p?.discountPercentage;
            // console.log(DiscElem);

            const DiscTotalElem = document.createElement("span");
            DiscTotalElem.innerText = "Discounted Total: " + p?.discountedTotal;
            // console.log(DiscTotal);

            const QuanElem = document.createElement("span");
            QuanElem.innerText = " Quantity: " + p?.quantity;
            // console.log(QuanElem);



            const containerDiv = document.createElement("div");

            containerDiv.classList.add("Products-div")


            containerDiv.insertAdjacentElement("beforeend", idElem);
            containerDiv.insertAdjacentElement("beforeend", imgElem);
            containerDiv.insertAdjacentElement("beforeend", titleElem);
            containerDiv.insertAdjacentElement("beforeend", priceElem);
            containerDiv.insertAdjacentElement("beforeend", totalElem);
            containerDiv.insertAdjacentElement("beforeend", DiscElem);
            containerDiv.insertAdjacentElement("beforeend", DiscTotalElem);
            containerDiv.insertAdjacentElement("beforeend", QuanElem);


            document.querySelector("body").insertAdjacentElement("beforeend", containerDiv)

            
        });

    });

}

main();