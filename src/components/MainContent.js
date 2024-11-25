import Content from "./Content";
import "../About.css";

function MainContent() {
  return (
    <div className="MainContent">
      <h1>Welcome</h1>

      <div className="text-container">
        <p>
          Introducing Space of Hearts Ltd, a dynamic and innovative company
          based in the United Kingdom, dedicated to transforming the real estate
          landscape.
        </p>
        <p>
          At Space of Hearts, we believe that every space has the potential to
          become a cherished place. Our mission is to create environments that
          not only meet the practical needs of our clients but also resonate
          with their hearts, fostering a sense of belonging and comfort.
        </p>

        <p>
          Our dedicated team brings a wealth of experience and a passion for
          excellence to every project. We are committed to delivering
          personalized services that cater to the unique requirements of each
          client, ensuring that every property we manage becomes a true space
          of hearts.
        </p>

      </div>

      <Content />
    </div>
  );
}

export default MainContent;
