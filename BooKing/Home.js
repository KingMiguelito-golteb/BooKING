// Data
const newArrivals = [
    {
        id: 1,
        title: "The Enchanted Forest",
        description: "A tale of magic and adventure.",
        image: "Assets/book1.png",
    },
    {
        id: 2,
        title: "The Silent Witness",
        description: "A thrilling mystery.",
        image: "Assets/book2.png",
    },
    {
        id: 3,
        title: "Beyond the Stars",
        description: "Explore the future.",
        image: "Assets/book3.png",
    },
    {
        id: 4,
        title: "Echoes of the Past",
        description: "A journey through history.",
        image: "Assets/book4.png",
    },
    {
        id: 5,
        title: "The City of Dreams",
        description: "A story of ambition and love.",
        image: "Assets/book5.png",
    },

];

const bestsellers = [
    {
        id: 1,
        title: "The City of Dreams",
        description: "A story of ambition and love.",
        image: "Assets/book6.png",
    },
    {
        id: 2,
        title: "The Hidden Truth",
        description: "A page-turning thriller.",
        image: "Assets/book7.png",
    },
    {
        id: 3,
        title: "Love in Bloom",
        description: "A heartwarming romance.",
        image: "Assets/book8.png",
    },
    {
        id: 4,
        title: "Fantasy Novel",
        description: "A coming-of-age story.",
        image: "Assets/book1.png",
    },
    {
        id: 5,
        title: "The Enchanted Forest",
        description: "A tale of magic and adventure.",
        image: "Assets/book4.png",
    },
];

const categories = [
    {
        id: 1,
        name: "Fantasy",
        image: "https://images.unsplash.com/photo-1518818608552-195ed130cdf4?w=400&h=300&fit=crop",
    },
    {
        id: 2,
        name: "Mystery",
        image: "https://images.unsplash.com/photo-1481026469463-66327c86e544?w=400&h=300&fit=crop",
    },
    {
        id: 3,
        name: "Science Fiction",
        image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=300&fit=crop",
    },
    {
        id: 4,
        name: "Historical Fiction",
        image: "https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?w=400&h=300&fit=crop",
    },
    {
        id: 5,
        name: "Contemporary",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
    },
    {
        id: 6,
        name: "Thriller",
        image: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?w=400&h=300&fit=crop",
    },
    {
        id: 7,
        name: "Romance",
        image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=300&fit=crop",
    },
    {
        id: 8,
        name: "Young Adult",
        image: "https://images.unsplash.com/photo-1487260211189-670c54da558d?w=400&h=300&fit=crop",
    },
];

// Carousel Class
class Carousel {
    constructor(carouselId, leftBtnId, rightBtnId, books) {
        this.carousel = document.getElementById(carouselId);
        this.leftBtn = document.getElementById(leftBtnId);
        this.rightBtn = document.getElementById(rightBtnId);
        this.books = books;
        this.currentIndex = 0;
        this.itemsToShow = this.getItemsToShow();
        
        this.init();
        this.updateButtons();
        
        // Handle window resize
        window.addEventListener('resize', () => {
            this.itemsToShow = this.getItemsToShow();
            this.currentIndex = 0;
            this.updateCarousel();
        });
    }

    getItemsToShow() {
        if (window.innerWidth >= 1024) return 4;
        if (window.innerWidth >= 768) return 3;
        return 2;
    }

    init() {
        // Render books
        this.books.forEach(book => {
            const bookCard = document.createElement('div');
            bookCard.className = 'book-card';
            bookCard.innerHTML = `
                <img src="${book.image}" alt="${book.title}" class="book-image">
                <div class="book-info">
                    <h3 class="book-title">${book.title}</h3>
                    <p class="book-description">${book.description}</p>
                </div>
            `;
            this.carousel.appendChild(bookCard);
        });

        // Add event listeners
        this.leftBtn.addEventListener('click', () => this.prev());
        this.rightBtn.addEventListener('click', () => this.next());
    }

    updateCarousel() {
        const cardWidth = this.carousel.querySelector('.book-card').offsetWidth;
        const gap = 24; // 1.5rem gap
        const offset = -(this.currentIndex * (cardWidth + gap));
        this.carousel.style.transform = `translateX(${offset}px)`;
        this.updateButtons();
    }

    updateButtons() {
        const maxIndex = Math.max(0, this.books.length - this.itemsToShow);
        this.leftBtn.disabled = this.currentIndex === 0;
        this.rightBtn.disabled = this.currentIndex >= maxIndex;
    }

    next() {
        const maxIndex = Math.max(0, this.books.length - this.itemsToShow);
        if (this.currentIndex < maxIndex) {
            this.currentIndex++;
            this.updateCarousel();
        }
    }

    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateCarousel();
        }
    }
}

// Initialize Categories Grid
function initCategories() {
    const categoriesGrid = document.getElementById('categoriesGrid');
    
    categories.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        categoryCard.innerHTML = `
            <img src="${category.image}" alt="${category.name}" class="category-image">
            <div class="category-overlay">
                <h3 class="category-name">${category.name}</h3>
            </div>
        `;
        categoriesGrid.appendChild(categoryCard);
    });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    // Initialize carousels
    new Carousel('newArrivalsCarousel', 'newArrivalsLeft', 'newArrivalsRight', newArrivals);
    new Carousel('bestsellersCarousel', 'bestsellersLeft', 'bestsellersRight', bestsellers);
    
    // Initialize categories
    initCategories();
});