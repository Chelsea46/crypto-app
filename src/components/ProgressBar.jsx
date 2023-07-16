
const ProgressBar = ({formatNumber, progVal1, progVal2}) => {
    console.log(progVal1)
  return (
    <td>
        <div className="progress-container">
            <div className="progress-label">
                <div>
                    <span className="bullet">•</span>
                    <span>{formatNumber(progVal1)}</span>
                </div>
                <div>
                    <span className="bullet">•</span>
                    <span>{formatNumber(progVal2)}</span>
                </div>
            </div>
            <progress
            value={progVal1}
            max={progVal2}
            >
            {((progVal1 / progVal2) * 100).toFixed(2)}%
            </progress>
        </div>
    </td>
  )
}

export default ProgressBar

