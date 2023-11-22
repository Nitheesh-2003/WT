const { response } = require("express");

function fetchAndDisplayDetails() {
    const inputId = document.getElementById('inputId').value;

    fetch('Library.xml')
        .then(response => response.text())
        .then(xmlData => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlData, 'application/xml');
            displayContent(xmlDoc, inputId);
        })
        .catch(error => console.error('Error fetching XML:', error));
}

function displayContent(xmlDoc, inputId) {
    const xmlContentDiv = document.getElementById('xmlContent');
    xmlContentDiv.innerHTML = '';

    // Iterate through Issued elements and display their content if the ID matches
    const issuedElements = xmlDoc.querySelectorAll('Issued');
    issuedElements.forEach(issuedElement => {
        const bookId = issuedElement.querySelector('Bkid').textContent;

        if (bookId === inputId) {
            const bookName = issuedElement.querySelector('BName').textContent;
            const bookAuthor = issuedElement.querySelector('BAuthor').textContent;
            const date = issuedElement.querySelector('Date').textContent;

            const detailsElement = issuedElement.querySelector('details');
            const detailsName = detailsElement.querySelector('name').textContent;
            const detailsId = detailsElement.querySelector('id').textContent;

            // Create a paragraph for the matching book and details
            const paragraph = document.createElement('p');
            paragraph.innerHTML = `<strong>Book ID:</strong> ${bookId}<br>
                                   <strong>Book Name:</strong> ${bookName}<br>
                                   <strong>Author:</strong> ${bookAuthor}<br>
                                   <strong>Date:</strong> ${date}<br>
                                   <strong>Details:</strong> ${detailsName}, ${detailsId}<br><br>`;

            // Append the paragraph to the content div
            xmlContentDiv.appendChild(paragraph);
        }
    });
}

