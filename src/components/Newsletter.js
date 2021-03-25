import { useState } from "react";
import NetlifyForm from 'react-ssg-netlify-forms';

function formValidater() {
  var input = document.querySelector("input[type='email']");
  var x = input.value;
	var atposition=x.indexOf("@");
	var dotposition=x.lastIndexOf(".");
	if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){
    input.style.border="1px solid red";
    input.style.outlineColor = "red";
    input.focus();
		return false;
  }
  console.log("valid email");
  input.style.border="1px solid green";
  input.style.outlineColor = "green";
	return true;
}

export default function Newsletter() {
  const handleChange = e => setFormValues({ ...formValues, [e.target.name]: e.target.value });
	const [formValues, setFormValues] = useState({email: ""});

  console.log(formValues);
  
  return (
    <NetlifyForm formName="Newsletter" formValues={formValues} preSubmit={formValidater}>
      <input type="email" name="email" value={formValues.email} onChange={handleChange} placeholder="Your e-mail" required />
      <button type="submit">Subscribe</button>
    </NetlifyForm>
  )
}
