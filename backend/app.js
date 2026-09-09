// Memastikan semua DOM & script pendukung selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
    // 1. AMBIL DATA DARI API / LOCALSTORAGE (book.js)
    const rawBooks = getAllBooks();

    // Mapping data biar properti key-nya pas sama elemen UI FE
    const formattedBooks = rawBooks.map(book => ({
        id: book.id,
        name: book.name || book.title,
        category: book.category || "Uncategorized",
        price: book.price || 0,
        author: book.author || "Unknown",
        image: book.image || "https://via.placeholder.com/150",
        rating: book.rating?.rate || book.rating || 0,
        description: book.description || "-",
        stock: book.stock || 0,
        pages: book.pages || 0
    }));

    // 2. CEK & PANGGIL FUNCTION RENDER BAWAAN FE
    function triggerFERender(data) {
        if (typeof renderKatalog === "function") {
            renderKatalog(data);
        } else if (typeof showBooks === "function") {
            showBooks(data);
        } else if (typeof renderData === "function") {
            renderData(data);
        } else if (typeof displayBooks === "function") {
            displayBooks(data);
        }
    }

    // Jalankan render awal
    triggerFERender(formattedBooks);

    // 3. AMBIL ELEMEN UNTUK FITUR PENCARIAN & FILTER
    const searchInput = document.querySelector("input[type='text'], #searchInput, .search-input");
    const categorySelect = document.querySelector("select, #categoryFilter, .category-select");

    function applyFilter() {
        const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
        const category = categorySelect ? categorySelect.value : "All";

        const filteredData = formattedBooks.filter(book => {
            const matchesSearch = book.name.toLowerCase().includes(query) || 
                                  book.author.toLowerCase().includes(query);
            const matchesCategory = category === "All" || category === "" || book.category === category;
            
            return matchesSearch && matchesCategory;
        });

        triggerFERender(filteredData);
    }

    // Event Listener buat Search & Filter
    if (searchInput) searchInput.addEventListener("input", applyFilter);
    if (categorySelect) categorySelect.addEventListener("change", applyFilter);

    // 4. INTEGRASI MODAL DETAIL (SAAT KARTU DIKLIK)
    document.addEventListener("click", (e) => {
        const card = e.target.closest(".card, [data-id], .book-item");
        if (!card) return;

        const bookId = card.dataset.id || card.getAttribute("data-id");
        if (!bookId) return;

        const selectedBook = getBookById(Number(bookId));
        if (selectedBook && typeof openModal === "function") {
            openModal(selectedBook);
        }
    });
});