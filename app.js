document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const days = parseInt(document.getElementById('days').value);
    if (isNaN(days) || days <= 0) {
      alert('Please enter a valid number of days.');
      return;
    }
    const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + days);
  const expirationDateString = expirationDate.toDateString();
  alert('Your package will expire on ' + expirationDateString + '.');

  });
  