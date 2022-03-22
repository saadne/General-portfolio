import "./portfolio.css";
import IMG1 from "../../assets/M1.png";
import IMG2 from "../../assets/M2.png";
import IMG3 from "../../assets/M3.png";
import IMG4 from "../../assets/M4.png";
import IMG5 from "../../assets/M5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Budget Calculator",
    github: "https://github.com/saadne/Budget-calculator",
    demo: "https://zen-spence-2fab1c.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Todo List",
    github: "https://github.com/saadne/todo-list",
    demo: "https://clever-rosalind-e1163b.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Corona Status",
    github: "https://github.com/corona-app",
    demo: "https://festive-bhaskara-141ba1.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Book List",
    github: "https://github.com/saadne/booklist",
    demo: "https://infallible-bartik-b2093e.netlify.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Gestion Of Annonce",
    github: "https://github.com/saadne/gestion-des-annonces",
    demo: "https://github.com/saadne/gestion-des-annonces",
  },
  {
    id: 6,
    image: IMG6,
    title: "Title of project",
    github: "https://github.com",
    demo: "#",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  target="_blank"
                  className="btn"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
