// with title and main navigation).

function Header(props) {
  return (
<header>
        <div class="container flexbox">
          <div className="title">
            <h1>
              {props.title}
            </h1>
          </div>
          <nav>
            <ul>
              <li><a href="#">Orders</a></li>
              <li><a href="#">Places</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">My Account</a></li>
            </ul>
          </nav>
        </div>
      </header>  )
}

export default Header