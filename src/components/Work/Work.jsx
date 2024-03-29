import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import './Work.scss';
import { GrPersonalComputer } from 'react-icons/gr';
import FadeInSection from '../../utilities/FadeInSection/FadeInSection';
import ProjectBkg from '../../assets/section-bkg/project.jpg'
import projects from './projects';
export default function Projects() {
  return (
    <FadeInSection>
    <div style={{
      backgroundImage: "linear-gradient(45deg, rgba(255,255,255, 0.6), rgba(255,255,255,0.6)), url('" + ProjectBkg +  "')",
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center center'
    }}>
      {/* eslint-disable-next-line */}
      <a name="projects">
        <Container fluid className="work section-content">
          <Row>
            <Col
              xs={12}
              sm={6}
              className="d-flex align-items-center justify-content-center"
            >
              <div className="section-heading">
                Projects
                <hr />
              </div>
            </Col>
            <Col
              xs={12}
              sm={6}
              className="d-flex align-items-center justify-content-center section-img"
            >
              <GrPersonalComputer />
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="d-flex align-items-end">
              <Row>
                {projects.map((project) => {
                  return (
                    <Col
                      xs={12}
                      sm={6}
                      spacing={1}
                      key={project.title}
                      style={{ margin: '1rem 0rem'}}
                    >
                      <ProjectCard {...project} />
                    </Col>
                  );
                })}
                <Col xs={12} sm={6} spacing={1} style={{ margin: '1rem 0rem' }}>
                  <Card style={{ width: '100%' }}>
                    <Card.Body>
                      <Card.Title>
                        <h4>More projects</h4>
                      </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        <a
                          rel="noreferrer"
                          href="https://github.com/ameybhavsar24/"
                          target="_blank"
                        >
                          See more on Github
                        </a>
                      </Card.Subtitle>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </a>
      </div>
    </FadeInSection>
  );
}

const ProjectCard = (props) => {
  const { title, subtitle, text, href } = props;
  return (
    <Card style={{ width: '100%', background: 'rgba(255, 255, 255, 0.5)'}} className="project-card">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
        <Card.Text>{text}</Card.Text>
        {href.live && (
          <Button tag="a" target="blank" href={href.live} variant="warning">
            Live
          </Button>
        )}{' '}
        {href.code && (
          <Button tag="a" target="blank" href={href.code} variant="warning">
            <FaGithub /> Source Code
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};
