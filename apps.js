document.getElementById('searchBtn').addEventListener('click', function() {
    // Get the search query and sanitize it
    var query = document.getElementById('searchBox').value.trim();
    query = encodeURIComponent(query); // Sanitize the input

    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Configure it: GET-request for the URL /superheroes.php with query parameter
    xhr.open('GET', 'superheroes.php?query=' + query, true);

    // Set up a function to handle the response
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Parse the response as JSON (assuming the PHP script returns JSON)
            var response = JSON.parse(xhr.responseText);

            var resultDiv = document.getElementById('result');
            resultDiv.innerHTML = ''; // Clear any existing content

            if (response.length > 0) {
                // If there are results, create a list to display them
                var ul = document.createElement('ul');
                response.forEach(function(hero) {
                    var li = document.createElement('li');
                    li.textContent = hero.name; // Assuming the response has a 'name' field
                    ul.appendChild(li);
                });
                resultDiv.appendChild(ul);
            } else {
                resultDiv.innerHTML = '<p>No superheroes found</p>';
            }
        }
    };

    // Send the request
    xhr.send();
});
