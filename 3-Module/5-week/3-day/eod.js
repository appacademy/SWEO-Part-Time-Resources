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
	const abilityToolTipContainer = document.createElement('div');
	const abilityToolTip = document.createElement('div');
	const abilityName = document.createElement('div');

	const sourceWebM = document.createElement('source');
	const sourceMP4 = document.createElement('source');

	const abilityQ = document.createElement('img');
	const abilityW = document.createElement('img');
	const abilityE = document.createElement('img');
	const abilityR = document.createElement('img');

	let video = document.createElement('video');

	let allChampions = [];
	let currentChampionData = [];
	let currentChampion = 0;

	// add css
	document.body.style.margin = '0px';
	document.body.style.height = '100%';

	document.head.appendChild(styleElement);
	styleElement.innerText = "* {font-family: sans-serif} html { height: 100% } .hidden {visibility : hidden}"

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

	// ability tooltip container
	abilityToolTipContainer.setAttribute('class', 'hidden');
	abilitiesContainer.appendChild(abilityToolTipContainer)

	abilityToolTipContainer.style.display = 'flex';
	abilityToolTipContainer.style.position = 'absolute';
	abilityToolTipContainer.style.bottom = '65px';
	abilityToolTipContainer.style.flexDirection = 'column';

	// ability name
	abilityToolTipContainer.appendChild(abilityName);
	abilityName.style.fontSize = '30px';
	abilityName.style.color = 'grey'
	abilityName.style.backgroundColor = '#11141d';
	abilityName.style.textAlign = 'center';

	// ability tooltip
	abilityToolTipContainer.appendChild(abilityToolTip)
	abilityToolTip.setAttribute('id', 'ability-tt');
	abilityToolTip.style.height = '100px';
	abilityToolTip.style.width = '410px';
	abilityToolTip.style.zIndex = '1';
	abilityToolTip.style.backgroundColor = '#11141d';
	abilityToolTip.style.overflow = 'auto';
	abilityToolTip.style.color = 'white';
	abilityToolTip.style.textAlign = 'center';
	abilityToolTip.style.paddingTop = '10px';

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

	// helper functions
	function removeLatestVideo(){
		if(abilityToolTipContainer.children.length > 2){
			abilityToolTipContainer.children[abilityToolTipContainer.children.length - 1].remove()
		}
	}

	// functions
	function newVideo(source1, source2, ability){
			// ability video
			// if(video.paused){
			// 	video.play()
			// }

			if(!video){
				video = document.createElement('video');
			}
			removeLatestVideo()

			abilityToolTipContainer.appendChild(video);
			// video.setAttribute('preload', 'metadata');
			video.setAttribute('playsinline', '');
			video.setAttribute('loop', '');
			video.setAttribute('muted', '');
			video.setAttribute('autoplay', '');
			video.setAttribute('controls', '');
			video.setAttribute('height', '250');
			video.setAttribute('width', '400');
			video.style.border = '5px solid grey'

			video.appendChild(sourceWebM);
			sourceWebM.src = source1
			sourceWebM.setAttribute('type', 'video/webm');

			video.appendChild(sourceMP4);
			sourceMP4.src = source2
			sourceMP4.setAttribute('type', 'video/mp4');

			video = null;
	}


	// listeners

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
		if(e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO'){
			let champKey = currentChampionData.key
			const imgValue = e.target.getAttribute('class').toUpperCase()

			abilityName.innerText = currentChampionData.spells[e.target.getAttribute('value')].name
			abilityToolTip.innerHTML = currentChampionData.spells[e.target.getAttribute('value')].description

			if(parseInt(champKey) < 10){
				champKey = `000${champKey}`
			} else if(parseInt(champKey) < 100){
				champKey = `00${champKey}`
			} else if(parseInt(champKey) < 1000){
				champKey = `0${champKey}`
			}

			const source1 = `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${champKey}/ability_${champKey}_${imgValue}1.webm`
			const source2 = `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${champKey}/ability_${champKey}_${imgValue}1.mp4`
			newVideo(source1, source2)
			abilityToolTipContainer.setAttribute('class', 'visible')
		} else {

			abilityToolTipContainer.setAttribute('class', 'hidden')
			removeLatestVideo()
			video = null;
		}
	})

	// run
	await getAllChampions()
	await getChampion()
})
