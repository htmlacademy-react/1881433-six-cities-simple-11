import HeaderNavProfileComponent from '../header-nav-profile-component/header-nav-profile-component';
import LogoComponent from '../logo-component/logo-component';
import SignOutComponent from '../sign-out-component/sign-out-component';

function HeaderComponent() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <LogoComponent />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <HeaderNavProfileComponent/>
              </li>
              <li className="header__nav-item">
                <SignOutComponent/>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;
