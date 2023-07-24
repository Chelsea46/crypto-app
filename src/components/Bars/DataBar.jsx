
const DataBar = ({ progVal1, progVal2 }) => {
    const progval = ((progVal2 / 100) * progVal1);
    
    return (
   
        <progress
          className="prog-bar"
          value={progval}
          max={progVal1}
        >
         
          {progval}%
        </progress>

    );
  };
  
  export default DataBar;
  
   