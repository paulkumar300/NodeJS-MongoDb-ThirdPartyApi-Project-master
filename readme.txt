NodejS Project

Technology
•	GitHub - please fork this repo and clone to keep your own personal copy for review
•	NodeJS Express Framework (Node version 5.7.1)
•	CoffeeScript (http://coffeescript.org/)
•	MongoDB (version 3.2)
•	Jade using CSS Bootstrap (https://getbootstrap.com/docs/3.3/css/)
•	Hunter Email Count API (https://hunter.io/api/docs#email-count)
•	Authentication using npm passport-local
•	Use MVC architecture

Project Requirements
•	Created a login form using npm passport-local authentication
•	Included menu navigation using bootstrap navbar (Home, Search, Logout)
•	Home page just has plain text on it to welcome the user
•	New Search Functionality
	o	Allowed user to create new searches from the View Search List page
	o	Allowed up to 3 URLs per search
	o	Allowed user to name the Search
	o	Saved the Search input to the database and do not allow duplicate names
	o	Displayed confirmation that it was saved successfully or not
•	View Search Functionality
	o	Listed all Saved Searches – display the name and domains of the search 
	o	Allowed user to filter the search results by search name and/or domain
•	Execute Search Functionality
	o	Allowed user to execute a saved search from the View Search List page using Hunter Email Count API
•	View Search Results
	o	Displayed domains, total, personal and generic email counts for each domain of the search
•	Logout 

Host Solution
•	Providing a URL to a working demo of the solution with login information for review.
	https://aqueous-shelf-56488.herokuapp.com/ 
