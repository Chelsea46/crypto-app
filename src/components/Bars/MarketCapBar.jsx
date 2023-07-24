
const MarketCapBar = ({ progVal1, progVal2 }) => {
  const progressValue = ((progVal1 / progVal2) * 100).toFixed(2);

  return (
    <td>
      <progress className="mark-cap-bar"
        value={progVal1}
        max={progVal2}
        style={{ backgroundColor: "rgb(26, 215, 97)", borderRadius: "10px", borderStyle: "none", height: "10px", marginTop: "1em"}} 
      >
        {progressValue}%
      </progress>
     
    </td>
  );
};

export default MarketCapBar;

 
  
  