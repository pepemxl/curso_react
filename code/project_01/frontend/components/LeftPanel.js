// components/LeftPanel.js

import Link from 'next/link';

const LeftPanel = () => {
  return (
    <div className="left-panel">
      <h2>Navigation</h2>
      <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/about"><a>About</a></Link></li>
        {/* Add more navigation links as needed */}
      </ul>
    </div>
  );
};

export default LeftPanel;
