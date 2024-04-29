const showPricesButtons = document.querySelectorAll('.show-prices-button');

showPricesButtons.forEach(button => {
  button.addEventListener('click', () => {
    const pastaItem = button.closest('.pasta-item'); // Find the closest pasta item container

    // Find the prices element and overlay element within the current pasta item
    const prices = pastaItem.querySelector('.pasta-item-prices');
    const overlay = pastaItem.querySelector('.pasta-item-prices-overlay');

  // Toggle the display of prices and overlay for the current pasta item only
  if (prices.style.display === 'table') {
    prices.style.display = 'none';
    overlay.style.display = 'none';
  } else {
    prices.style.display = 'table';
    overlay.style.display = 'block';
  }
  
    });
  
  });

