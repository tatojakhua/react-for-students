install react-router-dom@6

in the index.js file import { BrowserRouter as Router } from "react-router-dom";

in the APP component import { Routes,Route } from "react-router-dom";

// ---------------------------------------------------------------------
LINKS

import { Link } from 'react-router-dom'

// ---------------------------------------------------------------------
NAVLINK

import { NavLink } from 'react-router-dom'

add CSS

a.active {
  color: red;
  font-weight: bold;
}

---------------------
add CSS V2

  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "red" : "black",
    };
  };

<NavLink style={navLinkStyle} to="/">
    Home
</NavLink>

// ---------------------------------------------------------------------
Navigating Programmatically

import { useNavigate } from "react-router-dom";
const navigate = useNavigate();


// ---------------------------------------------------------------------
No Match Route
<Route path="*" element={<NoMatch />} />


// ---------------------------------------------------------------------
Dynamic routes 


<Route path="/users/:userId/" element={<User />} />
const { userId, userName } = useParams();

// ---------------------------------------------------------------------
URL params

  <Route path="/users/:userId/" element={<User />} />
  const { userId, userName } = useParams();

//Search Params
  const [searchParams] = useSearchParams();


// Lazy loading

 