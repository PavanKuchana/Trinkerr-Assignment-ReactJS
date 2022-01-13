import {GrFormAdd} from 'react-icons/gr'
import StockContext from '../../context/StockContext'
import './index.css'

const StockItem = props => {
  const {stockData} = props
  const companyName = stockData[0].split('::')[0]
  const tag = stockData[0].split('::')[1]
  const oldPrice = stockData[1]
  const currentPrice = stockData[2]
  const percentageValue = (oldPrice - currentPrice) / currentPrice
  const percentage = Math.round(percentageValue * 100) / 100

  return (
    <StockContext.Consumer>
      {value => {
        const {addStock} = value
        const onClickAdd = () => {
          addStock(stockData)
        }

        return (
          <li className="stocks-item-container">
            <div className="card-container">
              <div className="company-tag-price">
                <h1
                  style={{color: `${percentage < 0 ? 'red' : 'green'}`}}
                  className="card-heading"
                >
                  {companyName}
                </h1>
                <p className="card-tag"> {tag} </p>
              </div>
              <div className="button-container">
                <button
                  onClick={onClickAdd}
                  type="button"
                  className="add-button"
                >
                  <GrFormAdd size={40} />
                </button>

                <div className="company-tag-price">
                  <p
                    style={{color: `${percentage < 0 ? 'red' : 'green'}`}}
                    className="old-price"
                  >
                    {oldPrice}
                  </p>
                  <p className="current-price"> {percentage}% </p>
                </div>
              </div>
            </div>
          </li>
        )
      }}
    </StockContext.Consumer>
  )
}

export default StockItem
