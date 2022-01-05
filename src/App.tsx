import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import { theme } from './theme';
import './App.css';
import { ThemeProvider } from '@material-ui/core';
import { routes } from './routes';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					{routes.map(({ path, element }, key) => (
						<Route path={path} element={element} key={key} />
					))}
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
