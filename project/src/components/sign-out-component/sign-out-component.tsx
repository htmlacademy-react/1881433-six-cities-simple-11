import { Link } from 'react-router-dom';

function SignOutComponent() {
  return (
    <Link className="header__nav-link" to="/">
      <span className="header__signout">Sign out</span>
    </Link>
  );
}

export default SignOutComponent;
