import { useState } from 'react';

export default function TabContent({ data }) {
  const [showContent, setShowContent] = useState(true);
  return (
    <div>
      <h3>{data.title}</h3>
      {showContent && <p>{data.content}</p>}
      <div>
        <a href="#" onClick={() => setShowContent(!showContent)}>
          {showContent ? 'Hide Details' : 'Show Details'}
        </a>
      </div>
    </div>
  );
}
