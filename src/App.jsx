import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollToHashElement from "./components/utils/ScrollToHashElement";
import Stack from "./components/Stack";

export default function App() {
  function startPingServer(url) {
    function pingServer() {
        fetch(url)
            .then(response => {
                if (response.ok) {
                    console.log('Ping successful');
                    console.log(response);
                } else {
                    console.error('Ping failed: ', response.status);
                }
            })
            .catch(error => {
                console.error('Ping error: ', error);
            });
    }
    setInterval(pingServer, 14 * 60 * 1000);
}
  return (
    <div>
      {
        startPingServer('jiffy-site-backend.onrender.com/getwaitlist')
      }
      <ScrollToHashElement />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Stack />
      <Contact />
    </div>
  )
}