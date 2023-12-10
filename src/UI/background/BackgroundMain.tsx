// import ParticlesContenedor from './Particles'
import PatternedBackground from "./PatternedBackground";
import "./background.css";

const BackgroundMain = () => {
  return (
    <section className="bgMain">
      <div className="bgMain__gradient bgMain__overlay "></div>
      <PatternedBackground />
      {/* <ParticlesContenedor /> */}
    </section>
  );
};

export default BackgroundMain;
