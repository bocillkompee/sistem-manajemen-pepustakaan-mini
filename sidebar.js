function generateRatingStars(rating) {

    rating = Number(rating) || 0;
    let stars = "";
    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            stars += `
                <iconify-icon
                    class="iconify text-[18px]"
                    icon="material-symbols:star-rounded"
                ></iconify-icon>
            `;
        } else if (rating >= i - 0.5) {
            stars += `
                <iconify-icon
                    class="iconify text-[18px]"
                    icon="material-symbols:star-half-rounded"
                ></iconify-icon>
            `;

        } else {
            stars += `
                <iconify-icon
                    class="iconify text-[18px]"
                    icon="material-symbols:star-outline-rounded"
                ></iconify-icon>
                
            `;
        }
    }
    return stars;
}
function openBookDetail(bookId) {

    const book = books.find(book => book.id === bookId);
    if (!book) return;
    document.getElementById("detailImage").src =
        book.image;

    document.getElementById("detailImage").alt =
        book.name;

    document.getElementById("detailTitle").textContent =
        book.name;

    document.getElementById("detailAuthor").textContent =
        book.author;

    document.getElementById("detailRating").textContent =
        book.rating.rate.toFixed(1);

    document.getElementById("detailRatingStars").innerHTML =
        generateRatingStars(book.rating.rate);
    
    document.getElementById("detailPages").textContent =
        book.pages

    document.getElementById("detailReviews").textContent =
        book.reviews || book.rating.count;

    document.getElementById("detailCategory").textContent =
        book.category;

    document.getElementById("detailDescription").textContent =
        book.description;

    document
        .getElementById("bookSidebar")
        .classList
        .remove("hidden");

    document
        .getElementById("bookDetail")
        .classList
        .remove("translate-x-full");

    document.body.classList.add("overflow-hidden");

}

function closeBookDetail() {

    document
        .getElementById("bookDetail")
        .classList
        .add("translate-x-full");

    document
        .getElementById("bookSidebar")
        .classList
        .add("hidden");

    document.body.classList.remove("overflow-hidden");

}

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeBookDetail();
    }

});