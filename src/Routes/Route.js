import React from "react";
import AnswerPage from "../Pages/AnswerPage/AnswerPage";
import StartPage from "../Pages/StartPage/StartPage";
export const RoutesList = [
	{ path: '*', element: <StartPage /> },
	{ path: '/answer/:number', element: <AnswerPage /> },
]