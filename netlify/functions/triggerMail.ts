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

  const eventHeaders = event.headers

  const requestBody = JSON.parse(event.body) as {
    firstName: string;
    lastName: string;
    email: string;
    phone : string;
    state: string;
    message: string;
    hash: string;
    'cf-turnstile-response': string;
  }

  requestBody.hash = hashRequest;
  const ip = eventHeaders["client-ip"] ;

  let formData = new FormData()
	formData.append('secret', process.env.CLOUDFARE_TURNSTILE_SECRET_KEY as string);
	formData.append('response', requestBody["cf-turnstile-response"] as string);
	formData.append('remoteip', ip as string);

	const result = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
		body: formData ,
		method: 'POST',
	});

  const outcome = await result.json() as {
    success: boolean;
    'error-codes': string[];
    challenge_ts: string;
    hostname: string;
    action: string;
    cdata: string;
    metadata: {
      interactive: boolean;
    };
  }

  if( outcome.success ) {

    // https://docs.netlify.com/integrations/email-integration/#call-the-function-from-an-event
    // automatically generated snippet from the email preview
    // sends a request to an email handler for a subscribed email
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

    if ( res.ok ) {
      console.info('An email was sent!', 'ID: ', hashRequest, ' Status: ', res.status, ' Message: ', res.statusText)
      return {
        statusCode: res.status,
        body: JSON.stringify("Contact email sent!"),
      };
    } else {
      console.error('Error Email Not Sent: ', 'ID: ', hashRequest ,' Status: ', res.status, ' Error Message: ', res.statusText, )
      return {
        statusCode: res.status,
        body: JSON.stringify("Failed to send email"),
      };
    }

  } else {
    console.error('Error: Challenge failed ID:', hashRequest, ' Error Message: ', outcome['error-codes'], ' Full Response: ', outcome )
    return {
      statusCode: 400,
      body: JSON.stringify("Challenge failed, ID: ", hashRequest),
    }
  }

};

export { handler };
