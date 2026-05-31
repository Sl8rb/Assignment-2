Hello, this is the README.txt for my website that recommends restaurants
Website structure
index.html
restaurant.html
recommend.html
register.html
reservation.html
css
/style.css
js
/jquery 4.0.0 min
/script.js
/recommend.js

GitHub Link:
https://github.com/Sl8rb/Assignment-2

Explanation of javascript:
Script.js
After gathering the variables such as name, phone number, email, etc

function validate() occurs
this checks that all form inputs have text entered into them

Eg. 
if (name == "") {
		errMsg += "<li>Name cannot be empty.</li>";
	}
the first part of the if statement checks if there is no text in the box
if no text is found, errMsg pops up, and adds the <li> to the reasons the error occurred.

in order to check if the user is paying from a voucher, or a card, function paymentmethod() is used

it checks if the user has selected the "voucher" or "card" options, then updates the HTML document with either a voucher input or the input for a credit card

if the user wants to use the same email for billing, function emailcopy() is used
it checks if the "use same email" box is checked
if so, then the billing email box becomes read only, copying the email input

function init() makes sure every function from script js is running from startup

Recommend.js

in order to recommend a restaurant to the user, function recommendrestaurant() is used
after gathering the variables, it checks if specific conditions match
eg:  if (diet == "None" && budget == "$20" && purpose == "Cheap Food")
if the inputs match a specific output, it gives the according one on the page, in this case, KFC
this is done for many types of input options, and if it cannot find one, auto selects the Chirnside park country club, which gets stored in the localstorage of the javascript element
this is added onto the page using innerhtml

each of these restaurants has a price to deposit, which is set in function depositupdate()
the deposit starts at 0, then a switch command runs,
when a restaurant with a different deposit amount is called, the deposit value updates
then a $ is added at the front by calling the "deposit" value
the deposit part of the form is kept readonly to prevent tampering with the form.


In order to reserve a restaurant from the recommendation page, function selectRestaurant() is used
this grabs the localstorage item from the reccomendrestaurant() page
then puts the variable into the button on the recommend page, on the button click, you are brought to reservation html with the restaurant selected

Function updateheading()
this looks at the current value of "restaurant"
then outputs it as the H1 title
then calls the depositupdate() function to change the deposit amount

Limitations:
in order to use the same email function, you have to have your email already input, otherwise it doesn't update, if I had more time on the project, I might be able to update it.

references:
https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage Localstorage learnings i used
https://www.w3schools.com/jsref/prop_html_innerhtml.asp innerhtml guide i used

