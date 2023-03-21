const list = document.querySelector('.burgers_list');

list.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('burgers_button')) {
    updateButton(target);
    toggleIngredients(target.parentElement);
  }
});

const updateButton = (button) => {
  button.value = button.value === 'Detalis' ? 'Reduce' : 'Detalis';
};

// const toggleIngredients = (parent) => {
//   const ingredients = parent.querySelector('.burgers_ingredients');
//   const title = parent.querySelector('.burgers_ingredients--title');
//   if (ingredients && title) {
//     title.remove();
//     ingredients.remove();
//   } else {
//     const title = createTitle();
//     const compound = createCompound();
//     parent.append(title, compound);
//   }
// };

// const toggleIngredients = (parent) => {
//   const ingredients = parent.querySelector('.burgers_ingredients');
//   const title = parent.querySelector('.burgers_ingredients--title');
//   if (ingredients && title) {
//     title.remove();
//     ingredients.remove();
//   } else {
//     const title = createTitle();
//     const compound = createCompound();
//     parent.append(title, compound);
//   }
// };

const toggleIngredients = (button) => {
  const parent = button.closest('.burgers_list--item');
  const ingredients = parent.querySelector('.burgers_ingredients');
  const title = parent.querySelector('.burgers_ingredients--title');
  if (ingredients && title) {
    title.remove();
    ingredients.remove();
  } else {
    const title = createTitle();
    const compound = createCompound();
    parent.append(title, compound);
  }
};

const createTitle = () => {
  const title = document.createElement('h4');
  title.textContent = 'Ingredient';
  title.classList.add('burgers_ingredients--title');
  return title;
};

const createCompound = () => {
  const compound = document.createElement('ul');
  compound.classList.add('burgers_ingredients');
  const ingredients = ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'];
  ingredients.forEach((ing) => {
    const li = document.createElement('li');
    li.classList.add('burgers_ingredients--item');
    li.textContent = ing;
    compound.append(li);
  });
  return compound;
};
