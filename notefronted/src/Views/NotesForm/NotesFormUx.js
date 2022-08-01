import Page from "../../Components/Page";
import { Field } from "../../Components/InputField";
import ErrorField from "../../Components/ErrorField";
const LoginInUx = ({
    titulo="",
    titleValue = "",
    descriptionValue = "",
    keywordValue = "",
    error = "",
    onChangeHandler = () => { },
    onSubmitClick = () => { },
    onCancelClick = () => { },
}) => {
    return (
        <Page showNavBar={true} pageTitle={titulo}>
             
            <div className="hero min-h-screen bg-base-200">
         
                <div className="hero-content w-full flex-col lg:flex-row-reverse">
                   
                    <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                        <div className="card-body">
                            {error && <ErrorField>{error}</ErrorField>}
                            <form>
                                <Field
                                    name="title"
                                    labelText="Titulo"
                                    type="text"
                                    value={titleValue}
                                    onChange={onChangeHandler}
                                    className="input input-bordered"
                                    placeholder="Titulo de la nota"
                                />
                                <Field
                                    name="description"
                                    labelText="Descripción"
                                    type="text"
                                    value={descriptionValue}
                                    onChange={onChangeHandler}
                                    className="input input-bordered"
                                    placeholder="Ingrese una descripción"
                                />

                                <Field
                                    name="keyword"
                                    labelText="Palabras claves"
                                    type="text"
                                    value={keywordValue}
                                    onChange={onChangeHandler}
                                    className="input input-bordered"
                                    placeholder="Ingrese las palabras claves separadas por coma"
                                />

                                <div className="form-control mt-6 flex-row p-2 justify-end">
                                    <button
                                        onClick={onSubmitClick}
                                        className="btn btn-primary w-20"
                                    >
                                        Aceptar
                                    </button>
                                    <div className="divider divider-horizontal"></div>
                                    <button
                                        onClick={onCancelClick}
                                        className="btn btn-secondary w-20"
                                    >
                                        Cancelar
                                    </button>
                                </div>
                            </form>

                            
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
        </Page>
    );
};
export default LoginInUx;
