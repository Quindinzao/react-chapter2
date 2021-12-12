// External libraries
import React from 'react'
import ReactDOM from 'react-dom'
import { createServer, Model } from 'miragejs'

// Components
import { App } from './App'

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento de website em React',
          category: 'Dev',
          type: 'deposit',
          amount: 3000,
          createdAt: new Date('2022-01-09 09:31:46')
        },
        {
          id: 2,
          title: 'Rolê',
          category: 'Despesa comum',
          type: 'withdraw',
          amount: 62.90,
          createdAt: new Date('2022-01-14 22:40:02')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
