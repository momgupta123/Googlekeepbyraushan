// Note.js
import React, { useState } from 'react';
import styled from 'styled-components';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const NoteContainer = styled.div`
  background-color: ${(props) => props.color || '#fff'};
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h3 {
    margin: 0;
  }

  p {
    margin: 5px 0;
  }

  button {
    margin-top: 5px;
    cursor: pointer;
  }
`;

const Note = ({ id, title, content, color, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);

  const handleEdit = () => {
    onEdit(id, editedTitle, editedContent, color);
    setIsEditing(false);
  };

  return (
    <NoteContainer color={color}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <button onClick={handleEdit}><SaveOutlinedIcon/></button>
        </>
      ) : (
        <>
          <h3>{title}</h3>
          <p>{content}</p>
          <button onClick={() => setIsEditing(true)}><EditOutlinedIcon/></button>
          <button onClick={() => onDelete(id)}><DeleteOutlineOutlinedIcon/></button>
        </>
      )}
    </NoteContainer>
  );
};

export default Note;
