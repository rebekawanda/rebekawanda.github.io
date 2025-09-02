document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("framesTrack");
    const prevBtn = document.querySelector(".nav.prev");
    const nextBtn = document.querySelector(".nav.next");

    const scrollAmount = 320; // distância para rolar (ajuste se quiser)

    prevBtn.addEventListener("click", () => {
        track.scrollBy({
            left: -scrollAmount,
            behavior: "smooth"
        });
    });

    nextBtn.addEventListener("click", () => {
        track.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });
    });
});