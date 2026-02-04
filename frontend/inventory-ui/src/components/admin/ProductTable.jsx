export default function ProductTable({products,onChange}) {

    return(
        <table className="table table-bordered">
            <thead className="table-dark">
                <tr>
                    <th>Product Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {products.map(p=>(
                    <tr key={p._id}>
                        <td>{p.name}</td>
                        <td>{p.description}</td>
                        <td>{p.price}</td>
                        <td>{p.quantity}</td>
                        <td>
                            <span><button className="btn btn-warning">Updates</button></span>
                            <span><button className="btn btn-danger">Delete</button></span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}