import './Contact.css'

const Contact = () => {
  return (
    <div className="contact-container">
      <p className="contact-p">Tambien me podes encontrar por aca</p>
      <ul className="icon-container">
        <li className="svg-border"><img alt="github icon" src="github.svg" className="svg-icon"></img></li>
        <li className="svg-border"><img alt="linkedin icon" src="linkedin.svg" className="svg-icon"></img></li>
        <li className="svg-border"><img alt="mail icon" src="mail.svg" className="svg-icon"></img></li>
      </ul>
    </div>
  )
}

export default Contact;