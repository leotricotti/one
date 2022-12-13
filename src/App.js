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
    <nav>
      <ul className="navContainer">
        {navItems.map((navItem) => {
          return (
            <li key={navItem.id}>
              <a href={navItem.url} className="link">
                {navItem.name}
              </a>
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
      <a href="/" className="quote">
        <p>Get a quote</p>
      </a>
      {contactInfo.map((item) => {
        return (
          <a key={item.id} href={item.url}>
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
      <img src={logo} alt="Business Logo" className="header-logo" />
      <NavLinks navItems={navItems} />
      <ContactSection contactInfo={contactInfo} />
    </div>
  );
}

function AppContainer() {
  return (
    <>
      <Header navItems={navLinks} contactInfo={socialNetwork} />
      <HeroSection />
    </>
  );
}

const navLinks = [
  { id: 1, url: "#", name: "home" },
  { id: 2, url: "#", name: "about" },
  { id: 3, url: "#", name: "services" },
  { id: 4, url: "#", name: "locations" },
  { id: 5, url: "#", name: "testimonial" },
  { id: 6, url: "#", name: "blog" },
  { id: 7, url: "#", name: "contact" },
];

const socialNetwork = [
  {
    id: 1,
    url: "#",
    img: require("./img/social/instagram.webp"),
    description: "Instagram logo",
  },

  {
    id: 1,
    url: "#",
    img: require("./img/social/facebook.webp"),
    description: "Facebook logo",
  },
];

function App() {
  return (
    <div className="App">
      <AppContainer />
    </div>
  );
}

export default App;
