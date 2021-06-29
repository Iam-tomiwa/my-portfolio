import classes from "./card.module.css";

function Card(props) {
  let {src, stack, title, details, link} = props;
  const style = {
    backgroundImage: `url(${src})`,
  };
  return (
    <div className={classes.card}>
      {/* <img src={src} alt={src} /> */}
      {props.children}
      <div className={classes.img} style={style}></div>
      <div className={classes.textWrap}>
        <div className={classes.stacks}>
          {stack.map(el => (
            <span key={el.id}>
              <i className={el.classname}></i>
            </span>
          ))}
        </div>

        <h2 className={classes.title}>{title}</h2>
        <p className={classes.details}>{details}</p>
        <a href={link}>
          <button className="btn">
            View Site &nbsp; <i className="fas fa-external-link-alt"></i>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Card;
