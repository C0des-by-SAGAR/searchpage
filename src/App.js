import React, { Component } from "react";
import SearchPage from "./components/SearchPage/SearchPage";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import './App.css';

const ParticlesBackground = () => {
const [init, setInit] = React.useState(false);

  React.useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = React.useMemo(
    () => ({
      background: {
        color: {
          value: "#0",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 200, duration: 0.4 },
        },
      },
      particles: {
        color: { value: "#ffffff" },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 1,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: { enable: true },
          value: 450,
        },
        opacity: { value: 1 },
        shape: { type: "polygon" },
        size: { value: { min: 1, max: 5 } },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return <Particles id="tsparticles" options={options} />;
  }

  return null;
};

class App extends Component {
  render() {
    return (
      <div>
        <h1 className='title grow f1 link ph3 pv2 dib white bg-grey shadow-1'>
          {'FULL STACK SEARCH PAGE'}
        </h1>
        <ParticlesBackground />
        <SearchPage />
      </div>
    );
  }
}

export default App;