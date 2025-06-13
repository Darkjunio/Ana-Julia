console.log("Página de vídeo carregada com sucesso!");

document.addEventListener("DOMContentLoaded", () => {
    const h1 = document.querySelector("h1");
    h1.style.opacity = 0;
    h1.style.transition = "opacity 2s ease-in-out";

    setTimeout(() => {
        h1.style.opacity = 1;
    }, 500);

    const video = document.querySelector("video");
    video.style.transform = "scale(0.95)";
    video.style.transition = "transform 0.8s ease-in-out";

    setTimeout(() => {
        video.style.transform = "scale(1)";
    }, 800);
});