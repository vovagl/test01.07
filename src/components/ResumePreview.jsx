import css from "./resumePreview.module.css";

export default function ResumePreview({ sections }) {
  const renderPreview = () => {
    return sections.map((sec) => {
      const c = sec.content;
      switch (sec.type) {
        case "experience":
          return (
            <div className={css.preview_block} key={sec.id}>
              <h3>
                {c.role} — {c.company}
              </h3>
              <p>{c.period}</p>
              <p>{c.desc}</p>
            </div>
          );
        case "education":
          return (
            <div className={css.preview_block} key={sec.id}>
              <h3>{c.school}</h3>
              <p>{c.degree}</p>
              <p>{c.period}</p>
            </div>
          );
        case "skills":
          return (
            <div className={css.preview_block} key={sec.id}>
              <h3>Навыки</h3>
              <ul>
                {c.skills?.split(",").map((s, i) => (
                  <li key={i}>{s.trim()}</li>
                ))}
              </ul>
            </div>
          );
        case "certificates":
          return <p key={sec.id}>📜 {c.cert}</p>;
        case "about":
          return (
            <div className={css.preview_block} key={sec.id}>
              <h3>О себе</h3>
              <p>{c.about}</p>
            </div>
          );
        default:
          return null;
      }
    });
  };

  return (
    <div className={css.preview}>
      <h2>Превью резюме</h2>
      {renderPreview()}
    </div>
  );
}
