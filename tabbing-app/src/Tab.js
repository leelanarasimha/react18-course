export default function Tab({ tab, tabIndex, currTab, onTabSelected }) {
  return (
    <div
      className={`heading ${tabIndex === currTab ? 'active' : ''}`}
      onClick={() => onTabSelected(tabIndex)}
    >
      {tab.title}
    </div>
  );
}
