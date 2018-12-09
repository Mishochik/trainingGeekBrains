function chessboardGeneration() {
    const coordinates = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    let chessBoard = document.querySelector('.chessBoard');
    let cell;
    let bg = false;
    let id;

    for (let i = 0; i < 8; i++) {
        id = 8 - i;
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
            id = 8 - i;
        }
        bg = !bg;
    }
}

function placementOfFigures(colorOfFigures) {
    const coordinates = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    let white = [];
    let black = [];
    if (colorOfFigures === 'white') {
        white.push(2);
        white.push(1);
        white.push('D');
        white.push('E');
        black.push(7);
        black.push(8);
        black.push('E');
        black.push('D');
    } else if (colorOfFigures === 'black') {
        white.push(7);
        white.push(8);
        white.push('E');
        white.push('D');
        black.push(2);
        black.push(1);
        black.push('D');
        black.push('E');
    }

    for (let i = 0; i < 8; i++) {
        let pawn = document.getElementById(coordinates[i] + (white[0]));
        pawn.className += ' whitePawn';
    }
    let whiteRook1 = document.getElementById(`A${white[1]}`); // Ладья 
    let whiteRook2 = document.getElementById(`H${white[1]}`); // Ладья 
    whiteRook1.className += ' whiteRook';
    whiteRook2.className += ' whiteRook';
    let whiteHorse1 = document.getElementById(`B${white[1]}`); // Конь 
    let whiteHorse2 = document.getElementById(`G${white[1]}`); // Конь 
    whiteHorse1.className += ' whiteHorse';
    whiteHorse2.className += ' whiteHorse';
    let whiteElephant1 = document.getElementById(`C${white[1]}`); // Слон 
    let whiteElephant2 = document.getElementById(`F${white[1]}`); // Слон 
    whiteElephant1.className += ' whiteElephant';
    whiteElephant2.className += ' whiteElephant';
    let whiteQueen = document.getElementById(white[2] + white[1]); // Ферзь 
    whiteQueen.className += ' whiteQueen';
    let whiteKing = document.getElementById(white[3] + white[1]); // Король 
    whiteKing.className += ' whiteKing';

    for (let i = 0; i < 8; i++) {
        let pawn = document.getElementById(coordinates[i] + (black[0]));
        pawn.className += ' blackPawn';
    }
    let blackRook1 = document.getElementById(`A${black[1]}`); // Ладья 
    let blackRook2 = document.getElementById(`H${black[1]}`); // Ладья 
    blackRook1.className += ' blackRook';
    blackRook2.className += ' blackRook';
    let blackHorse1 = document.getElementById(`B${black[1]}`); // Конь 
    let blackHorse2 = document.getElementById(`G${black[1]}`); // Конь 
    blackHorse1.className += ' blackHorse';
    blackHorse2.className += ' blackHorse';
    let blackElephant1 = document.getElementById(`C${black[1]}`); // Слон 
    let blackElephant2 = document.getElementById(`F${black[1]}`); // Слон 
    blackElephant1.className += ' blackElephant';
    blackElephant2.className += ' blackElephant';
    let blackKing = document.getElementById(black[2] + black[1]); // Король
    blackKing.className += ' blackKing';
    let blackQueen = document.getElementById(black[3] + black[1]); // Ферзь 
    blackQueen.className += ' blackQueen';
}

chessboardGeneration();
placementOfFigures('white');