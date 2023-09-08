const sidebar = document.getElementById("sidebar");
const sidebarBtn = document.getElementById("sidebar-btn");

sidebarBtn.addEventListener("click", () => {
    if (sidebar.classList.contains("d-none")) {
        sidebar.classList.remove("d-none");
    } else {
        sidebar.classList.add("d-none");
    }
})

