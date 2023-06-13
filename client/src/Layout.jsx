import Header from "./Header";
import { Outlet } from "react-router-dom";
export default function Layout(){
    return(
        <div className="p-4 flex flex-col">
            <Header />
            <Outlet />
        </div>
    )
}