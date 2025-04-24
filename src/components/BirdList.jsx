import { h } from 'preact';
import { useState } from 'preact/hooks';
import ActionLog from './ActionLog';

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
  const [log, setLog] = useState([]); // For logging button press times
  const [editMode, setEditMode] = useState(false); // Edit mode toggle

  const handleMarkSeen = (id) => {
    setSeen((prev) => ({ ...prev, [id]: true }));
    setLog((prev) => [
      ...prev,
      { id, action: 'seen', time: new Date().toLocaleString() }
    ]);
  };

  const handleUnsee = (id) => {
    setSeen((prev) => { const copy = { ...prev }; delete copy[id]; return copy; });
    setLog((prev) => [
      ...prev,
      { id, action: 'unsee', time: new Date().toLocaleString() }
    ]);
  };

  const birdsToShow = showOnlySeen
    ? BIRDS.filter((b) => seen[b.id])
    : BIRDS;

  return (
    <div>
      <button
        onClick={() => setEditMode((v) => !v)}
        title="Toggle Edit Mode"
        className={`button is-small is-pulled-right ${editMode ? 'has-background-warning-light has-text-warning-dark' : ''}`}
      >
        ✏️ {editMode ? 'Editing' : ''}
      </button>
      <div className="field mt-5">
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
          <li key={bird.id} className="level is-mobile mb-2">
            <span className="level-left">{bird.name}</span>
            <span className="level-right">
              {seen[bird.id] ? (
                <>
                  <span className="tag is-success">¡Visto!</span>
                  {editMode && (
                    <button
                      className="button is-small is-warning ml-2"
                      onClick={() => handleUnsee(bird.id)}
                    >
                      Un-see
                    </button>
                  )}
                </>
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
      <ActionLog log={log} birds={BIRDS} />
    </div>
  );
}
