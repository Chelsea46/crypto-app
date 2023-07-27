
const PortfolioBar = ({ progVal1, progVal2 }) => {
    const progressValue = ((progVal1 / progVal2) * 100).toFixed(2);
    
    return (
      <div className="port-bar-container">
        <p>{progressValue}%</p>
        <progress className="port-bar"
          value={progVal1}
          max={progVal2}

        >
          {progressValue}%
        </progress>
      </div>
       
     
    );
  };
  
  export default PortfolioBar;
  
   