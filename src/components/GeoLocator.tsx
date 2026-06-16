import { useState } from 'react';

type GeoState =
  | { status: 'idle' }
  | { status: 'locating' }
  | { status: 'ok'; lat: number; lng: number; accuracy: number }
  | { status: 'error'; message: string };

// HTML5 Geolocation API with graceful handling of denial / unavailability.
export default function GeoLocator() {
  const [geo, setGeo] = useState<GeoState>({ status: 'idle' });

  const locate = () => {
    if (!('geolocation' in navigator)) {
      setGeo({ status: 'error', message: 'Geolocation isn’t supported here.' });
      return;
    }
    setGeo({ status: 'locating' });
    navigator.geolocation.getCurrentPosition(
      (pos) =>
        setGeo({
          status: 'ok',
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          accuracy: Math.round(pos.coords.accuracy),
        }),
      (err) =>
        setGeo({
          status: 'error',
          message:
            err.code === err.PERMISSION_DENIED
              ? 'Permission denied — no worries.'
              : 'Couldn’t get a location fix.',
        }),
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  return (
    <div className="card lab-card">
      <div className="lab-card__head">
        <h3>Geolocation</h3>
        <span className="lab-card__tag">where are you?</span>
      </div>
      <p className="lab-card__desc">
        Asks the browser for your coordinates. Your location never leaves the
        page -  it’s only shown to you.
      </p>

      <div className="geo-readout" aria-live="polite">
        {geo.status === 'idle' && <span className="geo-muted">No fix yet.</span>}
        {geo.status === 'locating' && (
          <span className="geo-muted">Locating…</span>
        )}
        {geo.status === 'error' && (
          <span className="geo-error">{geo.message}</span>
        )}
        {geo.status === 'ok' && (
          <span className="geo-coords">
            {geo.lat.toFixed(4)}, {geo.lng.toFixed(4)}
            <span className="geo-muted"> · ±{geo.accuracy} m</span>
          </span>
        )}
      </div>

      <button
        className="btn btn-primary"
        onClick={locate}
        disabled={geo.status === 'locating'}
      >
        {geo.status === 'ok' ? 'Update location' : 'Find my location'}
      </button>
    </div>
  );
}
