import { ReactComponent as User } from "images/user.svg";
import { ReactComponent as Briefcase } from "images/briefcase.svg";

import stl from "./main.module.scss";

export default function Main() {
  return (
    <main>
      <div className={`content ${stl.contentAbout}`}>
        <div className={stl.about}>
          <section className={stl.aboutSection}>
            <h2 className={stl.aboutTitle}>
              <span className={stl.aboutIcoBox}>
                <User className={stl.aboutIcon} />
              </span>
              <span>SUMMARY</span>
            </h2>
            <h3 className={stl.aboutTextBox}>
              <div className={stl.aboutText}>
                I am a Front-End developer looking for a full-time position in a
                company that's aimed at making both everyday life and business
                easier, more productive and user-friendly. I have sound
                knowledge of HTML, CSS, JavaScript, and React. Also, I have
                hands-on experience in following Agile /Scrum methodology when
                working in a team. I am a fast learner, responsible, and ready
                for challenging tasks.
              </div>
            </h3>
          </section>
          <section>
            <h2 className={stl.aboutTitle}>
              <span className={stl.aboutIcoBox}>
                <Briefcase className={stl.aboutIcon} />
              </span>
              <span>PROJECT EXPERIENCE</span>
            </h2>
            <ul>
              <li>
                BARBERSHOP, Link [HTML, SASS, JS, Parcel] A website with a
                responsive layout. Role: Team Lead
              </li>
              <li>
                FILMOTEKA, Link [HTML, SASS, JS, Handlebars, REST, API, AJAX,
                Parcel] Application for choosing a movie. Role: Scrum Master
              </li>
              <li>
                PRO TEST, Link [React, Redux, Axios, Styled Components, Node.js
                MongoDB] Application for testing knowledge of students who learn
                QA
              </li>
            </ul>
          </section>
          <section>
            <h2>WORK EXPERIENCE</h2>
            <ul>
              <li>pr 1</li>
              <li>pr 2</li>
              <li>pr 3</li>
            </ul>
          </section>
          <section>
            <h2>EDUCATION</h2>
            <ul>
              <li>pr 1</li>
              <li>pr 2</li>
              <li>pr 3</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
