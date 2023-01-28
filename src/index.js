import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';

import './index.css';
import App from './App';

import { Button } from './App';


const BigButton = styled(Button)`
	margin: 0 auto;
	width: 245px;
	text-align: center;
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <BigButton as="a">Отправить отчет</BigButton>
  </React.StrictMode>
);

// 1) Установить npm install --save-dev styled-components


