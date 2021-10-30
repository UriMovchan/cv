import { ReactComponent as User } from "images/user.svg";
import { ReactComponent as Briefcase } from "images/briefcase.svg";
import { ReactComponent as Code } from "images/code.svg";
import { ReactComponent as Graduation } from "images/graduation.svg";
import { ReactComponent as Plus } from "images/plus.svg";

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
              I am a Front-End developer looking for a remote part-time,
              full-time job with a flexible hours in a company that aims to make
              everyday life and business simpler, more productive and more
              user-friendly. I know HTML, CSS, JavaScript and React well. In
              addition, I have practical experience using the Agile / Scrum
              methodology while working in a team. I learn quickly, responsibly
              and ready for difficult tasks.
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
                <a
                  href="https://eventbooster.urko.tech"
                  target="_blank"
                  rel="noreferrer"
                  className={stl.projectLink}
                >
                  EventBooster
                </a>
                [HTML, SASS, JS, Parcel]
                <p className={stl.projectInfo}>
                  A website with a responsive layout
                </p>
              </li>
              <li className={stl.aboutItem}>
                <a
                  href="https://icecream.urko.tech"
                  target="_blank"
                  rel="noreferrer"
                  className={stl.projectLink}
                >
                  IceCream
                </a>
                [HTML, SASS, JS, Parcel]
                <p className={stl.projectInfo}>
                  A website with a responsive layout
                </p>
              </li>
              <li className={stl.aboutItem}>
                <a
                  href="https://kapusta.urko.tech"
                  target="_blank"
                  rel="noreferrer"
                  className={stl.projectLink}
                >
                  Kapusta
                </a>
                [HTML, SASS, JS, React, NodeJs, Parcel]
                <p className={stl.projectInfo}>
                  A website with a responsive layout
                </p>
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
              <li className={stl.aboutItem}>
                <div className={stl.aboutItemWork}>
                  <p className={stl.workEar}>2010 - 2021</p>
                  <p className={stl.work}>
                    <span className={stl.workPlace}>Online store owner</span>
                    <ul className={stl.workTask}>
                      <li className={stl.taskItem}>
                        website programming: html, css, js, php, mysql
                      </li>
                    </ul>
                  </p>
                </div>
              </li>
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
              <li className={stl.aboutItem}>
                <div className={stl.aboutItemEducation}>
                  <p className={stl.educationEar}>2006 - 2011</p>
                  <p className={stl.educationPlace}>
                    <span className={stl.university}>
                      Taras Shevchenko National University of Kyiv
                    </span>
                    <span className={stl.profession}>
                      Master of Philosophy, specialty political science
                    </span>
                  </p>
                </div>
              </li>
              <li className={`${stl.aboutItem} ${stl.aboutItemAdditional}`}>
                <div className={stl.additional}>
                  <h2 className={stl.additionalTitle}>
                    <span className={stl.additionalTitleName}>
                      ADDITIONAL EDUCATION
                    </span>
                  </h2>
                  <div className={stl.aboutTextBox}>
                    <ul className={stl.aboutListAdditional}>
                      <li className={stl.aboutItem}>
                        <div className={stl.aboutItemEducation}>
                          <p className={stl.educationEar}>2020 - 2021</p>
                          <p className={stl.educationPlace}>
                            <span className={stl.university}>
                              IT School GoIT (Kyiv)
                            </span>
                            <span className={stl.profession}>
                              Full Stack Developer
                            </span>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
