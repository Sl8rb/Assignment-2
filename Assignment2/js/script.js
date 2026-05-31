/* function validate()will validate form data */
function validate() {
	var name = $("#name").val();
	var pwd1 = $("#pwd1").val();
	var pwd2 = $("#pwd2").val();
	var uname = $("#uname").val();
	var phone = $("#phone").val();
	var country = $("#country").val();
	var email = $("#email").val();
	var genm = $("#genm").length ? $("#genm").prop("checked"): true;
	var genf = $("#genf").length ? $("#genf").prop("checked"): true;
	var payopt = $("#payopt").val();
	var voucher = $("#voucher").val();
	var cardnumber = $("#cardnumber").val();

	var errMsg = "";
	var result = true;								
	var pattern = /^[a-zA-Z ]+$/;					

	if (name == "") {
		errMsg += "<li>Name cannot be empty.</li>";
	}
	if (phone == ""){
		errMsg += "<li> Phone Number cannot be empty.</li>";
	}
	if (email == ""){
		errMsg += "<li>Email Must Be included.</li>";
	}
	if (email.indexOf('@') == 0 ) {
		errMsg += "<li>Email cannot start with an @ symbol.</li>";
	}
	if (email.indexOf('@') < 0 ) {
		errMsg += "<li>Email must contain an @ symbol.</li>";
	}
	if (phone.length == [9]) {
		errMsg += "<li>Phone Number must be 10 characters long.</li>"
	}
	if (pwd1 == "") {								
		errMsg += "<li>Password cannot be empty.</li>";
	}
	if (pwd2 == "") {								
		errMsg += "<li>Retype password cannot be empty.</li>";
	}
	if (uname == "") {								
		errMsg += "<li>User name cannot be empty.</li>";
	}
	if (country == ""){
		errMsg += "<li>A Country must be selected.</li>";
	}
	if ($("#genm").length && $("#genf").length){
		if ((!genm)&&(!genf)) {	
			errMsg += "<li>A gender must be selected.</li>";
		}
	}
	
	if (pwd1 != pwd2) {
		errMsg += "<li>Passwords do not match.</li>";
	}
		if (payopt == "") {
		errMsg += "<li>Payment Method must be selected.</li>";
	} else if (payopt === "voucher") {
		// Check voucher
		if (!voucher || voucher === "") {
			errMsg += "<li>Voucher code cannot be empty.</li>";
		} else if (!/^\d{12}$/.test(voucher)) {
			errMsg += "<li>Voucher code must be exactly 12 digits.</li>";
		}
	} else if (payopt === "Card" || payopt === "card") {
		if (!cardnumber || cardnumber === "") {
			errMsg += "<li>Card number cannot be empty.</li>";
		} else {
			if (payopt === "Card") {
				if (!/^\d{16}$/.test(cardnumber)) {
					errMsg += "<li>Card number must be exactly 16 digits for Visa/Mastercard.</li>";
				}
			} else if (payopt === "card") {
				if (!/^\d{15}$/.test(cardnumber)) {
					errMsg += "<li>Card number must be exactly 15 digits for American Express.</li>";
				}
			}
		}
	}

	


	
	if (errMsg != "") {
		errMsg = "<div id='scrnOverlay'></div>"
		+ "<section id='errWin' class='window'><ul>"
		+ errMsg
		+ "</ul><a href='#' id='errBtn' class='button'>Close</a></section>";
		var numOfItems = ((errMsg.match(/<li>/g)).length) + 6;
		$("body").after(errMsg);
		$("#scrnOverlay").css('visibility', 'visible');
		$("#errWin").css('height', numOfItems.toString() + 'em');
		$("#errWin").css('margin-top', (numOfItems/-2).toString() + 'em');
		$("#errWin").show();
		$("#errBtn").click (function () {
			$("#scrnOverlay").remove();
			$("#errWin").remove();
		} );
		result = false;
	} 
	return result;
}

function paymentmethod() {
    let payment = document.getElementById("payopt").value;

    if (payment === "voucher") {
        document.getElementById("voucherinput").style.display = "block";
        document.getElementById("cardinput").style.display = "none";
    }
    else {
        document.getElementById("voucherinput").style.display = "none";
        document.getElementById("cardinput").style.display = "block";
    }
}

function emailcopy() {
    var email = $("#email").val();
    var sameemail = $("#sameemail").prop("checked");

    if (sameemail) {
        $("#billemail").val(email);
        $("#billemail").prop("readonly", true);
    }
    else {
        $("#billemail").val("");
        $("#billemail").prop("readonly", false);
    }
}


function init () {

	$(regform).submit(validate)
}


$(document).ready(init);
