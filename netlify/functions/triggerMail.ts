import type { Handler, HandlerEvent } from "@netlify/functions";
import fetch from "node-fetch";
import hash from "@utils/hash";

const handler: Handler = async function(event : HandlerEvent) {

  const hashRequest = hash(event.body);

  if (event.body === null) {
    console.error('Error: No payload:', hashRequest )
    return {
      statusCode: 400,
      body: JSON.stringify("Payload required"),
    };
  }

  const requestBody = JSON.parse(event.body) as {
    firstName: string;
    lastName: string;
    email: string;
    phone : string;
    state: string;
    message: string;
    hash: string;
  }
  requestBody.hash = hashRequest;

  const {token} = JSON.parse(event.body)

  // https://docs.netlify.com/integrations/email-integration/#call-the-function-from-an-event
  //automatically generated snippet from the email preview
  //sends a request to an email handler for a subscribed email

  // TODO: Uncomment this code when the email handler is ready
  // const res = await fetch(
  //   `${process.env.URL}/.netlify/functions/emails/contactForm`,
  //   {
  //     headers: {
  //       "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET as string,
  //     },
  //     method: "POST",
  //     body: JSON.stringify({
  //       from: `${process.env.NETLIFY_EMAIL_SENDER}`,
  //       to: `${process.env.NETLIFY_EMAIL_RECIPIENT}`,
  //       subject: "Clinica Enlace, contacto de: " + requestBody.firstName + " " + requestBody.lastName,
  //       parameters: requestBody,
  //     }),
  //   }
  // );

  // TODO: Remove this code when the email handler is ready
  const res = {
    ok : true,
    status : 200,
    statusText : "OK"
  }

  if (!res.ok) {
    console.error('Error #: ', res.status, 'Error Message: ', res.statusText, 'ID: ', hashRequest)
    return {
      statusCode: res.status,
      body: JSON.stringify("Failed to send email"),
    };
  } else {
    console.info('An email was sent!', 'ID: ', hashRequest)
    return {
      statusCode: 200,
      body: JSON.stringify("Subscribe email sent!"),
    };
  }


};

export { handler };
