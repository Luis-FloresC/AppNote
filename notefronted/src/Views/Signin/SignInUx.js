import Page from "../../Components/Page";
import { Field } from '../../Components/InputField';
import ErrorField from "../../Components/ErrorField";

const SignInUx = ({
  emailValue = "",
  passwordValue = "",
  onChangeHandler = () => { },
  onSignInClick = () => { },
  onLoginClick = () => { },
  error=""
}) => {
  return (
    <Page
      showNavBar={true}
      useAbsoluteCenter={true}
      pageTitle="Crear Cuenta"
    >
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Iniciar sesión ahora!</h1> 
            <p className="py-6">Aplicación de notas <span className="animate-spin">v1.0.0</span></p>
            <button className="btn bg-cyan-700 hover:bg-cyan-800 text-white" onClick={onLoginClick}>Ya cuento con una cuenta</button>
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
                  <button onClick={onSignInClick} className="btn bg-green-500 hover:bg-green-600 text-white">Crear Cuenta</button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </Page>
  );
}
export default SignInUx;
