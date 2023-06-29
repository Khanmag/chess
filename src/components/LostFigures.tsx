import React, { FC } from 'react'
import { Figure } from '../models/figures/Figure';

interface LostFiguresProps {
    color: string;
    figures: Figure[];
}

const LostFigures: FC<LostFiguresProps> = ({ color, figures }) => {
    return (
        <div className='lost_figures'>
            <h3>{color}</h3>
            {figures.map(figure =>
            <div>
                {figure.logo && <img width={20} height={20} src={figure.logo}/>}
            </div>
            )}
        </div>
    )
}

export default LostFigures
