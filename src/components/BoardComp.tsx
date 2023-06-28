import React, { FC } from 'react'
import { Board } from '../models/Board'
import CellComp from './CellComp';


interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void
}

const BoardComp:FC<BoardProps> = ({board, setBoard}) => {
    return (
        <div className='board'>
            {board.cells.map((row, index) => 
                <React.Fragment key={index}>
                    {row.map(cell => 
                        <CellComp key={cell.id} color={cell.color} figure={cell.figure}/>
                    )}
                </React.Fragment>
            )

            }
        </div>
    )
}

export default BoardComp
