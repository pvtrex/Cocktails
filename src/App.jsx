import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Coctails from './components/Cocktails.jsx';


gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
 return (
	<main>
	 <Navbar />
	 <Hero />
	 <Coctails/>
	
	</main>
 )
}

export default App
