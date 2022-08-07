import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={style.nav}>
      <Link to={'/'} style={style.logout}>
        Logout
      </Link>
    </div>
  )
}
var style = {
  nav: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '1em',
  },
  logout: {
    padding: '1em',
    border: 'none',
    backgroundColor: '#D61C4E',
    color: '#fff',
    borderRadius: '10px',
  },
}
export default Navbar
