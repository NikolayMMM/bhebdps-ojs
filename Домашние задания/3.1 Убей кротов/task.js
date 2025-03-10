(() => {
  let playing = true,
    activeHole = 1,
    wins = 0,
    losses = 0;

  const stop = () => playing = false,
    getHole = index => document.getElementById(`hole${index}`),
    deactivateHole = index =>
      getHole(index).className = 'hole',
    activateHole = index =>
      getHole(index).className = 'hole hole_has-mole',
    updateScore = () => {
      document.getElementById('dead').textContent = wins;
      document.getElementById('lost').textContent = losses;
    },
    checkWinOrLose = () => {
      if (wins === 10) {
        alert("Победа! Вы убили 10 кротов!");
        resetGame();
      } else if (losses === 5) {
        alert("Поражение! Вы пропустили 5 кротов.");
        resetGame();
      }
    },
    resetGame = () => {
      wins = 0;
      losses = 0;
      updateScore();
    },
    handleClick = (index) => {
      if (!playing) return;

      if (getHole(index).classList.contains('hole_has-mole')) {
        wins++;
      } else {
        losses++;
      }

      updateScore();
      checkWinOrLose();
    },
    next = () => setTimeout(() => {
      if (!playing) {
        return;
      }
      deactivateHole(activeHole);
      activeHole = Math.floor(1 + Math.random() * 9);
      activateHole(activeHole);
      next();
    }, 800);

  // Регистрация обработчиков кликов для всех лунок
  for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = () => handleClick(i);
  }

  next();
})();
