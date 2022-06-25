import { FormEvent } from 'react'

import { createER } from '../lib/cms-api'

export const EvangelismForm = () => {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const target = event.target as HTMLFormElement
    const elements = target.elements

    const name = (elements.namedItem('name') as HTMLInputElement).value
    const email = (elements.namedItem('email') as HTMLInputElement).value
    const mobile = (elements.namedItem('mobile') as HTMLInputElement).value
    const address = (elements.namedItem('address') as HTMLInputElement).value
    const age = (elements.namedItem('age') as HTMLInputElement).value
    const occupation = (elements.namedItem('occupation') as HTMLInputElement).value
    const religion = (elements.namedItem('religion') as HTMLInputElement).value
    const details = (elements.namedItem('details') as HTMLInputElement).value

    await createER()
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <label>
        Name:
        <input name="name" style={{ border: '0.3px solid grey', borderRadius: '4px' }} type="text" />
      </label>
      <label>
        Email:
        <input name="email" style={{ border: '0.3px solid grey', borderRadius: '4px' }} type="text" />
      </label>
      <label>
        Mobile:
        <input name="mobile" style={{ border: '0.3px solid grey', borderRadius: '4px' }} type="text" />
      </label>
      <label>
        Address:
        <input name="address" style={{ border: '0.3px solid grey', borderRadius: '4px' }} type="text" />
      </label>
      <label>
        Age:
        <input name="age" style={{ border: '0.3px solid grey', borderRadius: '4px' }} type="text" />
      </label>
      <label>
        Occupation:
        <input name="occupation" style={{ border: '0.3px solid grey', borderRadius: '4px' }} type="text" />
      </label>
      <label>
        Religion:
        <input name="religion" style={{ border: '0.3px solid grey', borderRadius: '4px' }} type="text" />
      </label>
      <label>
        Other Details:
        <input name="details" style={{ border: '0.3px solid grey', borderRadius: '4px' }} type="text" />
      </label>

      <input className="cursor-pointer" type="submit" value="Submit" />
    </form>
  )
}
