import avatar from "images/avatar.jpeg";

import { ReactComponent as Phone } from "images/phone.svg";
import { ReactComponent as Envelope } from "images/envelope.svg";
import { ReactComponent as Linkedin } from "images/linkedin.svg";
import { ReactComponent as Github } from "images/github.svg";
import { ReactComponent as Map } from "images/map.svg";
import { ReactComponent as Globe } from "images/globe.svg";

import stl from "./sidebar.module.scss";

export default function Sidebar() {
  return (
    <aside className={stl.sidebar}>
      <div className={stl.avatar}>
        <img
          src={avatar}
          alt="Yuri Movchan"
          title="Yuri Movchan"
          className={stl.avatarImg}
        />
      </div>
      <section className={stl.contact}>
        <h3 className={stl.contact__title}>Contact Information</h3>
        <ul className={stl.contact__list}>
          <li className={stl.contact__item}>
            <Phone className={stl.contact__icon} />
            <a href="tel:+380637100732" className={stl.contact__link}>
              +380(63) 710 07 32
            </a>
          </li>
          <li className={stl.contact__item}>
            <Envelope className={stl.contact__icon} />
            <a href="mailto:xyyrma@gmail.com" className={stl.contact__link}>
              xyyrma@gmail.com
            </a>
          </li>
          <li className={stl.contact__item}>
            <Linkedin className={stl.contact__icon} />
            <a
              href="https://www.linkedin.com/in/urko-movchan-7aa58a7a/"
              className={stl.contact__link}
              target="__blank"
            >
              linkedin.com/in/urko-movchan-7aa58a7a/
            </a>
          </li>
          <li className={stl.contact__item}>
            <Github className={stl.contact__icon} />
            <a
              href="https://github.com/UriMovchan"
              className={stl.contact__link}
              target="__blank"
            >
              github.com/UriMovchan
            </a>
          </li>
          <li className={stl.contact__item}>
            <Map className={stl.contact__icon} />
            <a
              href="https://www.google.com/maps/place/%D0%9A%D0%B8%D1%97%D0%B2,+02000/@50.4021698,30.3922666,11z/data=!3m1!4b1!4m5!3m4!1s0x40d4cf4ee15a4505:0x764931d2170146fe!8m2!3d50.4501!4d30.5234"
              className={stl.contact__link}
              target="__blank"
            >
              Kyiv, Ukraine
            </a>
          </li>
          <li className={stl.contact__item}>
            <Globe className={stl.contact__icon} />
            <a
              href="https://urko.tech"
              className={stl.contact__link}
              target="__blank"
            >
              urko.tech
            </a>
          </li>
        </ul>
      </section>

      <section className={stl.skill}>
        <h3 className={stl.skill__title}>TECH SKILLS</h3>
        <ul className={stl.skill__list}>
          <li className={stl.skill__item}>HTML5/CSS3/SASS</li>
          <li className={stl.skill__item}>Responsive/Adaptive design</li>
          <li className={stl.skill__item}>JavaScript</li>
          <li className={stl.skill__item}>PHP</li>
          <li className={stl.skill__item}>REST API</li>
          <li className={stl.skill__item}>MySQL</li>
          <li className={stl.skill__item}>MongoDB</li>
          <li className={stl.skill__item}>Node.js</li>
          <li className={stl.skill__item}>React/React Native</li>
          <li className={stl.skill__item}>Redux</li>
          <li className={stl.skill__item}>Handlebars</li>
          <li className={stl.skill__item}>Webpack</li>
          <li className={stl.skill__item}>Parcel</li>
          <li className={stl.skill__item}>Git</li>
        </ul>
      </section>
      <section className={stl.skill}>
        <h3 className={stl.skill__title}>SOFT SKILLS</h3>
        <ul className={stl.skill__list}>
          <li className={stl.skill__item}>Teamwork</li>
          <li className={stl.skill__item}>Listening</li>
          <li className={stl.skill__item}>Flexibility</li>
          <li className={stl.skill__item}>Logical thinking</li>
          <li className={stl.skill__item}>Accepting feedback</li>
        </ul>
      </section>
      <section className={stl.skill}>
        <h3 className={stl.skill__title}>LANGUAGES</h3>
        <ul className={stl.skill__list}>
          <li className={stl.skill__item}>Ukrainian - Native</li>
          <li className={stl.skill__item}>Russian - Native</li>
          <li className={stl.skill__item}>English - Intermediate</li>
        </ul>
      </section>
    </aside>
  );
}
