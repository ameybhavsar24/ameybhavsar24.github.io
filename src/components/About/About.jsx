import { Container, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import './About.scss';
import ProfileWEBP from '../../assets/profile.webp';
import Skills from './skills';
import FadeInSection from '../../utilities/FadeInSection/FadeInSection';
import AboutBkg from '../../assets/section-bkg/about.jpg'
export default function About() {
  return (
    <FadeInSection>
    <div style={{
      backgroundImage: "linear-gradient(45deg, rgba(255,255,255, 0.6), rgba(255,255,255,0.6)), url('" + AboutBkg +  "')",
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center center'
    }}>
    {/*StyleWrapper style={{backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)) url(${AboutBkg})`, backgroundSize: 'cover'}}>*/}
      {/* eslint-disable-next-line */}
      <a name="about">
        <Container fluid className="about section-content">
          <Row>
            <Col
              xs={12}
              sm={6}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="about__heading">
                About
                <hr />
              </div>
            </Col>
            <Col
              xs={12}
              sm={6}
              className="d-flex align-items-start justify-content-center about__profile"
            >
              <img
                src={ProfileWEBP}
                alt="Amey's profile"
                className="about__profile__img"
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="d-flex align-items-end">
              <div className="about__text">
                Hey! I'm{' '}
                <strong style={{ fontSize: '1.35rem' }}>Amey Bhavsar</strong>.
                <br />
                A computer engineering student at the University of Mumbai and a
                enthusiastic open source contributer.
                <br />
                <p>
                  Web developer — creating beautiful web experiences using MERN
                  stack.
                  <br />
                  Competitive programmer —{' '}
                  <a href="https://www.codechef.com/users/ameybhavsar">
                    Codechef
                  </a>
                  ,{' '}
                  <a href="https://codeforces.com/profile/bhavsar">
                    Codeforces
                  </a>
                  .
                </p>
              </div>
            </Col>
            <Col xs={12} className="d-flex align-items-end">
              <div className="about__text">
                <h4 className="about__subheading">
                  <b>Stuff I know</b>
                </h4>
                <div className="about__icons d-flex">
                  {Skills.map((skill) => {
                    return (
                      <div className="skill-icon" key={skill.tooltip}>
                        <OverlayTrigger
                          key={skill.tooltip}
                          placement="bottom"
                          overlay={
                            <Tooltip id={`tooltip-${skill.tooltip}`}>
                              <strong>{skill.tooltip}</strong>
                            </Tooltip>
                          }
                        >
                          {skill.icon}
                        </OverlayTrigger>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </a>
    </div>
    </FadeInSection>
  );
}
