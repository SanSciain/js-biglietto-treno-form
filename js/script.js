const btnGenerate = document.getElementById("btn-generate");
const btnAnnul = document.getElementById("btn-annul");
const perKm = 0.21;
const minorDiscount = 0.2;
const overDiscont = 0.4;

btnGenerate.addEventListener("click",
    function() {
        const userName = document.getElementById("user-name").value;
        
        const userTrip = parseInt(document.getElementById("user-trip").value);

        console.log(userName);
        console.log(userTrip, typeof(userTrip));

    }
)




btnAnnul.addEventListener("click",
    function() {
        document.getElementById("user-name").value = "";
        
        document.getElementById("user-trip").value = "";

    }
)




