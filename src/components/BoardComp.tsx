import React, { FC, useEffect, useState } from 'react';
import { Board } from '../models/Board';
import CellComp from './CellComp';
import { Cell } from '../models/Cell';
import Player from '../models/Player';
import { Colors } from '../models/Colors';


interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
    currentPlayer: Player | null;
    swapPlayer: () => void;
}

const BoardComp: FC<BoardProps> = ({ board, setBoard, currentPlayer, swapPlayer }) => {

    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

    useEffect(() => {
        highlightCells();
    }, [selectedCell])

    function clickOnCell(cell: Cell) {
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell);
            setSelectedCell(null);
            swapPlayer()
        } else {
            if (cell.figure?.color === currentPlayer?.color) {
                setSelectedCell(cell);
            }
        }
    }
    function highlightCells() {
        board.highlightCells(selectedCell);
        updateBoard();
    }
    function updateBoard() {
        const newBoard = board.getCopyBoard();
        setBoard(newBoard);
    }

    return (
        <div>
            <h3>Ход {currentPlayer?.color === Colors.WHITE ? "белых" : "чёрных"}</h3>
            <div className='board'>
                {board.cells.map((row, index) =>
                    <React.Fragment key={index}>
                        {row.map(cell =>
                            <CellComp
                                key={cell.id}
                                cell={cell}
                                selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                                clickFunc={clickOnCell}
                            />
                        )}
                    </React.Fragment>
                )

                }
            </div>
        </div>
    )
}

export default BoardComp;
