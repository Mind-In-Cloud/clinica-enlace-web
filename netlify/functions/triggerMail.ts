import type { Handler } from "@netlify/functions";
import fetch from "node-fetch";



const handler: Handler = async function(event) {
  if (event.body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify("Payload required"),
    };
  }

  const requestBody = JSON.parse(event.body) as {
    subscriberName: string;
    subscriberEmail: string;
    inviteeEmail: string;
  };
  // https://docs.netlify.com/integrations/email-integration/#call-the-function-from-an-event
  //automatically generated snippet from the email preview
  //sends a request to an email handler for a subscribed email
  await fetch(
    `${process.env.URL}/.netlify/functions/emails/contactForm`,
    {
      headers: {
        "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET as string,
      },
      method: "POST",
      body: JSON.stringify({
        from: "",
        to: "",
        subject: "",
        parameters: {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          state: "",
          message: ""
        },
      }),
    }
  );

  return {
    statusCode: 200,
    body: JSON.stringify("Subscribe email sent!"),
  };
};

export { handler };
