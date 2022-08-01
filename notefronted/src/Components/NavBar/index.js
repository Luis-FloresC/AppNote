import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
const NavBar = ({ title }) => {
  const Navigator = useNavigate();
  const [linkHome,setLinkHome] = useState(false);
  const actualUrl = window.location.href;
  useEffect(() => {
    if(!actualUrl.includes("home"))
    {
      setLinkHome(true);
    }
    else
    {
      setLinkHome(false);
    }
  }, [actualUrl,linkHome])

  const onCerrarSesionClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      Navigator('/login');
    } catch (ex) {
      console.log("error click", ex);

    }
  }

  const onAcercaDeClick =  async (e) => {
    e.preventDefault();
    e.stopPropagation();
    alert(e.target.value);
  }

  const onHomeClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      Navigator('/home');
    } catch (ex) {
      console.log("error click", ex);

    }
  }

  const onNewNoteClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      Navigator('/note/New/0');
    } catch (ex) {
      console.log("error click", ex);

    }
  }

  const { user } = useSelector(state => state.security);
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>

          {user && (
            <>
              <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {linkHome && <li><button onClick={onHomeClick}>Menú Principal</button></li>}
                <li><button onClick={onNewNoteClick}>Nueva Nota</button></li>
                <li><button onClick={onAcercaDeClick} value="1">Acerca de</button></li>
                <li><button onClick={onCerrarSesionClick}>Cerrar Sesión</button></li>
              </ul>
            </>
          )}


        </div>
      </div>
      <div className="navbar-center">
        <button className="btn btn-ghost normal-case text-xl text-center">{title}</button>
      </div>
      {user &&
        (
          <>
            <div className="navbar-end">
              <button className="btn btn-ghost normal-case text-xl">{user.nombre}</button>
            </div>
          </>
        )

      }
      {!user && <span className="navbar-end"></span>}
    </div>
  )
}

export default NavBar;
