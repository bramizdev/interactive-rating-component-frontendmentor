'use strict';

const radioButtonsContainer = document.querySelector('.rating-form-container');
const labels = document.querySelectorAll('.rating-form-option');
const selectionBtns = document.querySelectorAll('.radio-button-selection');
const selectionText = document.querySelector('.rating-submitted-selection');
const submitBtn = document.querySelector('.submit');
const ratingState = document.querySelector('.rating');
const ratingSubmittedState = document.querySelector('.rating-submitted');

const getSelection = () => {
  let selection;
  selectionBtns.forEach((sel) => {
    if (sel.checked) selection = sel.value;
  });
  return selection;
};

const handleSubmit = () => {
  selectionText.textContent = `You selected ${getSelection()} out of 5`;
  ratingState.classList.add('hidden');
  ratingSubmittedState.classList.remove('hidden');
};

radioButtonsContainer.addEventListener('click', (e) => {
  if (!e.target.classList.contains('rating-form-option')) return;
  const clickedFor = e.target.htmlFor;
  labels.forEach((label) => label.classList.remove('selected-label'));
  labels.forEach((label) => {
    if (label.htmlFor === clickedFor) label.classList.add('selected-label');
  });
});

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  handleSubmit();
});
