import './css/Navigation.css';

const Navigation = () => {
    return(
        <div className="nav">
            <h2>Navigation</h2>
            <ul className="nav_list">
                <li className="nav_item"><a href="#">Link-1</a></li>
                <li className="nav_item"><a href="#">Link-2</a></li>
                <li className="nav_item"><a href="#">Link-3</a></li>
                <li className="nav_item"><a href="#">Link-4</a></li>
                <li className="nav_item"><a href="#">Link-5</a></li>
            </ul>
        </div>
    )
}

export default Navigation;