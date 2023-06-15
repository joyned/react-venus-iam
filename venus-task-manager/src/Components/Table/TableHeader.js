import './Table.css';

function TableHeader(headers) {
    return (
        <thead>
            <tr key={Math.random()}>
                {headers.children}
            </tr>
        </thead>
    )
}

export default TableHeader;