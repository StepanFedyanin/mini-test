import { BrowserRouter } from "react-router-dom";
import AppRouter from "../../Utilits/AppRouter";
import './App.scss'
function App() {
	return (
		<div className="app">
			<div className="app__container">
				<BrowserRouter>
					<AppRouter />
				</BrowserRouter>
			</div>
		</div>

	);
}

export default App;
