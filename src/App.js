import React, { useState } from 'react';
import About from './components/About/About';
import ProjectForm from './components/ProjectForm/ProjectForm';
import ProjectsList from './components/ProjectList/ProjectList';
import Contact from './components/Contact/Contact';

const App = () => {
  const [projectData, setProjectData] = useState([]);

  const handleAddProject = (project) => {
    setProjectData([...projectData, project]);
  };

  return (
    <div>
      <About />
      <div id="add-project">
        <ProjectForm onAddProject={handleAddProject} />
      </div>
      <div id="projects">
        <ProjectsList projects={projectData} />
      </div>
      <div id='contact'>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
