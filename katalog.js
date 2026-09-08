//katalog.js
function bookCard(book, showCategory = false) {

    return `
        <div class="book-card min-w-0 flex-col cursor-pointer" onclick="openBookDetail(${book.id})">

            <div class="aspect-[2/3] w-full overflow-hidden rounded-sm bg-gray-200">
                <img
                    src="${book.image}"
                    alt="buku"
                    class="h-full w-full object-cover"
                >
            </div>

            <p class="mt-2 line-clamp-2 text-base font-medium text-gray-800">
                ${book.name}
            </p>

            <p class="mt-1 truncate text-sm text-gray-500">
                ${book.author}
            </p>

            ${showCategory? `
                <p class="mt-1 inline-block rounded-full bg-[#ff9900] px-2 py-[2px] text-[11px] text-white">
                    ${book.category}
                </p>`: ""
            }

        </div>
    `;
}



const lastReadBooks =
    document.getElementById("last-read-books");

const lastReadColors = [
    "#8B543C",
    "#3D657A",
    "#3E4D55",
    "#6B536B",
    "#596B4F"
];

lastReadBooks.innerHTML = books 
    .slice(0, 5) 
    .map((book, index) => ` 
         
        <div 
            class="group relative flex h-[120px] w-[295px] shrink-0 items-center rounded-[16px] px-4 pl-[115px]" 
            style="background-color: ${lastReadColors[index % lastReadColors.length]};"
            
        > 
 
            <div class="absolute left-[10px] top-[-27px] h-[138px] w-[90px] overflow-visible shadow-sm" > 
                <img 
                    src="${book.image}" 
                    alt="${book.name}" 
                    class="h-full w-full object-cover transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:scale-[1.02] group-hover:rotate-[1deg] group-hover:shadow-xl" 
                > 
            </div> 
 
            <div class="min-w-0 text-white"> 
 
                <p class="line-clamp-2 text-lg font-semibold leading-[1.25] font-medium"> 
                    ${book.name} 
                </p> 
 
                <p class="mt-4 text-xs font-normal text-white"> 
                    ${book.rating.rate} ★ · ${book.author} 
                </p> 
 
                <p class="pt-1 text-xs font-normal text-white/80"> 
                    ${book.stock} available · ${book.year} 
                </p> 
 
            </div> 
 
        </div> 
 
    `) 
    .join("");



document.getElementById("recommend-books").innerHTML =
    books
        .slice(0, 6)
        .map(book => bookCard(book))
        .join("");



document.getElementById("new-release-books").innerHTML =
    books
        .slice()
        .sort((a, b) => b.year - a.year)
        .slice(0, 6)
        .map(book => bookCard(book, true))
        .join("");


const categories = [
    "Novel",
    "Romance",
    "Fantasy",
    "Finance",
    "Self Development"
];

const categoryList =
    document.getElementById("category-list");

categoryList.innerHTML = categories
    .map((category, index) => `
        <button
            onclick="filterCategory('${category}')"
            data-category="${category}"
            class="${
                index === 0
                    ? "bg-[#0b55d8] text-white"
                    : "bg-gray-100 text-gray-500"
            } shrink-0 rounded-lg px-3 py-1.5 text-[13px] transition"
        >
            ${category}
        </button>
    `)
    .join("");



function filterCategory(category) {

    const filtered =books.filter(
        book => book.category === category
    );

    document.getElementById("category-books").innerHTML =
        filtered
            .map(book => bookCard(book))
            .join("");

    document
        .querySelectorAll("#category-list button")
        .forEach(button => {

            if (button.dataset.category === category) {

                button.classList.remove(
                    "bg-gray-100",
                    "text-gray-500"
                );

                button.classList.add(
                    "bg-[#001642]",
                    "text-white"
                );

            } else {

                button.classList.remove(
                    "bg-[#001642]",
                    "text-white"
                );

                button.classList.add(
                    "bg-gray-100",
                    "text-gray-500"
                );
            }
        });
}

filterCategory("Novel");


document
    .getElementById("searchInput")
    .addEventListener("input", function () {

        const keyword =
            this.value.toLowerCase().trim();

        const filtered = books.filter(book =>
            book.name.toLowerCase().includes(keyword) ||
            book.author.toLowerCase().includes(keyword) ||
            book.category.toLowerCase().includes(keyword)
        );

        document.getElementById("recommend-books").innerHTML =
            filtered
                .slice(0, 6)
                .map(book => bookCard(book))
                .join("");
    });


const collections = [
    {
        title: "Romance",
        category: "Romance",
        icon: "solar:heart-outline",
        color: "#34566c"
    },
    {
        title: "Fantasy",
        category: "Fantasy",
        icon: "solar:stars-outline",
        color: "#001642"
    },
    {
        title: "Finance",
        category: "Finance",
        icon: "solar:wallet-money-outline",
        color: "#DDB967"
    },
    {
        title: "Self Development",
        category: "Self Development",
        icon: "solar:book-2-outline",
        color: "#6b7c86"
    }
];

const collectionsContainer =
    document.getElementById("collections");

collectionsContainer.innerHTML = collections
    .map(collection => {

        const totalBooks = books.filter(
            book => book.category === collection.category
        ).length;

        return `
            <div
                class="flex relative h-[120px] overflow-hidden rounded-lg p-4 items-center"
                style="background-color: ${collection.color};"
            >

                <div class="relative z-10">

                    <p class="text-[12px] text-white/70">
                        Collection
                    </p>

                    <h3 class="mt-1 text-[18px] font-semibold text-white">
                        ${collection.title}
                    </h3>

                    <p class=" text-[10px] text-white/70">
                        ${totalBooks} Books
                    </p>

                </div>

                <iconify-icon
                    icon="${collection.icon}"
                    class="absolute -bottom-3 -right-2 text-[70px] text-white/20">
                </iconify-icon>

            </div>
        `;
    })
    .join("");


const menuItems = document.querySelectorAll(".sidebar-menu");

menuItems.forEach(item => {

    item.addEventListener("click", function (e) {

        e.preventDefault();

        menuItems.forEach(menu => {

            menu.classList.remove(
                "bg-[#001642]",
                "text-white"
            );

            menu.classList.add(
                "text-gray-700"
            );
        });

        this.classList.remove(
            "text-gray-700"
        );

        this.classList.add(
            "bg-[#001642]",
            "text-white"
        );
    });
});



const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        // Saat scroll → navbar jadi floating
        navbar.classList.add("scrolled");

    } else {

        // Saat kembali ke paling atas → navbar kembali normal
        navbar.classList.remove("scrolled");

    }

});