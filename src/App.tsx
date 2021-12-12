// External libraries
import { useState } from 'react'
import Modal from 'react-modal'

// Components
import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { NewTransactionModal } from './components/NewTransactionModal'

// Hooks
import { TransactionProvider } from './hooks/useTransactions'

// Styled
import { GlobalStyle } from './styles/global'

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTrasactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTrasactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTrasactionModalOpen(false)
  }

  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal} 
      />
      <GlobalStyle />
    </TransactionProvider>
  )
}
