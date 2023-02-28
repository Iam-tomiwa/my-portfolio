import ScrollAnimation from "react-animate-on-scroll";
import classes from "./card.module.css";

function Card(props) {
  let {src, stack, title, details, link, otherStacks, delay} = props;
  const style = {
    backgroundImage: `url(${src})`,
  };
  return (
    <ScrollAnimation
      animateOnce={true}
      animateIn="fadeInUp"
      delay={delay}
      className={classes.card}
    >
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
          {otherStacks &&
            otherStacks.map(el => (
              <span key={`stack_icon_${el}`}>
                <img
                  style={el.includes("next") ? {padding: "0"} : null}
                  src={el}
                  alt={el}
                />
              </span>
            ))}
        </div>

        <h2 className={classes.title}>{title}</h2>
        <p className={classes.details}>{details}</p>
        <a target="_blank" rel="noopener noreferrer" href={link}>
          <button className={`${classes.btn} btn`}>
            View &nbsp; <i className="fas fa-external-link-alt"></i>
          </button>
        </a>
      </div>
    </ScrollAnimation>
  );
}

export default Card;
