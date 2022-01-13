import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import StockContext from './context/StockContext'
import Home from './components/Home'
import WatchList from './components/WatchList'
import './App.css'

const getCartListFromLocalStorage = () => {
  const stringifiedCartList = localStorage.getItem('stocksWatchList')
  const parsedCartList = JSON.parse(stringifiedCartList)
  console.log(parsedCartList)
  if (parsedCartList === null) {
    return []
  }
  return parsedCartList
}

class App extends Component {
  state = {
    stockList: getCartListFromLocalStorage(),
  }

  addStock = stockItem => {
    this.setState(prevState => ({
      stockList: [...prevState.stockList, stockItem],
    }))
  }

  deleteStock = cName => {
    const {stockList} = this.state
    const updatedStockList = stockList.filter(
      eachStockItem => eachStockItem[0].split('::')[0] !== cName,
    )
    this.setState({stockList: updatedStockList})
  }

  render() {
    const {stockList} = this.state
    localStorage.setItem('stocksWatchList', JSON.stringify(stockList))
    console.log(JSON.stringify(stockList))
    return (
      <StockContext.Provider
        value={{
          addStock: this.addStock,
          deleteStock: this.deleteStock,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Stocks" component={WatchList} />
        </Switch>
      </StockContext.Provider>
    )
  }
}

export default App
