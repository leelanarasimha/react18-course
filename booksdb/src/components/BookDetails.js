export default function BookDetails({ selectedId, handleBack }) {
  return (
    <div>
      <div>
        <button onClick={handleBack}>Back</button>
      </div>
      {selectedId}
    </div>
  );
}
