import './Contact__form.css'

const Contact__form = () =>(
<form action="">
<h2>Get in touch</h2>
<input type="text" placeholder='Name *' className='name-input'/>
<input type="email" placeholder='Email *' className='email-input'/>
<input type="text" placeholder='Subject *'/>
<textarea name="message" id="message" placeholder='Message *'></textarea>
<input type="submit" value="Send Message"/>
</form>
)

export default Contact__form
