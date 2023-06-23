import { Link } from "react-router-dom"

const DashBoard = () => {
    return (
        <nav>
            <Link to='/home'>
                <button type="button">Home</button>
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/products'>
                <button type="button">Products</button>
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to='/products/add'>
                <button type="button">Add</button>
            </Link>
        </nav>
    )
}

export default DashBoard