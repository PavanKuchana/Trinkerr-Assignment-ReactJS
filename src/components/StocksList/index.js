import {AiOutlineDelete} from 'react-icons/ai'
import StockContext from '../../context/StockContext'
import './index.css'

const StocksList = props => (
  <StockContext.Consumer>
    {value => {
      const {deleteStock} = value
      const {stockDataDetails} = props
      const companyName = stockDataDetails[0].split('::')[0]
      const tag = stockDataDetails[0].split('::')[1]
      const oldPrice = stockDataDetails[1]
      const currentPrice = stockDataDetails[2]
      const percentageValue = (oldPrice - currentPrice) / currentPrice
      const percentage = Math.round(percentageValue * 100) / 100

      const onClickDelete = () => {
        deleteStock(companyName)
      }

      return (
        <div className="stocks-item-container">
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
                onClick={onClickDelete}
                type="button"
                className="delete-button"
              >
                <AiOutlineDelete size={25} />
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
        </div>
      )
    }}
  </StockContext.Consumer>
)

export default StocksList
