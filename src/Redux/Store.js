import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { textAnswer } from "./Reducer/ProgressAnswer";
import { qestionContent } from "./Reducer/QestionContent";
const rootReducer = ({
	textAnswer: textAnswer,
	qestionContent: qestionContent
})
export const store = configureStore({ reducer: rootReducer }, composeWithDevTools(applyMiddleware(thunk)))