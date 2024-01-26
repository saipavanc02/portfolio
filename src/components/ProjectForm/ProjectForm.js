import React, { useState } from 'react';
import './ProjectForm.css'

const ProjectForm = ({ onAddProject }) => {
  const [newProject, setNewProject] = useState({ projectName: '', projectLink: '', description: '' });

  const handleInputChange = (e) => {
    setNewProject({ ...newProject, [e.target.name]: e.target.value });
  };

  const handleAddClick = () => {
    onAddProject(newProject);
    setNewProject({ projectName: '', projectLink: '', description: '' });
  };

  return (
    <div className='form-container'>
      <h2>Add Project</h2>
      <form>
        <label>
          ProjectName<br />
          <input type="text" name="projectName" value={newProject.projectName} onChange={handleInputChange} /><br />
        </label>
        <label>
          ProjectLink<br />
          <input type="text" name="projectLink" value={newProject.projectLink} onChange={handleInputChange} /><br />
        </label>
        <label>
          Description<br />
          <textarea name="description" value={newProject.description} onChange={handleInputChange} /><br />
        </label>
        <button className='add-button' type="button" onClick={handleAddClick}>Add</button>
      </form>
    </div>
  );
}

export default ProjectForm;
