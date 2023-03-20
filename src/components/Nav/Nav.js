import { Link } from 'react-router-dom';

export default function Nav() {
    return (
      <nav>
        <ul>
            <li><Link to="/">Homepage</Link></li>
            <li><Link to="/booking">Booking</Link></li>
        </ul>
      </nav>
    );
  }