document.getElementById('submitPropertyForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Property submitted successfully!');
    // Implement your property submission functionality here
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('You have successfully login');
    // Implement your login functionality here
});


document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Get selected values
    const location = document.getElementById('location').value;
    const price = document.getElementById('price').value;
    const roomType = document.getElementById('roomType').value;

    // Check if all fields are filled
    if (location && price && roomType) {
        alert(`Searching for properties in ${location} with price up to ₹${price} and ${roomType}...`);
        // Implement your search functionality here
    } else {
        alert('Please fill in all fields.');
    }
});
