import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../../assets/CheckMarkIcon.svg";
import SkillList from "../../../common/SkillList";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="C/C++" />
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="PosgreSQL" />
        <hr />
      </div>
    </section>
  );
}

export default Skills;
