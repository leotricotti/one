import articleImg from "./img/hero/articleImg.webp";
import heroImg from "./img/hero/hero-img.webp";
import logo from "./img/logo/logo.webp";
import "./App.css";

function HeroSection() {
  return (
    <div className="heroContainer">
      <div className="heroImg">
        <img src={heroImg} alt="Bride on a boat" className="hero-img" />
      </div>
      <div className="articleContainer">
        <img
          src={articleImg}
          alt="Bride make up example"
          className="artcile-img"
        />
        <h1 className="title">
          Wedding Makeup Artists & Hair Stylists in Italy - BLBS Management
        </h1>
        <p className="description">
          BLBS is a professional team of beauty experts based in Italy and
          working with clients all over the world. Wedding hairstyles, makeup,
          and much more for the most spectacular events. We offer convenient
          on-site services to meet your bridal beauty needs.
        </p>
      </div>
    </div>
  );
}

function NavLinks({ navItems }) {
  return (
    <nav className="navContainer">
      <ul>
        {navItems.map((navItem) => {
          return (
            <li key={navItem.id}>
              <a href={navItem.link}>{navItem.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function ContactSection({ contactInfo }) {
  return (
    <div className="contactContainer">
      <a href="/">
        <p>Get a quote</p>
      </a>
      {contactInfo.map((item) => {
        return (
          <a href={item.link}>
            <img src={item.img} alt={item.description} />
          </a>
        );
      })}
    </div>
  );
}

function Header({ navItems, contactInfo }) {
  return (
    <div className="headerContainer">
      <img src={logo} alt="Business Logo" />
      <NavLinks navItems={navItems} />
      <ContactSection contactInfo={contactInfo} />
    </div>
  );
}

function App() {
  return <div className="App"></div>;
}

export default App;
