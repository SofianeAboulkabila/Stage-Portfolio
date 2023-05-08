// BURGER MENU
const toggle = document.getElementsByClassName("toggle");
const item = document.querySelectorAll(".nav-item");
item.forEach(navItem => { 
        function toggleMenu() {
            if (navItem.classList.contains("active") ){
             navItem.classList.remove("active");
            } else {
                navItem.classList.add("active");
            }
        }
        document.querySelector(".toggle").addEventListener("click", toggleMenu);
    });