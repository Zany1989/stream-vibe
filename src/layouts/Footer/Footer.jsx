import "./Footer.scss"

const Footer = () => {
  
  const menuItems = [
    {
      title: "Home",
      links: ["Categories", "Devices", "ricing", "FAQ"]
    },
    {
      title: "Movies",
      links: ["Genres", "Trending", "New Release", "Popular"]
    },
    {
      title: "Shows",
      links: ["Genres", "Trending", "New Release", "Popular"]
    },
    {
      title: "Support",
      links: ["Contact Us"]
    },
    {
      title: "Subscription",
      links: ["Plans", "Features", "ricing", "FAQ"]
    },
    {
      title: "Connect With Us",
      socialLinks: [
        {
          label: "Facebook",
          iconName: "facebook",
        },
        {
          label: "Twitter",
          iconName: "twitter",
        },
        {
          label: "LinkedIn",
          iconName: "linkedin",
        }
      ]
    }
  ]
  
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <nav className="footer__menu">
          <div className="footer__menu-column"></div>
        </nav>
        <div className="footer__extra"></div>
      </div>
    </footer>
  )
}

export default Footer