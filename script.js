let input = document.querySelector("input");
let button = document.querySelector("button");
let p = document.querySelector("p");
let select = document.querySelector("select");
let name = document.getElementById("name")
let height = document.getElementById("height");
let mass = document.getElementById("mass");
let hairColor = document.getElementById("hairColor");
let skinColor = document.getElementById("skinColor");
let eyeColor = document.getElementById("eyeColor");
let birthdate = document.getElementById("birthdate");
let gender = document.getElementById("gender");

/*
button.addEventListener("click", () => {
	setTimeout(() => {
		p.innerHTML = input.value;
	}, 2000)
})
*/

/*
const nameChar = (data) => {
	console.log(data.results[0].name)
	return new Promise ((resolve, reject) => {
		resolve(data);		
	})
}

const heightChar = (data) => {
	console.log(data.results[0].height)
	return new Promise ((resolve, reject) => {
		resolve(data);		
	})
}

const massChar = (data) => {
	console.log(data.results[0].mass)
	return new Promise ((resolve, reject) => {
		resolve(data);		
	})
}

fetch("https://swapi.co/api/people")
	.then(result => result.json())
	.then(nameChar)
	.then(heightChar)
	.then(massChar)
*/

const count = (data) => {
	return new Promise((resolve, reject) => {
		data.forEach((char, i) => {
			let opt = document.createElement("option")
			opt.appendChild(document.createTextNode(data[i].name))
			select.appendChild(opt)
		})
	})
}

const filIm = (data) => {
	switch(data){
		case "Luke Skywalker":
			return ("https://img.pngio.com/star-wars-a-new-hope-luke-skywalker-png-by-metropolis-hero1125-on-luke-skywalker-png-802_996.png");
			break;
		case "C-3PO":
			return ("https://www.model-space.com/media/catalog/product/cache/1/thumbnail/1280x/9df78eab33525d08d6e5fb8d27136e95/s/s/ss2171_1500.png");
			break; 
		case "R2-D2":
			return ("https://www.stickpng.com/assets/images/580b57fbd9996e24bc43bdb6.png");
			break; 
		case "Darth Vader":
			return ("https://i1.wp.com/freepngimages.com/wp-content/uploads/2015/11/darth-vader-transparent-image.png?fit=608%2C514");
			break; 
		case "Leia Organa":
			return ("https://img.pngio.com/leia-organa-png-vector-clipart-psd-peoplepngcom-leia-organa-png-400_729.png");
			break; 
		case "Owen Lars":
			return ("https://i.pinimg.com/originals/b5/3a/5a/b53a5ae9a90265578ecec1a99b0134cc.png");
			break; 
		case "Beru Whitesun lars":
			return ("http://wookiee.ru/wp-content/uploads/2014/01/berulars_detail.png");
			break; 
		case "R5-D4":
			return ("https://vignette.wikia.nocookie.net/starwars/images/7/70/R5-D4-Droidography.png/revision/latest/scale-to-width-down/180?cb=20190823071450");
			break; 
		case "Biggs Darklighter":
			return ("https://vignette.wikia.nocookie.net/swmerchandise/images/0/06/Biggs_Darklighter_with_Blaster_Pistol_%2869758%29_P.gif/revision/latest?cb=20140701000435");
			break; 
		case "Obi-Wan Kenobi":
			return ("https://img.pngio.com/star-wars-the-clone-wars-obi-wan-kenobi-png-by-metropolis-hero1125-obi-wan-png-809_988.png");
			break; 
	}
}

const loo = (data1) => {
	return new Promise ((resolve, reject) => {
		data1.forEach((ch, i) => {
			if(ch.name === select.value){
				document.getElementById("im").setAttribute("src", filIm(ch.name))
				name.innerHTML = `Name: ${ch.name}`;
				height.innerHTML = `Height: ${ch.height}`;
				mass.innerHTML = `Mass: ${ch.mass}`;
				hairColor.innerHTML = `Hair color: ${ch.hair_color}`;
				skinColor.innerHTML = `Skin color: ${ch.skin_color}`;
				eyeColor.innerHTML = `Eye color: ${ch.eye_color}`;
				birthdate.innerHTML = `Year of birth: ${ch.birth_year}`;
				gender.innerHTML = `Gender: ${ch.gender}`;				
			}
		})
	})
}

fetch("https://swapi.co/api/people")
	.then(result => result.json())
	.then(result2 => result2.results)
	.then(count)

select.addEventListener("click", () => {
	return fetch("https://swapi.co/api/people")
		.then(result => result.json())
		.then(result2 => result2.results)
		.then(loo)
	console.log(select.value)
})



