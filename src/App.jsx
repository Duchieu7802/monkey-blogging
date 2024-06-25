import { AuthProvider } from "./contexts/auth-context";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";

function App() {
	return (
		<>
			<AuthProvider>
				<Routes>
					<Route path="/signup" element={<SignUpPage></SignUpPage>}></Route>
				</Routes>
			</AuthProvider>
		</>
	);
}

export default App;
