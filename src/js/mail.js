function sendMail() {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    number: document.getElementById("number").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_1ym55xe";
  const templateID = "template_buqe36c";

  emailjs
    .send(serviceID, templateID, params)
    .then((response) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("number").value = "";
      document.getElementById("message").value = "";
      console.log(response);
      alert("Tack för att du kontaktar mig!");
    })
    .catch((err) => console.log(err));
}
