import { Link } from 'react-router-dom';
import DecisionGraph from '../components/DecisionGraph';

const highlights = [
  { k: 'Now', v: 'Software Engineer @ Freddie Mac' },
  { k: 'Stack', v: 'React · TypeScript · Java · AWS' },
  { k: 'Studying', v: 'M.S. CIS, Boston University' },
  { k: 'Based in', v: 'Arlington, VA' },
];

export default function Home() {
  return (
    <>
      <section className="hero page rise">
        <div className="container hero__grid">
          <div className="hero__copy">
            <h1 className="hero__title">
              I build decision engines
              <br />
              and the web apps around them.
            </h1>
            <p className="lead">
              I&apos;m Rustem — a software engineer in the DC area. By day I
              work on credit-scoring decision trees at Freddie Mac; on the side
              I build full-stack apps and dig into how the tools I use actually
              work.
            </p>
            <div className="hero__actions">
              <Link to="/projects" className="btn btn-primary">
                See my work
              </Link>
              <Link to="/contact" className="btn btn-ghost">
                Get in touch
              </Link>
            </div>
          </div>

          <div className="hero__art" aria-hidden="false">
            <DecisionGraph />
            <p className="hero__art-caption">
              a decision tree — the shape of most of my work
            </p>
          </div>
        </div>
      </section>

      <section className="container highlights">
        {highlights.map((h) => (
          <div key={h.k} className="highlight">
            <span className="highlight__k">{h.k}</span>
            <span className="highlight__v">{h.v}</span>
          </div>
        ))}
      </section>
    </>
  );
}
