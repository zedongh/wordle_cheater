let item = JSON.parse(window.localStorage.getItem('nyt-wordle-state'))
item.boardState[0] = item?.solution
item.evaluations[0] = Array.from({length: item?.solution.length}, () => "correct")
item.gameStatus = "WIN"
item.rowIndex = 1
item.lastPlayedTs = Date.now()
item.lastCompletedTs = Date.now()
window.localStorage.setItem('nyt-wordle-state', JSON.stringify(item))
window.location.reload()