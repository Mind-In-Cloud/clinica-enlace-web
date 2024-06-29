import type { Handler, HandlerEvent } from "@netlify/functions";
import fetch from "node-fetch";



const handler: Handler = async function(event : HandlerEvent) {

  if (event.body === null) {
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
  };

  // https://docs.netlify.com/integrations/email-integration/#call-the-function-from-an-event
  //automatically generated snippet from the email preview
  //sends a request to an email handler for a subscribed email

  const res = await fetch(
    `${process.env.URL}/.netlify/functions/emails/contactForm`,
    {
      headers: {
        "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET as string,
      },
      method: "POST",
      body: JSON.stringify({
        from: `${process.env.NETLIFY_EMAIL_SENDER}`,
        to: `${process.env.NETLIFY_EMAIL_RECIPIENT}`,
        subject: "Clinica Enlace, contacto de: " + requestBody.firstName + " " + requestBody.lastName,
        parameters: requestBody,
      }),
    }
  );

  if (!res.ok) {
    console.error('Error #:', res.status, 'Error Message:', res.statusText)
    return {
      statusCode: res.status,
      body: JSON.stringify("Failed to send email"),
    };
  } else {
    console.info('An email was sent!')
    return {
      statusCode: 200,
      body: JSON.stringify("Subscribe email sent!"),
    };
  }


};

export { handler };
