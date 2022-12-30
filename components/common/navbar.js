import { NavbarBrand as UINavBrand } from 'reactstrap'

const NavbarBrand = (props) => {
    const color = props.color
    const container = props.container

    return(
        <UINavBrand 
            color= {color} 
            container={container}>
              <img
                alt="logo"
                src="https://create-react-app.dev/img/logo.svg"
                style={{
                  height: 40,
                  width: 40
                }}
              />
             CiSiProva!!!
        </UINavBrand>
    )
} 

export default NavbarBrand