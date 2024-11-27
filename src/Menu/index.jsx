import "./Menu.css";
import React from "react";
import {
  FaUser,
  FaHome,
  FaPhone,
  FaEnvelope,
  FaBuilding,
  FaGlobe,
} from "react-icons/fa";

function Menu({ dish }) {
  return (
    <div className="menu-container">
      <header className="menu-header">
        <h2 className="menu-header__name">Menu Card</h2>
      </header>
      <section className="menu-section">
        <div className="menu-items">
          {dish?.map((item) => (
            <div key={item.id} className="menu-item">
              <h2 className="menu-item__name">
                <FaUser style={{ color: "white" }} size={18} />
                Name <br /> {item.name}
              </h2>
              <p className="menu-item__username">
                Username <br /> {item.username}
              </p>

              <div className="menu-item__phone">
                <FaPhone style={{ color: "white" }} size={18} />
                Phone number <p>{item.phone}</p>
              </div>
              <div className="menu-item__email">
                <FaEnvelope style={{ color: "white" }} size={18} />
                Email address
                <p> {item.email}</p>
              </div>
              <div className="menu-item__website">
                <FaGlobe style={{ color: "white" }} size={18} />
                Website <p>{item.website}</p>
              </div>

              <div className="menu-item__company">
                <FaBuilding style={{ color: "white" }} size={18} />
                Company
                <p>
                  {" "}
                  {item.company.name} {item.company.catchPhrase}{" "}
                  {item.company.bs}{" "}
                </p>
              </div>

              <div className="menu-item__address">
                <FaHome style={{ color: "white" }} size={24} />
                Address
                <p>
                  {" "}
                  {item.address.street} {item.address.suite} {item.address.city}{" "}
                  {item.address.zipcode}{" "}
                </p>
                Geo
                <p>
                  {" "}
                  lat: {item.address.geo.lat} lng: {item.address.geo.lng}{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Menu;
