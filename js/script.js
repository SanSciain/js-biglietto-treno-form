const btnGenerate = document.getElementById("btn-generate");
const btnAnnul = document.getElementById("btn-annul");
const perKm = 0.21;
const minorDiscount = 0.2;
const overDiscont = 0.4;

btnGenerate.addEventListener("click",
    function() {
        const userName = document.getElementById("user-name").value;
        
        const userTrip = parseInt(document.getElementById("user-trip").value);

        const userAge = document.getElementById("user-age").value;

        console.log(userName);
        console.log(userTrip, typeof(userTrip));

        let priceTicket = userTrip * perKm;

        let offer;

        if (userAge === "minor") {
            priceTicket = (priceTicket - priceTicket * minorDiscount).toFixed(2);
            offer = "Minorenne";
        } else if (userAge === "adult") {
            priceTicket = (priceTicket).toFixed(2);
            offer = "Standard"
        } else if (userAge === "over") {
            priceTicket = (priceTicket - priceTicket * overDiscont).toFixed(2);
            offer = "Over 65";
        }

        document.querySelector(".passenger p").innerHTML = userName;

        document.querySelector(".price p").innerHTML = priceTicket;

        document.querySelector(".wagon p").innerHTML = Math.floor(Math.random() * (9 - 1 + 1) ) + 1;;

        document.querySelector(".codecp p").innerHTML = Math.floor(Math.random() * (999999 - 900000 + 1) ) + 900000;;

        document.querySelector(".offer p").innerHTML = offer;

        document.getElementById("hidden").classList.remove("d-none")

    }
)


btnAnnul.addEventListener("click",
    function() {
        document.getElementById("user-name").value = "";
        
        document.getElementById("user-trip").value = "";

        document.getElementById("user-age").value = "";

        document.getElementById("hidden").classList.add("d-none")
    }
)






