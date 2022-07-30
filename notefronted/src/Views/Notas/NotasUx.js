//import BalanceCard from "../../Components/BalanceCard";
import Page from "../../Components/Page";

const NotasUx = ({ onClickHandler, children }) => {
    return (
        <Page pageTitle="Mis Notas">
            <div className="bg-base-200 hero-content w-full ">
                <div className="flex flex-col w-full h-full border-opacity-60">
                    {children}
                </div>
                
            </div>
        </Page>
    )
}

export default NotasUx;