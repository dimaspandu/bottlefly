import React from 'react';
import {BrowserRouter} from 'react-router-dom';

export function auth(gate, core){
	if(typeof(Storage) !== 'undefined'){
		if(localStorage.getItem('accessname') !== null){
			return (
			    <BrowserRouter>
				    {core}
			    </BrowserRouter>
			);
		}
		else{
			return (
			    <BrowserRouter>
				    {gate}
			    </BrowserRouter>
			);
		}
	}
	else{
		alert('BROWSER DOESN\'T SUPPORT WEB STORAGE!');
	}
}