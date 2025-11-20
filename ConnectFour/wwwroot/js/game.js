//wwwroot/js/game.js

window.playDropSound = () => {
    
    const audio = new Audio('audio/drop.wav'); 
    
  
    audio.volume = 0.5; 
    
    audio.play()
        .catch(error => {
            // Captura erros se o navegador bloquear a reprodução automática, por exemplo.
            console.error("Erro ao reproduzir som:", error);
        });
};