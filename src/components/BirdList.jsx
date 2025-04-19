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
    <div style={{ position: 'relative' }}>
      <button
        onClick={() => setEditMode((v) => !v)}
        title="Toggle Edit Mode"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          background: editMode ? '#ffe066' : '#f5f5f5',
          border: '1px solid #ccc',
          borderRadius: 6,
          padding: '6px 10px',
          fontSize: 18,
          cursor: 'pointer',
          color: editMode ? '#b8860b' : '#666',
          boxShadow: editMode ? '0 0 6px #ffe066' : 'none',
          transition: 'all 0.2s',
        }}
      >
        ✏️ {editMode ? 'Editing' : ''}
      </button>
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
      {/* Log of button presses, for debugging/dev only */}
      <div style={{ marginTop: 16, fontSize: 12, color: '#666' }}>
        <strong>Action Log:</strong>
        <ul>
          {log.map((entry, idx) => {
            const bird = BIRDS.find(b => b.id === entry.id);
            return (
              <li key={idx}>
                {bird ? bird.name : `Bird #${entry.id}`} {entry.action} at {entry.time}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
