import { Navbar as UINavBar, NavItem as UINavItem, NavLink as UINavLink, Nav as UINav } from 'reactstrap'

const Navbar = (props) => {
  const title = props.title
  
  return (
    <UINavBar color='light' className='border'>
      <UINav>
        <UINavItem>
          <UINavLink>
            {title}
          </UINavLink>
        </UINavItem>
      </UINav>
    </UINavBar>
  )
}

export default Navbar