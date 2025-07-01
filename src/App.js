import { useState, useEffect } from 'react';
import ResumeEditor from './components/ResumeEditor';
import ResumePreview from './components/ResumePreview';
import css from'./App.module.css';

function App() {
  const [sections, setSections] = useState(() => {
    const saved = localStorage.getItem('resume_sections');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('resume_sections', JSON.stringify(sections));
  }, [sections]);

  return (
    <div className={css.container}>
      <ResumeEditor sections={sections} setSections={setSections} />
      <ResumePreview sections={sections} />
    </div>
  );
}

export default App;

