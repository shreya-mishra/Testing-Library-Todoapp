import React from 'react';
import App from './App';
import {render, fireEvent} from '@testing-library/react-native';

// create an item
it('Should create an item', () => {
  const {getByText, getByPlaceholderText} = render(<App />);

  const addItemButton = getByText('+');
  const textInput = getByPlaceholderText('Add Todo...');
  const createdItemText = 'first todo';
  fireEvent.changeText(textInput, createdItemText);

  fireEvent.press(addItemButton);
  const createdItem = getByText(createdItemText);
  expect(createdItem).not.toBeNull();
});

//create multiple items

it('Should create multiple item', () => {
  const {getByText, getByPlaceholderText} = render(<App />);

  const addItemButton = getByText('+');
  const textInput = getByPlaceholderText('Add Todo...');
  const createdItemText_1 = 'first todo';
  const createdItemText_2 = 'second todo';
  fireEvent.changeText(textInput, createdItemText_1);
  fireEvent.press(addItemButton);

  fireEvent.changeText(textInput, createdItemText_2);
  fireEvent.press(addItemButton);

  const firstCreatedItem = getByText(createdItemText_1);
  const secondCreatedItem = getByText(createdItemText_2);

  expect(firstCreatedItem).not.toBeNull();
  expect(secondCreatedItem).not.toBeNull();
});

// delete an item

it('Should delete an item', () => {
  const {getByText, getByPlaceholderText, queryByText} = render(<App />);

  const addItemButton = getByText('+');
  const textInput = getByPlaceholderText('Add Todo...');
  const createdItemText = 'first todo';
  fireEvent.changeText(textInput, createdItemText);
  fireEvent.press(addItemButton);

  const deleteItemButton = getByText('X');
  fireEvent.press(deleteItemButton);

  const deletedItem = queryByText(createdItemText);

  expect(deletedItem).toBeNull();
});

//error warning should be displayed when user tries to add an invalid item

it('Should display an error when trying to create an item without any text', () => {
  const {getByText} = render(<App />);

  const addItemButton = getByText('+');

  fireEvent.press(addItemButton);

  const errorMessage = getByText('Please insert a valid text');

  expect(errorMessage).not.toBeNull();
});

// error warning should dissappear once a valid item is created
it('Should remove an error message after creating a valid item', () => {
  const {getByText, getByPlaceholderText, queryByText} = render(<App />);

  const addItemButton = getByText('+');

  fireEvent.press(addItemButton);

  const textInput = getByPlaceholderText('Add Todo...');
  const createdItemText = 'first todo';
  fireEvent.changeText(textInput, createdItemText);
  fireEvent.press(addItemButton);

  const errorMessage = queryByText('Please insert a valid text');

  expect(errorMessage).toBeNull();
});
