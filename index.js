const request = require('request'),
			$name = document.querySelectorAll('.status__name'),
			$description = document.querySelectorAll('.description');



function updateResults(){
	request('https://www.githubstatus.com/',  { json: true }, (err, res, body) => {  
		let results = body.components;
		results = results.filter((value) => value.status === 'operational') // o metodo filter cria um novo array, filtrando os valores com 
		for(let i = 0; i < $name.length; i++){
			const div = $name[i];
			const result = results.filter((value) => value.name === div.textContent);
			if(result.length === 0){
				continue; //ignora todo o codigo e volta para o inicio do loop;
			}
			const className = (result[0].status === 'operational')
				?'operational'
				: 'broken';
				$description[i].classList.toggle(className);
		}
});
}

updateResults();
