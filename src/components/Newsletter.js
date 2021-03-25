import { useState } from "react";
import NetlifyForm from 'react-ssg-netlify-forms';

function formValidater(value) {
  var x = value.email;
	var atposition=x.indexOf("@");
	var dotposition=x.lastIndexOf(".");
  var input = document.querySelector("input[type='email']");
	if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){
    input.style.border="1px solid red";
		return false;
  }
  console.log("valid email");
  input.style.border="1px solid green";
	return true;
}

export default function Newsletter() {
  const handleChange = e => setFormValues({email: e.target.value});
	const [formValues, setFormValues] = useState({email: ""});
  return (
    <NetlifyForm formName="Newsletter" formValues={formValues} preSubmit={() => formValidater(formValues)}>
      <input type="hidden" name="form-name" value="Newsletter" />
      <input type="email" name="email" value={formValues.email} onChange={handleChange} required placeholder="Your e-mail" />
      <button type="submit">Subscribe</button>
    </NetlifyForm>
  )
}
