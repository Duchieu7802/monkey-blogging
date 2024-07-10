import { AuthProvider } from "./contexts/auth-context";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
	return (
		<>
			<AuthProvider>
				<Routes>
					<Route path="/" element={<HomePage></HomePage>}></Route>
					<Route path="/signup" element={<SignUpPage></SignUpPage>}></Route>
					<Route path="/login" element={<SignInPage></SignInPage>}></Route>
					<Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
				</Routes>
			</AuthProvider>
		</>
	);
}

export default App;
