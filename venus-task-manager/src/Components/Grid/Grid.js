import React from 'react';
import './Grid.css';

function Grid({ columns, children }) {
    if (Array.isArray(children)) {
        let repeatNum = 1;

        if (columns) {
            repeatNum = columns;
        }

        const gridStyle = {
            gridTemplateColumns: `repeat(${repeatNum}, 1fr)` ,
        };

        return (
            <div className="grid" style={gridStyle}>
                {children.map(item => {
                    return <div className="grid-item">{item}</div>
                })}
            </div>
        )
    } else {
        return (
            <div className="grid">
                <div className="grid-item">{children}</div>
            </div>
        )
    }
}


export default Grid;