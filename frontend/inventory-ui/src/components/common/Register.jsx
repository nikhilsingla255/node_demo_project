
export default function Register() {

    return (
        <div className="container mt-5">
            <div className="card p-4 shadow">
                <div className="card-header bg-primary text-light">
                    <h2>Register</h2>
                </div>
                <div className="card-body">
                    <form>
                        <div>
                            <input className="form-control"
                            placeholder="First Name"/>
                        </div>
                         <div>
                            <input className="form-control"
                            placeholder="Last Name"/>
                        </div>
                         <div>
                            <input className="form-control"
                            placeholder="Address"/>
                        </div>
                         <div>
                            <input className="form-control"
                            placeholder="Email" type="email"/>
                        </div>
                        <div>
                            <input className="form-control"
                            placeholder="Password" type="password"/>
                        </div>
                        <div>
                            <input className="form-control"
                            placeholder="Confirm Password" type="password"/>
                        </div>
                        <div>
                            <button className="btn btn-success" type="submit">Register</button>
                        </div>
                    </form>

                    <p className="mt-3 text-center">
                        ALready Registered? <a href="#">Login</a>
                    </p>
                </div>
            </div>
        </div>
    );
}