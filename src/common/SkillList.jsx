function SkillList({ src, skill }) {
  return (
    <span>
      <img src={src} alt="ChekMarkIcon" />
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;
