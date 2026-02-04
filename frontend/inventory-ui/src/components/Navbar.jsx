export default function Navbar() {

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
           <span className="navbar-brand">Inventory Management System</span>
           <span className="text-light" style={{"margin-left": "66%"}}>
            Hello User
            <button className="btn btn-sm btn-outline-light ms-3">Logout</button>
           </span>
        </nav>
    )
}