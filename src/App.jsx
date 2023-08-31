import Header from './Components/Header'
import OpenEmail from './Components/OpenEmail'
import Inbox from './Components/Inbox'
import { useState } from 'react'
import NewEmail from './Components/NewEmail'
import SentBox from './Components/SentBox'
import Alert from './Components/Alert'

function App() {
  const [inboxCount, setInboxCount] = useState(0)
  const [emailId, setEmailId] = useState(false)
  const [refreshEmails, setRefreshEmails] = useState(false)
  const [emailListToDisplay, setEmailListToDisplay] = useState('inbox')
  const [newEmail, setNewEmail] = useState(false)

  const closeEmail = () => {
    setEmailId(false)
  }

  const openNewEmail = () => {
    setNewEmail(true)
  }

  const cancelNewEmail = () => {
    setNewEmail(false)
  }
  
  return (
    <div className="row h-100 g-0">
      <Alert/>
      {newEmail && <NewEmail cancelNewEmail={cancelNewEmail}/>}
      <Header inboxCounter={inboxCount} setEmailListToDisplay={setEmailListToDisplay} emailListToDisplay={emailListToDisplay} setNewEmail={setNewEmail} openNewEmail={openNewEmail} />
      {emailListToDisplay == 'inbox' && <Inbox emailId={emailId} setInboxCount={setInboxCount} setEmailId={setEmailId} refreshEmails={refreshEmails}/>}
      {emailListToDisplay == 'sent' && <SentBox emailId={emailId} setInboxCount={setInboxCount} setEmailId={setEmailId} refreshEmails={refreshEmails}/>}
      {emailId && <OpenEmail emailId={emailId} setRefreshEmails={setRefreshEmails} closeEmail={closeEmail}/>}
    </div>
  )
}

export default App
