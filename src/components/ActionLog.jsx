import { h } from 'preact';

export default function ActionLog({ log, birds }) {
  return (
    <div className="mt-4 has-text-grey is-size-7">
      <strong>Action Log:</strong>
      <ul className="ml-3 mt-2">
        {log.map((entry, idx) => {
          const bird = birds.find(b => b.id === entry.id);
          return (
            <li key={idx}>
              {bird ? bird.name : `Bird #${entry.id}`} {entry.action} at {entry.time}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
