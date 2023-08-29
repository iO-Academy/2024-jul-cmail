import EmailPreview from "../EmailPreview"
import './EmailList.css'

const EmailList = ({emails}) => {
    
    return (
        <div className="col-3 email-list">
            {emails.map(email => 
                    <EmailPreview
                        key={email.id} 
                        name={email.name} 
                        subject={email.subject} 
                        body={email.body}
                        date_created={email.date_created}
                        read={email.read}
                    />
            )}
        </div>
    )
}

export default EmailList