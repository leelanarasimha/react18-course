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

  const [currTab, setCurrTab] = useState(3);

  const description = tabsData[currTab - 1].description;

  function onTabSelected(tabIndex) {
    setCurrTab(tabIndex + 1);
  }

  return (
    <div className="tabs">
      <div className="tab-headings">
        {tabsData.map((tab, index) => (
          <Tab
            tab={tab}
            tabIndex={index}
            currTab={currTab - 1}
            key={tab.title}
            onTabSelected={onTabSelected}
          />
        ))}
      </div>
      <TabDescription>
        <div>{description}</div>
      </TabDescription>
    </div>
  );
}

export default App;
