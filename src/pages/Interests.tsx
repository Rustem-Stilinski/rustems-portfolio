import { interests } from '../data/content';

export default function Interests() {
  return (
    <section className="page container rise">
      <h1 className="page-title">Outside the editor</h1>
      <p className="lead">
        The artwork below is generated in the browser — swap in your own photos
        by dropping files into <code>/public/images</code> and replacing the
        component (see the note in the source).
      </p>

      <div className="gallery">
        {interests.map((item) => (
          <article key={item.id} className="card gallery__item">
            <img
              className="art"
              src={`${import.meta.env.BASE_URL}images/${item.id}.jpeg`}
              alt={item.title}
              loading="lazy"
            />
            <div className="gallery__body">
              <h3 className="gallery__title">{item.title}</h3>
              <p className="gallery__desc">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
