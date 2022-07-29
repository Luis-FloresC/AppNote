import { useSelector } from 'react-redux';


const NavBar = ({ title }) => {
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
                <li><button>Mis Notas</button></li>
                <li><button>Configuracion</button></li>
                <li><button>Acerca de</button></li>
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
