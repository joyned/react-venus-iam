import './Card.css'

function Card({ title, width, children }) {
    return (
        <div className="card" style={{ width }}>
            {title && (
                <div className="cardTitle">
                    <h1>{title}</h1>
                </div>
            )}
            <div className="cardContent">
                {children}
            </div>
        </div>
    )
}

export default Card;