import Page from "../../Components/Page";
import { Field } from '../../Components/InputField';
import ErrorField from "../../Components/ErrorField";
const LoginInUx = ({
  emailValue = "",
  passwordValue = "",
  error = "",
  onChangeHandler = () => { },
  onSignInClick = () => { },
  onLoginClick = () => { }
}) => {
  return (
    <Page
      showNavBar={true}
      useAbsoluteCenter={false}
      pageTitle="Iniciar Sesión"
    >

      <div className="hero min-h-screen bg-base-200">
      
        <div className="hero-content flex-col lg:flex-row-reverse">
        
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Registrarse ahora!</h1>
            <p className="py-6">Aplicación de notas <span className="animate-spin">v1.0.0</span></p>
            <button className="btn bg-cyan-700 hover:bg-cyan-800 text-white" onClick={onSignInClick}>Crear una cuenta nueva</button>
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            {error && <ErrorField>{error}</ErrorField>}
              <form>
                <Field
                  name="email"
                  labelText="Correo Electrónico"
                  type="email"
                  value={emailValue}
                  onChange={onChangeHandler}
                  className="input input-bordered"
                  placeholder="Ingrese su Correo Electrónico"
                />
                <Field
                  name="password"
                  labelText="Contraseña"
                  type="password"
                  value={passwordValue}
                  onChange={onChangeHandler}
                  className="input input-bordered"
                  placeholder="Ingrese su contraseña"
                />
                <div className="form-control">
                  <label className="label">
                    <button className="label-text-alt link link-hover">Olvido su contraseña?</button>
                  </label>

                </div>
                <div className="form-control mt-6">
                  <button onClick={onLoginClick} className="btn btn-primary">Iniciar Sesión</button>
                  
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </Page>
  );
}
export default LoginInUx;
