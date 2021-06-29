import Card from "./Card";
import classes from "./card.module.css";

function CardWrap({data}) {
  return (
    <section id="project" className={classes.cardSection}>
      <h1>
        <span className="underline">Projects</span>
      </h1>
      <div className={classes.cardsWrap}>
        {data.map(el => (
          <Card
            title={el.title}
            src={el.src}
            details={el.details}
            link={el.link}
            key={el.id}
            stack={el.stack}
          >
            {el.githubLink && (
              <a className={classes.github} href={el.githubLink}>
                <i className="fab fa-github"></i>
              </a>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}

export default CardWrap;
