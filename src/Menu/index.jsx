import "./Menu.css";

import { FaUser, FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";

function Menu({ card }) {
  const handleOpenLocation = (item1, item2) => {
    // Geo koordinatalarni URL ga qo'shish
    const googleMapsUrl = `https://www.google.com/maps?q=${item1},${item2}`;
    // Yangi oynada ochish
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <div className="menu-container">
      <header className="menu-header">
        <h2 className="menu-header__name">Personal</h2>
      </header>
      <section className="menu-section">
        <div className="menu-items">
          {card?.map((item) => (
            <div key={item.id} className="menu-item">
              <div className="menu-item__name">
                <span>
                  {" "}
                  <FaUser className="menu-icon" />
                  Name
                </span>
                <h2>
                  {item.name} {item.username}
                </h2>
              </div>

              <div className="menu-item__name">
                <span>
                  <FaPhone className="menu-icon" />
                  Phone number
                </span>{" "}
                <h2>({item.phone})</h2>
              </div>
              <div className="menu-item__name">
                <span>
                  {" "}
                  <FaEnvelope className="menu-icon" />
                  Email address
                </span>
                <h2> {item.email}</h2>
              </div>
              <div className="menu-item__name">
                <span>
                  {" "}
                  <FaGlobe className="menu-icon" />
                  Website
                </span>{" "}
                <h2>{item.website}</h2>
              </div>

              <div className="menu-item__name">
                <button
                  onClick={() =>
                    handleOpenLocation(
                      item.address.geo.lat,
                      item.address.geo.lng
                    )
                  }
                  className="location-btn"
                >
                  Show Location
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Menu;
