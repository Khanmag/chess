import React from 'react'
import { Figure } from '../models/figures/Figure'

interface CellProps {
    color: 'white' | 'black',
    figure: Figure | null,
}

const CellComp:React.FC<CellProps> = ({color, figure}) => {
  return (
    <div className={`cell ${color}`}>
        {figure?.logo && <img src= {figure.logo} />}
    </div>
  )
}

export default CellComp