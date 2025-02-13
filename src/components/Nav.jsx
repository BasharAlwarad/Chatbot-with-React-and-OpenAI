import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-center gap-4">
      <NavLink
        to="/register"
        className={({ isActive }) =>
          `px-4 py-2 rounded ${isActive ? 'bg-blue-700' : ''}`
        }
      >
        Register
      </NavLink>
      <NavLink
        to="/form"
        className={({ isActive }) =>
          `px-4 py-2 rounded ${isActive ? 'bg-blue-700' : ''}`
        }
      >
        Form
      </NavLink>
    </nav>
  );
};

export default Nav;
