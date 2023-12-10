import { useCallback } from "react";
import { loadBasic } from "tsparticles-basic";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import "./background.css";

const ParticlesContenedor = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadBasic(engine);
  }, []);

  return (
    <div className="particles-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="particles-container__canvas"
        options={{
          background: {
            color: { value: "#0000000"},
          },
          fpsLimit: 60,
          particles: {
            color: { value: "#ffffff" },
            move: {
              direction: "top",
              enable: true,
              outModes: {
                default: "bounce",
                top: "out",
              },
              random: true,
              speed: 1, 
              straight: true,
            },
            number: {
              density: {
                enable: true,
                area: 20,
              },
              value: 5,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 0.5, max: 2 },
            },
          },
          detectRetina: true,
          style: {
            pointerEvents: "none",
            display: "block",
            verticalAlign: "middle",
            top: "0px",
            left: "0px",
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: "0",
          },
        }}
      />
    </div>
  );
};

export default ParticlesContenedor;
