import { Link } from 'react-router-dom';

function SignInComponent() {
  return (
    <Link className="header__nav-link" to="/">
      <span className="header__signout">Sign in</span>
    </Link>
  );
}

export default SignInComponent;
