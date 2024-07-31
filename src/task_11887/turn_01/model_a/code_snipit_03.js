function executeDatabaseQuery(query) {
    fetch('/executeQuery', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query: query })
    })
        .then(response => response.json())
        .then(data => {
            console.log('Database query result:', data);
            // Here you can handle the results returned from the database
        })
        .catch(error => console.error('Error:', error));
}