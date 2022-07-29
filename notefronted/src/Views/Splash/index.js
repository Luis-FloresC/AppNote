import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Page from '../../Components/Page';
import { app_loaded, app_start_loading } from './SplashActions';
import { setAuth } from '../../Services/api/axios';
import { RadialProgress } from 'react-radial-progress-indicator';


/*<div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
  <RadialProgress
              backgroundColour="#1F4B9D"
              ringBgColour="#FBF5EB"
              ringFgColour="#1F4B9D"
              backgroundTransparent
              width="20"
              height="20"
              text={function text(steps, proportion) { return "".concat(Math.floor(100 * proportion), "%") }}
              steps={4}
              step={4}
            />
  */

const Splash = () => {
  const dispatch = useDispatch();
  const fecha = new Date();
  const user = useSelector(state => state.security);
  useEffect(() => {
    app_start_loading(dispatch);
    setTimeout(() => {
      app_loaded(dispatch);
    }, 5000);
  }, [dispatch]);

  useEffect(() => {
    if (user.token) {
      setAuth(user.token);
    }
    app_loaded(dispatch);
  }, [user,dispatch]);

  return (
    <Page
      useAbsoluteCenter={true}
      showNavBar={false}
    >
      <div className="hero-content w-full bg-base-100 flex-col lg:flex-row-reverse">
        <div className="max-w-sm rounded-lg shadow-2xl">
          <RadialProgress
            backgroundColour="#1F4B9D"
            ringBgColour="#FBF5EB"
            ringFgColour="#1F4B9D"
            backgroundTransparent
            width="20"
            height="20"
            text={function text(steps, proportion) { return "".concat(Math.floor(100 * proportion), "%") }}
            steps={4}
            step={4}
          />
          <br />
        </div>

        <div>
          <h1 className="text-5xl font-bold text-center">Aplicación de Notas!</h1>
          <p className="py-6 text-center">Version: 1.0.0</p>
          <p className="py-5 text-center">Copyright © {fecha.getFullYear()} - Todos los derechos reservados</p>
        </div>
      </div>
    </Page>
  )
}

export default Splash;
