import { useContext } from "react";
import { AuthContext } from "../../auth/authContext";
import AdminDashboard from "../dashboards/AdminDashboard";
import CustomerDashboard from "../dashboards/CustomerDashboard";

export default function DashboardRouter() {
    const {user} = useContext(AuthContext);
 
    return user.role === "ADMIN" ? <AdminDashboard /> : <CustomerDashboard />
}