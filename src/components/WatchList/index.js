import StocksList from '../StocksList'
import StockContext from '../../context/StockContext'
import './index.css'

const WatchList = () => (
  <StockContext.Consumer>
    {value => {
      const stringifiedCartList = localStorage.getItem('stocksWatchList')
      const parsedCartList = JSON.parse(stringifiedCartList)
      return (
        <div>
          <h1 className="watch-list-heading">W A T C H L I S T</h1>
          <ul className="stocks-watch-list">
            {parsedCartList.map((each, index) => (
              <StocksList
                key={index.toString()}
                stockDataDetails={each}
                value={value}
              />
            ))}
          </ul>
        </div>
      )
    }}
  </StockContext.Consumer>
)

export default WatchList
