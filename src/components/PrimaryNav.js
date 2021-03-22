import './PrimaryNav.scss';

export default function PrimaryNav() {
   return (
      <nav className="primaryNav">
        <ul className="primaryNav__pages">
          <li><a href="/"><img src="./images/logo.svg" alt="logo"/></a></li>
          <li><a href="/howitworks">How it works</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/support">Support</a></li>
        </ul>
        <ul className="primaryNav__socials">
          <li><a href="/"><i className="fab fa-product-hunt"></i></a></li>
          <li><a href="/"><i className="fab fa-reddit"></i></a></li>
          <li><a href="/"><i className="fab fa-product-hunt"></i></a></li>
          <li><a href="/"><i className="fab fa-reddit"></i></a></li>
          <li><a href="/"><i className="fab fa-product-hunt"></i></a></li>
          <li><a href="/"><i className="fab fa-reddit"></i></a></li>
        </ul>
      </nav>
   )
}
