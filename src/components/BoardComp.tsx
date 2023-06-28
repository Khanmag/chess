import React, { FC, useEffect, useState } from 'react'
import { Board } from '../models/Board'
import CellComp from './CellComp';
import { Cell } from '../models/Cell';


interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void
}

const BoardComp: FC<BoardProps> = ({ board, setBoard }) => {

    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

    useEffect( () => {
        highlightCells()
    }, [selectedCell])

    function clickOnCell(cell: Cell) {
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell);
            setSelectedCell(null);
        } else {
            setSelectedCell(cell)
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
    )
}

export default BoardComp
