import Form from "./Form";
import profilePic from "../../assets/images/emoji.png";

function formWrap() {
  return (
    <section id="contact" className="fullHeight">
      <h1 style={{textAlign: "center"}}>
        <span className="underline">Let's Connect</span>
      </h1>

      <div className="container">
        <div className="left-wrap">
          <div className="text-wrap">
            <img className="memoji" src={profilePic} alt="profile pic" />
            <h2>Got A Project Or You want To Buy Me Coffee?... Let's Talk!</h2>
          </div>
          <p>Reach out to me on my social handles</p>
          <div className="icons-wrap">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/+2348154050552"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.twitter.com/I_am_Ajayii/"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:ajayiemmanuel630@gmail.com"
            >
              <i className="far fa-envelope"></i>
            </a>
            <a href="https://www.linkedin.com/in/ajayi-emmanuel-395499186/">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        <Form />
      </div>
    </section>
  );
}

export default formWrap;
