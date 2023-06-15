import './Table.css';

function Table(tableProps) {
    return (
        <table>
            {tableProps.children}
        </table>
    )
}

export default Table;