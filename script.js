document.addEventListener("DOMContentLoaded", () => {
  const musicas = {
    musica1: new Audio("musica/musica1.mp3"),
    musica2: new Audio("musica/musica2.mp3"),
  };

  let musicaAtual = null;

  // Função para tocar uma música, pausando a anterior
  function tocarMusica(nome) {
    if (musicaAtual && !musicaAtual.paused) {
      musicaAtual.pause();
      musicaAtual.currentTime = 0;
    }
    musicaAtual = musicas[nome];
    musicaAtual.play();
    // Se estiver mutado, desmutar automaticamente ao tocar música
    musicaAtual.muted = false;
    document.getElementById("volumeBtn").textContent = "🔊";
  }

  document.getElementById("botaoMusica1").addEventListener("click", () => {
    tocarMusica("musica1");
  });

  document.getElementById("botaoMusica2").addEventListener("click", () => {
    tocarMusica("musica2");
  });

  // Botão volume mute/unmute
  const volumeBtn = document.getElementById("volumeBtn");
  volumeBtn.addEventListener("click", () => {
    if (!musicaAtual) return; // nada se não tiver música tocando

    musicaAtual.muted = !musicaAtual.muted;
    volumeBtn.textContent = musicaAtual.muted ? "🔇" : "🔊";
  });
});
