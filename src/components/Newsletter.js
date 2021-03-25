import { useState, useEffect } from "react";

export default function Newsletter() {
	const [emailValue, setEmailValue] = useState("");

  useEffect(function() {
    var atposition=emailValue.indexOf("@");
    var dotposition=emailValue.lastIndexOf(".");
    var email = document.querySelector("#newsletterEmail");
    if(emailValue === "") {
      email.style.border="1px solid #82899b";
      return;
    }
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=emailValue.length){
      email.style.border="1px solid red";
    } else {
      email.style.border="1px solid green";
    }
  }, [emailValue])

  return (
    <form noValidate onSubmit={(e) => e.preventDefault()}>
      <input type="email" name="email" id="newsletterEmail" value={emailValue} onChange={(e) => setEmailValue(e.target.value)} placeholder="Your e-mail" required />
      <button type="submit">Subscribe</button>
    </form>
  )
}
