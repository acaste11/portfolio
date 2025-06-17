function toggleBio() {
    const moreText = document.getElementById("more");
    const btn = event.target;

    if (moreText.style.display === "none"){
        moreText.style.display = "inline";
        btn.textContent = "Read Less";
    }
    else {
        moreText.style.display = "none";
        btn.textContent = "Read More";
    }
}

