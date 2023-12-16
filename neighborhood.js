let randButton = document.querySelector('#restaurant');

const restaurants = [
	{
		name: "The Lark",
        url: 'https://www.thelarksb.com/',
	},

	{	
		name: "Jeannine's at the Shore",
        url: 'https://jeannines.com/',
	},

	{	
		name: "Santa Barbara Shellfish Company",
        url: 'https://shellfishco.com/',
	},

	{	
		name: "Palace Grill",
        url: 'https://palacegrill.com/',
	},

	{	
		name: "Brophy Bros",
        url: 'https://www.brophybros.com/',
	}
]



function randomRestaurant() {

   const random = Math.floor(Math.random() * restaurants.length);
    // console.log(random, restaurants[random].name);
    alert("Check out " + restaurants[random].name + ": " + restaurants[random].url);

}

randButton.addEventListener('click', randomRestaurant);


// testing code result = result + " <a href='" + myStringArray[i] + "'>"+ myStringArray[i] + "</a>";
/* 
Things left to do:
-link pictures of the various places for the neighborhood files
-correct the random restaurant generator
-double check all code and functions
-post to github and submit
*/

/* Time permitted, I wanted to try this: Insead of making an alert box, I could use jquery to add 
diferent elements so I could make a more visually appealing dispay of the restaurant (picture and 
clickable link)
*/
// const showRestaurant = document.querySelector('content');
// const restaurantDiv = document.createElement('div');
// const restaurantName = document.createElement('h2');
// const restaurantImg = document.createElement('img');

// restaurantName.textContent = restaurants[random].name;