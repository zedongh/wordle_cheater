function repeat(n, item) {
    result = [];
    for (let i = 0; i < n; i++) {
        result.push(item);
    }
    return result;
}

let item = JSON.parse(window.localStorage.getItem('nyt-wordle-state'))
item.boardState[0] = item?.solution
item.evaluations[0] = repeat(item?.solution.length, "correct")
item.gameStatus = "WIN"
item.rowIndex = 1
item.lastPlayedTs = Date.now()
item.lastCompletedTs = Date.now()
window.localStorage.setItem('nyt-wordle-state', JSON.stringify(item))
window.location.reload()