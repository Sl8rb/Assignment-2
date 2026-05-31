function recommendRestaurant() {

    var diet = document.getElementById("diet").value;
    var budget = document.getElementById("budget").value;
    var purpose = document.getElementById("purpose").value;

    var restaurant = "";

    if (diet == "None" && budget == "$20" && purpose == "Cheap Food") {
        restaurant = "KFC";
    }
    else if (diet == "None" && budget == "$20" && purpose == "Cheap Food") {
        restaurant = "Chirnside Park Country Club";
    }
    else if (diet == "Vegan" && budget == "$20" && purpose == "Cheap Food"){
        restaurant = "Chirnside Park Country Club";
    }

	else if (diet == "Vegan" && budget == "$40" && purpose == "Family Dinner") {
        restaurant = "Chirnside Park Country Club";
    }

	else if (diet == "Vegan" && budget == "$40" && purpose == "Meal With Friends") {
        restaurant = "1PlusPiece";
    }

	else if (diet == "Vegetarian" && budget == "$40" && purpose == "Meal With Friends") {
        restaurant = "1PlusPiece";
    }

    else if (diet == "None" && budget == "$60" && purpose == "Meal with Friends") {
        restaurant = "Third Wave Cafe";
    }

	else if (diet == "None" && budget == "$60" && purpose == "Family Dinner") {
        restaurant = "Third Wave Cafe";
    }

    else if (diet == "None" && budget == "$40" && purpose == "Meal with Friends") {
        restaurant = "Okami";
    }

	else if (diet == "None" && budget == "$40" && purpose == "Family Dinner") {
        restaurant = "Chirnside Park Country Club";
    }

	else if (diet == "Gluten Free" && budget == "$60" && purpose == "Family Dinner") {
        restaurant = "TenBBQ Hotpot";
    }

	else if (diet == "Gluten Free" && budget == "$40" && purpose == "Meal With Friends") {
        restaurant = "Okami";
    }
	
    else {
        restaurant = "Chirnside Park Country Club";
    }

    document.getElementById("result").innerHTML =
        `
        <h2>${restaurant}</h2>
        <button onclick="selectRestaurant('${restaurant}')">
            Select Restaurant
        </button>
        `;
}
function depositupdate() {
    let restaurant = document.getElementById("restaurant").value;
    let deposit = 0;

    switch (restaurant) {
        case "KFC":
            deposit = 0;
            break;

        case "Okami":
            deposit = 42.30;
            break;

        case "Third Wave Cafe":
            deposit = 0;
            break;

        case "Chirnside Park Country Club":
            deposit = 0;
            break;

        case "TenBBQ Hotpot":
            deposit = 10;
            break;

        case "1PlusPiece":
            deposit = 0;
            break;
    }

    document.getElementById("deposit").value = "$" + deposit;
}
function selectRestaurant(name) {

    localStorage.setItem("restaurant", name);

    window.location.href = "reservation.html";
}
function updateheading(){
    let restaurant = document.getElementById("restaurant").value;
    document.getElementById("chosenoutput").innerText = restaurant;
    depositupdate();
}
window.onload = function() {
    let selected =
    localStorage.getItem("restaurant");

    document.getElementById("restaurant").value =
    selected;

    depositupdate()

    updateheading();
}