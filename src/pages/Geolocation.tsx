import GeoLocator from '../components/GeoLocator';
import '../components/Geolocation.css';

export default function Geolocation() {
  return (
    <section className="page container rise">
      <h1 className="page-title">Find me</h1>
      <p className="lead">
       
      </p>

      <div className="lab-grid">
        <GeoLocator />
      </div>
    </section>
  );
}
