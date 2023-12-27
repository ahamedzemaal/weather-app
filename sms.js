function sendSMS() {
  const username = 'ahamedzemaal';
  const password = 'AhaZem@542k';
  const apiKey = '520952d142d62deea7c4b9b0ce61c3ff-74865f82-c2ad-48b4-a263-624dcb1694f1';

  const to = +94781736685;//document.getElementById('phone_number').value; // Assuming the phone_number and message come from form inputs
  const message = document.getElementById('message').value;

  const url = 'https://6g9j4z.api.infobip.com/sms/2/text/single';
  const senderID = 'YourSenderID';

  const headers = new Headers();
  headers.append('Authorization', 'Basic ' + btoa(`${username}:${password}`));
  headers.append('Content-Type', 'application/json');
  headers.append('x-api-key', apiKey);

  const data = {
      from: senderID,
      to: to,
      text: message
  };

  fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
  })
      .then(response => response.json())
      .then(result => {
          console.log('Message sent successfully!', result);
      })
      .catch(error => {
          console.error('Error:', error);
      });
}