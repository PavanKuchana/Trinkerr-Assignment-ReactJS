import React from 'react'

const StockContext = React.createContext({
  stockList: [],
  addStock: () => {},
  deleteStock: () => {},
})

export default StockContext
