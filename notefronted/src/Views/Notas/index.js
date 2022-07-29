import Page from "../../Components/Page";

const Home = () => {
    return (
        <Page showNavBar={true} pageTitle="Mis Notas">
            <div className="bg-base-200 hero-content w-full ">
                <div className="flex flex-col w-full h-full border-opacity-60">
                    <div className="grid h-full card bg-base-300 rounded-box place-items-center">

                        <div className="card w-full bg-primary text-primary-content">
                            <div className="card-body">
                                <h2 className="card-title">Card title!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn">Editar Nota</button>
                                    <button className="btn">Eliminar Nota</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="divider text-white"></div>
                    <div className="grid h-full card bg-base-300 rounded-box place-items-center">
                        <div className="card w-full bg-primary text-primary-content">
                            <div className="card-body">
                                <h2 className="card-title">Card title!</h2>
                                <p className="link text-cyan-800">#Tags</p>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn">Editar Nota</button>
                                    <button className="btn">Eliminar Nota</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="divider text-white"></div>
                    <div className="grid h-full  mb-10 place-items-center">
                        <div className="btn-group">
                            <button className="btn">1</button>
                            <button className="btn btn-active">2</button>
                            <button className="btn">3</button>
                            <button className="btn">4</button>
                        </div>
                    </div>
                </div>


            </div>
        </Page>
    );
};

export default Home;