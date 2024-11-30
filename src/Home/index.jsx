import { useEffect } from "react";
import "./Home.css";
import { useState } from "react";
import Menu from "../Menu";

function Home() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setCard(data);
    };
    fetchUsers();
  }, []);
  console.log(card);

  return (
    <div className="home-container">
      <header className="header">
        <div className="home-header__name">
          <h2 className="home-name">Information</h2>
          <p className="home-data">27.11.2024</p>
        </div>
        <div className="home-header__input">
          <input
            type="search"
            placeholder="Search name"
            className="home-input"
          />
        </div>
      </header>
      <section className="home-section">
        <Menu card={card} />
      </section>
    </div>
  );
}

export default Home;
