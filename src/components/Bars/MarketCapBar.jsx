
const MarketCapBar = ({ progVal1, progVal2}) => {

    return (
      <td>
        
              <progress
              value={progVal1}
              max={progVal2}
              >
              {((progVal1 / progVal2) * 100).toFixed(2)}%
              </progress>
       
      </td>
    )
  }
  
  export default MarketCapBar
 
  
  