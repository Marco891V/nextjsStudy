import { NavbarBrand as UINavBrand, Navbar as UINavBar } from 'reactstrap'

const Navbar = (props) => {

  return (
    <UINavBar color='light'>
      <UINavBrand>
        <img
          alt="logo"
          src="assets/images/imgMy.png"
          style={{
            height: 40,
            width: 40
          }}
        />
        CiSiProva!!!
      </UINavBrand>
    </UINavBar>
  )
}

export default Navbar