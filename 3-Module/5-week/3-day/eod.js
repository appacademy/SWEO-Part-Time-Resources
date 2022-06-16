window.addEventListener('DOMContentLoaded', async () =>{
	// constant variables
	const styleElement = document.createElement('style');
	const mainContainer = document.createElement('div');
	const content = document.createElement('div');
	const nameContainer = document.createElement('div');
	const splashContainer = document.createElement('img');
	const abilitiesContainer = document.createElement('div');
	const nextChampionButton = document.createElement('button');
	const previousChampionButton = document.createElement('button');
	const abilitiesDiv = document.createElement('div');
	const abilityToolTip = document.createElement('div');

	const abilityQ = document.createElement('img');
	const abilityW = document.createElement('img');
	const abilityE = document.createElement('img');
	const abilityR = document.createElement('img');

	let allChampions = []
	let currentChampionData = []
	let currentChampion = 0

	// add css
	document.body.style.margin = '0px';
	document.body.style.height = '100%';

	document.head.appendChild(styleElement);
	styleElement.innerText = "* {font-family: sans-serif} html { height: 100% } .hidden { display : none}"

	// creating the main container
	mainContainer.setAttribute('class', 'main-container');
	document.body.appendChild(mainContainer);
	// styling to the main container
	mainContainer.style.height = '100%';
	mainContainer.style.background = '#111111';
	mainContainer.style.display = 'flex';
	mainContainer.style.alignItems = 'center';
	mainContainer.style.justifyContent = 'center';
	mainContainer.style.flexDirection = 'column'

	// creating the content
	mainContainer.appendChild(content);
	content.setAttribute('class', 'content');

	// style to the content
	content.style.backgroundColor = '#ffffff';
	content.style.width = '200px';
	content.style.height = '400px';
	content.style.border = '3px solid #dbb76c';

	// splash image container
	content.appendChild(splashContainer)
	splashContainer.style.width = '100%';
	splashContainer.style.height = '100%';
	splashContainer.style.objectFit = 'cover';

	// champion name
	mainContainer.appendChild(nameContainer);
	// name container style
	nameContainer.style.color = '#d2af5f';
	// nameContainer.style.fontFamily = 'sans-serif';
	nameContainer.style.padding = '5px';
	nameContainer.style.cursor = 'default';

	// abilities
	mainContainer.appendChild(abilitiesContainer);
	abilitiesContainer.setAttribute('class', 'abilities');

	abilitiesContainer.before(abilitiesDiv);
	abilitiesDiv.innerText = 'Champion Abilities ⮯';
	abilitiesDiv.style.color = '#d0a85c';
	// abilitiesDiv.style.fontFamily = 'sans-serif';
	abilitiesDiv.style.fontSize = '20px';
	abilitiesDiv.style.cursor = 'default';

	abilitiesContainer.style.display = 'flex';
	abilitiesContainer.style.position = 'relative';
	abilitiesContainer.style.marginTop = '10px';
	abilitiesContainer.style.width = '100%';
	abilitiesContainer.style.justifyContent = 'space-evenly';
	abilitiesContainer.style.padding = '5px'

	abilitiesContainer.appendChild(abilityQ);
	abilitiesContainer.appendChild(abilityW);
	abilitiesContainer.appendChild(abilityE);
	abilitiesContainer.appendChild(abilityR);

	abilityQ.setAttribute('class', 'q');
	abilityQ.setAttribute('value', '0');

	abilityW.setAttribute('class', 'w');
	abilityW.setAttribute('value', '1');

	abilityE.setAttribute('class', 'e');
	abilityE.setAttribute('value', '2');

	abilityR.setAttribute('class', 'r');
	abilityR.setAttribute('value', '3');

	abilityQ.style.width = '40px';
	abilityQ.style.height = '40px';
	abilityQ.style.border = '3px solid #c28f2c';

	abilityW.style.width = '40px';
	abilityW.style.height = '40px';
	abilityW.style.border = '3px solid #c28f2c';

	abilityE.style.width = '40px';
	abilityE.style.height = '40px';
	abilityE.style.border = '3px solid #c28f2c';

	abilityR.style.width = '40px';
	abilityR.style.height = '40px';
	abilityR.style.border = '3px solid #c28f2c';

	// ability tooltip
	abilityToolTip.setAttribute('class', 'hidden');
	abilitiesContainer.appendChild(abilityToolTip)
	abilityToolTip.style.position = 'absolute';
	abilityToolTip.style.height = '100px';
	abilityToolTip.style.width = '400px';
	abilityToolTip.style.zIndex = '1';
	abilityToolTip.style.backgroundColor = 'yellow';
	abilityToolTip.style.bottom = '65px';
	abilityToolTip.style.overflow = 'auto';

	// api functions

	async function getAllChampions(){
		const resObj = await fetch("http://ddragon.leagueoflegends.com/cdn/12.11.1/data/en_US/champion.json");
		const resBody = await resObj.json();

		allChampions = Object.keys(resBody.data)
	}

	async function getChampion(){
		// champion information
		const resObj = await fetch(`https://ddragon.leagueoflegends.com/cdn/12.11.1/data/en_US/champion/${allChampions[currentChampion]}.json`);
		const resBody = await resObj.json();
		const championData = resBody.data[Object.keys(resBody.data)[0]]

		const spells = [abilityQ, abilityW, abilityE, abilityR];

		currentChampionData = championData;

		// champion splash image
		splashContainer.setAttribute('src', `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championData.id}_0.jpg`)

		// champion abilities
		for(let i = 0; i < championData.spells.length; i++){
			const currentSpell = championData.spells[i]
			spells[i].setAttribute('src', `https://ddragon.leagueoflegends.com/cdn/12.11.1/img/spell/${currentSpell.image.full}`)
		}

		// name
		nameContainer.innerText = championData.name

		// next
		nameContainer.appendChild(nextChampionButton);
		nextChampionButton.style.marginLeft = '10px';
		nextChampionButton.innerText = 'Next Champion';
		// nextChampionButton.style.fontFamily = 'sans-serif';
		nextChampionButton.style.border = '2px solid #705026';
		nextChampionButton.style.borderRadius = '8%';
		nextChampionButton.style.backgroundColor = '#d0a85c';
		nextChampionButton.style.cursor = 'pointer';
		nextChampionButton.style.width = '140px';

		// before
		nameContainer.insertBefore(previousChampionButton, nameContainer.firstChild);
		previousChampionButton.style.text = 'no-wrap';
		previousChampionButton.style.marginRight = '10px';
		previousChampionButton.innerText = 'Previous Champion';
		// previousChampionButton.style.fontFamily = 'sans-serif';
		previousChampionButton.style.border = '2px solid #705026';
		previousChampionButton.style.borderRadius = '8%';
		previousChampionButton.style.backgroundColor = '#d0a85c';
		previousChampionButton.style.cursor = 'pointer';
		previousChampionButton.style.width = '140px';
	}

	await getAllChampions()
	await getChampion()

	nextChampionButton.addEventListener('click', async ()=>{
		currentChampion += 1;
		if(currentChampion === allChampions.length){
			currentChampion = 0;
		}
		await getChampion()
	});


	previousChampionButton.addEventListener('click', async ()=>{
		currentChampion -= 1;
		if(currentChampion === -1){
			currentChampion = allChampions.length - 1;
		}
		await getChampion()
	});

	abilitiesContainer.addEventListener('click', async (e) => {
		if(e.target.tagName === 'IMG'){
			abilityToolTip.innerHTML = currentChampionData.spells[e.target.getAttribute('value')].description
			abilityToolTip.setAttribute('class', 'visible')
		} else {
			abilityToolTip.setAttribute('class', 'hidden')
		}
	})
})
