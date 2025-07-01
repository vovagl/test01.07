import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import SectionForm from "./SectionForm";
import css from "./resumeEditor.module.css";

export default function ResumeEditor({ sections, setSections }) {
  const handleAddSection = (type) => {
    const newSection = {
      id: Date.now().toString(),
      type,
      content: {},
    };
    setSections([...sections, newSection]);
  };

  const handleDelete = (id) => {
    setSections(sections.filter((s) => s.id !== id));
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const newSections = Array.from(sections);
    const [moved] = newSections.splice(result.source.index, 1);
    newSections.splice(result.destination.index, 0, moved);
    setSections(newSections);
  };

  const handleUpdate = (id, updatedContent) => {
    setSections(
      sections.map((sec) =>
        sec.id === id ? { ...sec, content: updatedContent } : sec
      )
    );
  };

  return (
    <div className={css.editor}>
      <select onChange={(e) => handleAddSection(e.target.value)}>
        <option value="">Добавить секцию...</option>
        <option value="experience">Опыт</option>
        <option value="education">Образование</option>
        <option value="skills">Навыки</option>
        <option value="certificates">Сертификаты</option>
        <option value="about">О себе</option>
      </select>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="sections">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {sections.map((sec, index) => (
                <Draggable key={sec.id} draggableId={sec.id} index={index}>
                  {(provided) => (
                    <div
                      className={css.section_block}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <SectionForm
                        section={sec}
                        onUpdate={handleUpdate}
                        onDelete={handleDelete}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
