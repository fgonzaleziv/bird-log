import { h } from 'preact';
import { useState } from 'preact/hooks';

// Small, fast, and clean: hardcoded birdies for now
const BIRDS = [
  { id: 1, name: 'Northern Cardinal' },
  { id: 2, name: 'Blue Jay' },
  { id: 3, name: 'American Robin' },
  { id: 4, name: 'Mourning Dove' },
  { id: 5, name: 'Red-tailed Hawk' },
];

export default function BirdList() {
  // Seen status, in-memory for now (persistence comes later, amigo)
  const [seen, setSeen] = useState({});
  const [showOnlySeen, setShowOnlySeen] = useState(false);

  const handleMarkSeen = (id) => {
    setSeen((prev) => ({ ...prev, [id]: true }));
  };

  const birdsToShow = showOnlySeen
    ? BIRDS.filter((b) => seen[b.id])
    : BIRDS;

  return (
    <div>
      <div className="field">
        <label className="checkbox">
          <input
            type="checkbox"
            checked={showOnlySeen}
            onChange={() => setShowOnlySeen((v) => !v)}
          />{' '}
          Show only seen birds
        </label>
      </div>
      <ul className="box">
        {birdsToShow.map((bird) => (
          <li key={bird.id} className="level is-mobile" style={{ marginBottom: 8 }}>
            <span className="level-left">{bird.name}</span>
            <span className="level-right">
              {seen[bird.id] ? (
                <span className="tag is-success">¡Visto!</span>
              ) : (
                <button
                  className="button is-small is-info"
                  onClick={() => handleMarkSeen(bird.id)}
                >
                  Mark as Seen
                </button>
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
