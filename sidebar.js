function setActiveSidebar(menuName) {
    const menuItems = document.querySelectorAll(".sidebar-menu");

    menuItems.forEach(menu => {
        const text = menu.querySelector("span")?.textContent.trim();

        menu.classList.remove(
            "bg-[#001642]",
            "text-white"
        );

        menu.classList.add("text-gray-700");

        if (text === menuName) {
            menu.classList.remove("text-gray-700");

            menu.classList.add(
                "bg-[#001642]",
                "text-white"
            );
        }
    });
}


function showAddBook() {
    document.getElementById("dashboard").classList.add("hidden");
    document.getElementById("addBookPage").classList.remove("hidden");

    setActiveSidebar("Add new books");
}


function showDashboard() {
    document.getElementById("addBookPage").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");

    setActiveSidebar("Dashboard");
}


function cancelAddBook() {
    document.getElementById("addBookForm").reset();
}