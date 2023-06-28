import React from 'react'
import { Figure } from '../models/figures/Figure'
import { Cell } from '../models/Cell'

interface CellProps {
  cell: Cell,
  selected: boolean,
  clickFunc: (cell: Cell) => void,
}

const CellComp: React.FC<CellProps> = ({ cell, selected, clickFunc }) => {
  const figureClasses = `cell ${cell.color} ${selected ? 'selected' : ''} 
    ${cell.available && cell.figure ? 'available_figure' : ''}`
  return (
    <div
      className={figureClasses}
      onClick={() => clickFunc(cell)}
    >
      {cell.available && !cell.figure && <div className='available'></div>}
      {cell.figure?.logo && <img src={cell.figure.logo} />}
    </div>
  )
}

export default CellComp