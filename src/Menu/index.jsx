import "./Menu.css";
import React from "react";
import {
  FaUser,
  FaHome,
  FaPhone,
  FaEnvelope,
  FaBuilding,
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
                <FaUser style={{ color: "white" }} size={24} />
                Name: {item.name}
              </h2>
              <h2 className="menu-item__username">Username: {item.username}</h2>
              <hr style={{ width: "100%" }} />

              <p className="menu-item__phone">
                <FaPhone style={{ color: "white" }} size={24} />
                Phone number: {item.phone}
              </p>
              <p className="menu-item__email">
                <FaEnvelope style={{ color: "white" }} size={24} />
                Email address {item.email}
              </p>
              <p className="menu-item__website">Website: {item.website}</p>
              <hr style={{ width: "100%" }} />
              <div className="menu-item__company">
                <FaBuilding style={{ color: "white" }} size={24} />
                Company
                <p> name: {item.company.name} </p>
                <p> catchPhrase: {item.company.catchPhrase} </p>
                <p> bs: {item.company.bs} </p>
              </div>
              <hr style={{ width: "100%" }} />
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
