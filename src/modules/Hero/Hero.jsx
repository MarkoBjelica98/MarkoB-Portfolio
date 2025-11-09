import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/HeroImg.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/githubLight.svg";
import githubDark from "../../assets/githubDark.svg";
import linkedInLight from "../../assets/linkedInLight.svg";
import linkedInDark from "../../assets/LinkedInDark.svg";
import CV from "../../assets/Marko Bjelica CV (eng).pdf";
import { useTheme } from "../../common/Theme.jsx";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedIn = theme === "light" ? linkedInLight : linkedInDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Marko Bjelica portret"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Marko <br /> Bjelica
        </h1>
        <h2>Software Developer</h2>
        <span>
          <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="GitHub icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedIn} alt="LinkedIn icon" />
          </a>
        </span>
        <p className={styles.description}>
          I am a motivated beginner in embedded and web development, eager to
          build solutions that connect hardware and online services. I’m focused
          on learning modern web development, backend APIs, and IoT integration.
        </p>
        <a href={CV} download>
          <button className="hover">CV</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
