import React, { useState } from 'react';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';

const birdsSlice = createSlice({
  name: 'birds',
  initialState: [],
  reducers: {
    addBird: (state, action) => {
      const newBird = {
        name: action.payload,
        likes: 0,
      };
      state.push(newBird);
    },
    increaseLikes: (state, action) => {
      const index = state.findIndex((bird) => bird.name === action.payload);
      state[index].likes++;
    },
    decreaseLikes: (state, action) => {
      const index = state.findIndex((bird) => bird.name === action.payload);
      if (state[index].likes > 0) {
        state[index].likes--;
      }
    },
  },
});

const store = configureStore({
  reducer: birdsSlice.reducer,
});

const BirdsApp = () => {
  const [birdName, setBirdName] = useState('');
  const birds = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleAddBird = () => {
    if (birdName !== '') {
      dispatch(birdsSlice.actions.addBird(birdName));
      setBirdName('');
    }
  };

  return (
    <div>
      <h1>Bird List</h1>
      <h3>Add Bird</h3>
      <input
        type="text"
        placeholder="Bird Name"
        value={birdName}
        onChange={(e) => setBirdName(e.target.value)}
      />
      <button onClick={handleAddBird}>Add</button>
      <br />
      {birds.map((bird) => (
        <div key={bird.name}>
          <h4>{bird.name}</h4>
          <p>Likes: {bird.likes}</p>
          <button onClick={() => dispatch(birdsSlice.actions.increaseLikes(bird.name))}>+</button>
          <button onClick={() => dispatch(birdsSlice.actions.decreaseLikes(bird.name))}>-</button>
        </div>
      ))}
    </div>
  );
};

const Birds = () => {
  return (
    <Provider store={store}>
      <BirdsApp />
    </Provider>
  );
};

export default Birds;
