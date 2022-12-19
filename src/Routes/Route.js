import React from "react";
import AnswerPage from "../Pages/AnswerPage/AnswerPage";
import ResultsPage from "../Pages/ResultsPage/ResultsPage";
import StartPage from "../Pages/StartPage/StartPage";
export const RoutesList = [
	{ path: '/mini-test/*', element: <StartPage /> },
	{ path: '/mini-test/answer/:number', element: <AnswerPage /> },
	{ path: '/mini-test/results', element: <ResultsPage /> },
]