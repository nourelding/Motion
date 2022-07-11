import { Outlet } from "react-router-dom";
import MainHeader from "../Components/MainHeader/mainHeader";

const SharedHeader = () => {
    return (
    <>
        <MainHeader />
        <Outlet />
    </>
    );
};
export default SharedHeader;