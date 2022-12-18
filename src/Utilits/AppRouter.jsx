import React from 'react'
import { Route, Routes } from "react-router-dom";
import { RoutesList } from '../Routes/Route';
const AppRouter = () => {
	return (
		<Routes>
			{
				RoutesList.map((el) =>
					<Route path={el.path} element={el.element} key={el.path} />
				)
			}
		</Routes>

	)
}

export default AppRouter