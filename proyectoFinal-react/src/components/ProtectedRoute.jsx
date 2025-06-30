import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute () {
    const userEmail = localStorage.getItem("userEmail")
    if(!userEmail) {
        return <Navigate to="/" />
    }
    return <Outlet />;
}