import { useState } from "react";
import NetlifyForm from 'react-ssg-netlify-forms'

function formValidater(e) {
	var x=e.target.form.email.value;
	var atposition=x.indexOf("@");
	var dotposition=x.lastIndexOf(".");
	if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){
		console.log("no");
		e.target.form.email.focus();
		e.target.form.email.style.border = "2px solid red";
		e.target.form.email.style.outlineColor = "red";
		return false;
  } else {
		console.log("yes");
		e.target.form.email.style.border = "1px solid green";
		e.target.form.email.style.outlineColor = "green";
		return true;
	}
}

export default function Newsletter() {
  const handleChange = e => setFormValues({ ...formValues, [e.target.email]: e.target.value })
	const [formValues, setFormValues] = useState({
		email: ''
	})
  return (
    <NetlifyForm formName="Newsletter" formValues={formValues} preSubmit={formValidater} >
      <input type="hidden" name="form-name" value="Newsletter" />
      <input type="email" name="email" value={formValues.email} onChange={handleChange} required placeholder="Your e-mail" />
      <button type="submit">Subscribe</button>
    </NetlifyForm>
  )
}
