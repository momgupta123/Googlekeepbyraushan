// AddNoteForm.js
import React, { useState } from 'react';
import styled from 'styled-components';
import './AddNotestyle.css'; 
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PaletteIcon from '@mui/icons-material/Palette';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import ImageIcon from '@mui/icons-material/Image';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
const FormContainer = styled.form`

  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  input,
  textarea,
  button {
    margin-bottom: 10px;
  }
`;

const AddNoteForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(title, content, color);
    setTitle('');
    setContent('');
    setColor('');
  };

  return (
    
    <FormContainer onSubmit={handleSubmit} className="inputfeild">
      
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='inputa'
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className='textareafield'
      />
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
     className='colorarea' />
    <button type="submit" className='addButton'>
  <AddCircleOutlineIcon className='addsi' />
</button>
      <div className='iconsofnotes'> <AddAlertIcon/> 
      <PersonAddAlt1Icon/>
      <ImageIcon/>
      <ArchiveOutlinedIcon/>
      <MoreVertOutlinedIcon/>
      <UndoOutlinedIcon/>
      <RedoOutlinedIcon/>
      </div>
    </FormContainer>
  );
};

export default AddNoteForm;
