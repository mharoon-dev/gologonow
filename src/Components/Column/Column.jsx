import "./column.css";

const Column = () => {
  return (
    <>
      <div className="columnContainer">
        <div className="columnContentBox">
          <h2 className="columnHeading">EASY</h2>
          <h6 className="columnSubHeading">COMMUNICATION</h6>
        </div>
        <div className="columnContentBox">
          <h2 className="columnHeading">COMPLETE</h2>
          <h6 className="columnSubHeading">ANALYSIS</h6>
        </div>
        <div className="columnContentBox">
          <h2 className="columnHeading">COMPLETE</h2>
          <h6 className="columnSubHeading">PACKAGES</h6>
        </div>
        <div className="columnContentBox" style={{ borderRight: "none" }}>
          <h2 className="columnHeading">SMOOTH</h2>
          <h6 className="columnSubHeading">DELIVERY</h6>
        </div>
      </div>
    </>
  );
};

export default Column;
