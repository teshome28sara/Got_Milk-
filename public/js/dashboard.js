const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#ingredient-name').value.trim();
    const quantity = document.querySelector('#ingredient-quantity').value.trim();
    // const is_purchased = document.querySelector('#is-purchased').value.trim();
  
    if (name && quantity) {
      const response = await fetch(`/api/ingredients`, {
        method: 'POST',
        body: JSON.stringify({ name, quantity}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
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
  
  // document
  //   .querySelector('.ingredient-list')
  //   .addEventListener('click', delButtonHandler);
  