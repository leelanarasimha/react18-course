import { useState } from 'react';
import './App.css';
import Tab from './Tab';
import TabDescription from './TabDescription';

function App() {
  const [tabsData, setTabsData] = useState([
    { title: 'tab 1', description: 'tab1 description' },
    { title: 'tab 2', description: 'tab2 description' },
    { title: 'tab 3', description: 'tab3 description' }
  ]);
  return (
    <div className="tabs">
      <div class="tab-headings">
        {tabsData.map((tab) => (
          <Tab tab={tab} />
        ))}
      </div>
      <TabDescription />
    </div>
  );
}

export default App;
