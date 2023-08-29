import EmailItem from "../EmailItem"

const EmailList = ({emails}) => {
    
    return (
        <div className="container w-25">
            {emails.map(email => 
                    <EmailItem
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