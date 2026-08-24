fetch('./404.json')
  .then(response => response.json())
  .then(data => {
    document.body.innerHTML = `<p>${data.error}</p>`
  })
  .catch(error => console.error('Read Error:', error));