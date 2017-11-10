import React from 'react';
import ReactDOM from 'react-dom';
import { auth } from './library/Auth';
import Gate from './Gate';
import Core from './Core';
import './css/nahl/nahl-hive.css';
import './css/nahl/nahl-colony.css';

ReactDOM.render(
	auth(<Gate />, <Core />),
	document.getElementById('core')
);