import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import TheDrinkerLanding from './components/TheDrinkerLanding';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#030812]">
      <main>
        <TheDrinkerLanding />
      </main>
    </div>
  )
}

export default App
