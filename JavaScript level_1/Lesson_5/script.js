function chessboardGeneration() {
    const coordinates = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    let chessBoard = document.querySelector('.chessBoard');
    let cell;
    let bg = false;
    let id;

    for (let i = 0; i < 8; i++) {
        id = i + 1;
        for (let n = 0; n < 8; n++) {
            id = coordinates[n] + id;
            cell = document.createElement('div');
            if (bg) {
                cell.id = id;
                cell.className = 'cell bg';
            } else {
                cell.id = id;
                cell.className = 'cell';
            }
            chessBoard.appendChild(cell);
            bg = !bg;
            id = i + 1;
        }
        bg = !bg;
    }
}

chessboardGeneration();
