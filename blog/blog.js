const articles = [
    {
        id: 1,
        title: 'Septimus Heap Book One: Magyk',
        date: 'July 5, 2022',
        description:
            'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
        imgAlt: 'Book cover for Septimus Heap 1',
        ages: '10-14',
        genre: 'Fantasy',
        stars: '****'
    },
    {
        id: 2,
        title: 'Magnus Chase Book One: Sword of Summer',
        date: 'December 12, 2021',
        description:
            'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
        imgSrc:
            'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
        imgAlt: 'Book cover for Magnus Chase 1',
        ages: '12-16',
        genre: 'Fantasy',
        stars: '⭐⭐⭐⭐'
    }
]

const bookList = document.getElementById("book-list");

articles.forEach(article => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    bookDiv.innerHTML = `
                <div class="book-meta">
                    <div class="date">${article.date}</div>
                    <div class="age-range">${article.ages}</div>
                    <div class="genre">${article.genre}</div>
                    <div class="rating">${article.stars}</div>
                </div>
                <div class="book-info">
                    <div class="book-title">${article.title}</div>
                    <img src="${article.imgSrc}" alt="${article.imgAlt}">
                    <p class="book-summary">
                    <span class="short-description">${article.description.slice(0, 100)}...</span>
                    <span class="full-description" style="display:none;">${article.description}</span>
                    <a href="#" class="read-more" onclick="toggleDescription(this)">Read More...</a>
                    </p>
                </div>
                
            `;

    bookList.appendChild(bookDiv);
});

function toggleDescription(link) {
    var description = link.closest('.book-summary');

    
    var shortDescription = description.querySelector('.short-description');
    var fullDescription = description.querySelector('.full-description');

   
    if (fullDescription.style.display === "none") {
        shortDescription.style.display = "none"; 
        fullDescription.style.display = "inline"; 
        link.textContent = "Read Less"; 
    } else {
        shortDescription.style.display = "inline"; 
        fullDescription.style.display = "none"; 
        link.textContent = "Read More..."; 
    }
};