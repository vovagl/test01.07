import css from "./sectionForm.module.css";

export default function SectionForm({ section, onUpdate, onDelete }) {
  const { id, type, content } = section;

  const handleChange = (field, value) => {
    onUpdate(id, { ...content, [field]: value });
  };

  const renderFields = () => {
    switch (type) {
      case "experience":
        return (
          <>
            <input
              placeholder="Должность"
              value={content.role || ""}
              onChange={(e) => handleChange("role", e.target.value)}
            />
            <input
              placeholder="Компания"
              value={content.company || ""}
              onChange={(e) => handleChange("company", e.target.value)}
            />
            <input
              placeholder="Период"
              value={content.period || ""}
              onChange={(e) => handleChange("period", e.target.value)}
            />
            <textarea
              placeholder="Описание"
              value={content.desc || ""}
              onChange={(e) => handleChange("desc", e.target.value)}
            />
          </>
        );
      case "education":
        return (
          <>
            <input
              placeholder="Учебное заведение"
              value={content.school || ""}
              onChange={(e) => handleChange("school", e.target.value)}
            />
            <input
              placeholder="Специальность"
              value={content.degree || ""}
              onChange={(e) => handleChange("degree", e.target.value)}
            />
            <input
              placeholder="Период"
              value={content.period || ""}
              onChange={(e) => handleChange("period", e.target.value)}
            />
          </>
        );
      case "skills":
        return (
          <textarea
            placeholder="Навыки через запятую"
            value={content.skills || ""}
            onChange={(e) => handleChange("skills", e.target.value)}
          />
        );
      case "certificates":
        return (
          <input
            placeholder="Название сертификата"
            value={content.cert || ""}
            onChange={(e) => handleChange("cert", e.target.value)}
          />
        );
      case "about":
        return (
          <textarea
            placeholder="О себе"
            value={content.about || ""}
            onChange={(e) => handleChange("about", e.target.value)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={css.form_section}>
      <h4>{type}</h4>
      {renderFields()}
      <button onClick={() => onDelete(id)}>Удалить</button>
    </div>
  );
}
