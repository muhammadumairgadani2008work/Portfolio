const pageName = document.getElementsByClassName("page")[0].innerText;

// The desktop nav and the mobile menu reuse the same ids, so select all matches.
document.querySelectorAll(`[id="${pageName}-page"]`).forEach((link) => {
    link.style.textDecoration = "underline";
    link.style.color = "#C7A05B";
});
