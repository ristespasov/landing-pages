// Open modal function
function openModal(planName, planPrice) {
  document.getElementById('modal-header').innerText = planName + ' | ' + planPrice;
  document.getElementById('myModal').style.display = 'flex';
}

// Close modal function
function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}

// Check if all inputs are filled to enable the Pay button
function checkInputs() {
  const email = document.getElementById('emailInput').value;
  const card = document.getElementById('cardInput').value;
  const expiry = document.getElementById('expiryInput').value;
  const csv = document.getElementById('csvInput').value;

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidCard = /^\d{4} \d{4} \d{4} \d{4}$/.test(card);
  const isValidExpiry = /^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry);
  const isValidCSV = /^\d{3}$/.test(csv);

  document.getElementById('payBtn').disabled = !(isValidEmail && isValidCard && isValidExpiry && isValidCSV);
}

// Attach event listeners to input fields
document.getElementById('emailInput').addEventListener('input', checkInputs);
document.getElementById('cardInput').addEventListener('input', checkInputs);
document.getElementById('expiryInput').addEventListener('input', checkInputs);
document.getElementById('csvInput').addEventListener('input', checkInputs);

// Dummy payment function (replace with actual payment processing logic)
function pay() {
  alert('Payment successful!');
  closeModal();
}
