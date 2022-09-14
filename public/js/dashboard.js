const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#ingredient-name').value.trim();
    const ingredient_cost = document.querySelector('#ingredient-cost').value.trim();
    const is_purchased = document.querySelector('#is-purchased').value.trim();
  
    if (name && ingredient_cost && is_purchased) {
      const response = await fetch(`/api/ingredients`, {
        method: 'POST',
        body: JSON.stringify({ name, ingredient_cost, is_purchased }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/ingredient');
      } else {
        alert('Failed to add ingredient');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/ingredients/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete ingredient');
      }
    }
  };
  
  document
    .querySelector('.new-ingredient-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.ingredient-list')
    .addEventListener('click', delButtonHandler);
  