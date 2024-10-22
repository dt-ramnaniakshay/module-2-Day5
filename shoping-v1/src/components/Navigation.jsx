import "../Assets/CSS/navigation.css"


//Link tag we should use to get our SPA

function Navigation() {
  return (
    <ul>
        <li><a class="active" href="/">Home</a></li>
        <li><a href="/news">News</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/about">About</a></li>
    </ul>
  )
}

export default Navigation

//rfce => to create boiler plate code for function