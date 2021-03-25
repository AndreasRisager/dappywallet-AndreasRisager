import { useState } from "react";
import NetlifyForm from 'react-ssg-netlify-forms';

function formValidater(formValues) {
	var atposition=formValues.indexOf("@");
	var dotposition=formValues.lastIndexOf(".");
	if (atposition<1 || dotposition<atposition+2 || dotposition+2>=formValues.length){
		return false;
  }
  console.log("valid email");
	return true;
}

export default function Newsletter() {
  const handleChange = e => setFormValues(e.target.value);
	const [formValues, setFormValues] = useState("");
  return (
    <NetlifyForm formName="Newsletter" formValues={formValues} preSubmit={formValidater(formValues)} >
      <input type="hidden" name="form-name" value="Newsletter" />
      <input type="email" name="email" value={formValues.email} onChange={handleChange} required placeholder="Your e-mail" />
      <button type="submit">Subscribe</button>
    </NetlifyForm>
  )
}
