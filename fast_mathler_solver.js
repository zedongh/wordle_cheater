let item = JSON.parse(window.localStorage.getItem('gameState'))
item.guesses[0] = item.solution.split('')
window.localStorage.setItem('gameState', JSON.stringify(item))
window.location.reload()