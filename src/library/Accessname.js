export function accessname(){
	if(typeof(Storage) !== 'undefined'){
		if(localStorage.getItem('accessname') !== null){
			return localStorage.getItem('accessname');
		}
	}
	else{
		alert('BROWSER DOESN\'T SUPPORT WEB STORAGE!');
	}
}