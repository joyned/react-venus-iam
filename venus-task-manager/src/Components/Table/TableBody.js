import './Table.css';

function TableBody(tableBodyItem) {
    return (
        <tbody>
            {tableBodyItem.children ? tableBodyItem.children.map((c, index) => {
                return <tr key={index}>
                    {c}
                </tr>
            }) : (
                <tr>
                    <td>No data</td>
                </tr>
            )}
        </tbody>
    )
}

export default TableBody;