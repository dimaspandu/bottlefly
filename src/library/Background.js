export function background(process){
	if(process === 'launch'){
		alert('SEK!');
	}
	else if(process === 'signout'){
		if(typeof(Storage) !== 'undefined'){;
			localStorage.removeItem('accessname');
			window.location = '../';
		}
		else{
			alert('BROWSER DOESN\'T SUPPORT WEB STORAGE!');
		}
	}
	else{
		console.log('NO PROCESS REQUEST.');
	}
}