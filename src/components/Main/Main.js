import { ReactComponent as User } from "images/user.svg";
import { ReactComponent as Briefcase } from "images/briefcase.svg";
import { ReactComponent as Code } from "images/code.svg";
import { ReactComponent as Graduation } from "images/graduation.svg";

import stl from "./main.module.scss";

export default function Main() {
  return (
    <main className={`content ${stl.contentAbout}`}>
      <div className={stl.about}>
        <section className={stl.aboutSection}>
          <h2 className={stl.aboutTitle}>
            <span className={stl.aboutIcoBox}>
              <User className={stl.aboutIconUser} />
            </span>
            <span className={stl.aboutTitleName}>SUMMARY</span>
          </h2>
          <h3 className={stl.aboutTextBox}>
            <div className={stl.aboutText}>
              I am a Front-End developer looking for a full-time position in a
              company that's aimed at making both everyday life and business
              easier, more productive and user-friendly. I have sound knowledge
              of HTML, CSS, JavaScript, and React. Also, I have hands-on
              experience in following Agile /Scrum methodology when working in a
              team. I am a fast learner, responsible, and ready for challenging
              tasks.
            </div>
          </h3>
        </section>
        <section className={stl.aboutSection}>
          <h2 className={stl.aboutTitle}>
            <span className={stl.aboutIcoBox}>
              <Code className={stl.aboutIconCode} />
            </span>
            <span className={stl.aboutTitleName}>PROJECT EXPERIENCE</span>
          </h2>
          <div className={stl.aboutTextBox}>
            <ul className={stl.aboutList}>
              <li className={stl.aboutItem}>
                BARBERSHOP, Link [HTML, SASS, JS, Parcel] A website with a
                responsive layout. Role: Team Lead
              </li>
              <li className={stl.aboutItem}>
                FILMOTEKA, Link [HTML, SASS, JS, Handlebars, REST, API, AJAX,
                Parcel] Application for choosing a movie. Role: Scrum Master
              </li>
              <li className={stl.aboutItem}>
                PRO TEST, Link [React, Redux, Axios, Styled Components, Node.js
                MongoDB] Application for testing knowledge of students who learn
                QA
              </li>
            </ul>
          </div>
        </section>
        <section className={stl.aboutSection}>
          <h2 className={stl.aboutTitle}>
            <span className={stl.aboutIcoBox}>
              <Briefcase className={stl.aboutIconBriefcase} />
            </span>
            <span className={stl.aboutTitleName}>WORK EXPERIENCE</span>
          </h2>
          <div className={stl.aboutTextBox}>
            <ul className={stl.aboutList}>
              <li className={stl.aboutItem}>pr 1</li>
              <li className={stl.aboutItem}>pr 2</li>
              <li className={stl.aboutItem}>pr 3</li>
            </ul>
          </div>
        </section>
        <section className={stl.aboutSection}>
          <h2 className={stl.aboutTitle}>
            <span className={stl.aboutIcoBox}>
              <Graduation className={stl.aboutIconGraduation} />
            </span>
            <span className={stl.aboutTitleName}>EDUCATION</span>
          </h2>
          <div className={stl.aboutTextBox}>
            <ul className={stl.aboutList}>
              <li className={stl.aboutItem}>pr 1</li>
              <li className={stl.aboutItem}>pr 2</li>
              <li className={stl.aboutItem}>pr 3</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
