import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Tour from './pages/Tour';

const App = () => {
    return (
		<div className='App'>
			<div className="navbar">
				<Link to='/'>Home</Link> | 
				<Link to="about">About</Link> | 
				<Link to='tour'>Tour</Link> | 
			</div>
			<Routes>
				<Route path="/" element={ <Home />} />
				<Route path="/about" element={ <About />} />
				<Route path="/tour" element={ <Tour />} />
			</Routes>
		</div>
    );
}

export default App;