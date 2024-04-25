import MailchimpSubscribe from 'react-mailchimp-subscribe'

import NewsletterForm from './newslatter-form'

const NewsletterSubscribe = () => {
  const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL

  return (
    <MailchimpSubscribe
      render={(props) => {
        const { message, status, subscribe } = props || {}

        return (
          <NewsletterForm
            message={message}
            onValidated={(formData) => subscribe(formData)}
            status={status}
          />
        )
      }}
      url={MAILCHIMP_URL}
    />
  )
}

export default NewsletterSubscribe
