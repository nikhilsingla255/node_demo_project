

export default function Login() {


    return(
        <div className="container mt-5" style={{maxWidth: "400px"}}>
            <div className="card p-4 shadow">
                <div className="card-header">
                    <h2>Login Form</h2>
                </div>
                <div className="card-body">
                    <form>                
                        <input placeholder="Email" type="text"
                        className="form-control"/>
                        <br/>
                        <input placeholder="Password" type="password" 
                        className="form-control"/>
                        <br/>
                        <button type="submit" className="btn btn-primary">Login</button>
                        <br/>
                        New User? <a href="#">Sign Up</a>
                    
                    </form>
                </div>
                
            </div>
        </div>
        
    )
}