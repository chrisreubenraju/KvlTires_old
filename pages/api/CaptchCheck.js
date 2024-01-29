const validateCaptcha = (response_key) => {
  // return new Promise((resolve, reject) => {
  //   const secret_key = process.env.NEXT_PUBLIC_SECRET_KEY;
  //   const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${response_key}`;
  //   fetch(url, {
  //     method: 'post',
  //   })
  //     .then((response) => response.json())
  //     .then((google_response) => {
  //       if (google_response.success == true) {
  //         resolve(true);
  //       } else {
  //         resolve(false);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       resolve(false);
  //     });
  // });
};

// import fetch from "node-fetch";

// const sleep = () => new Promise((resolve) => {
//   setTimeout(() => {
//     resolve();
//   }, 350);
// });

// export default async function handler(req, res) {
//   const { body, method } = req;

//   // Extract the email and captcha code from the request body
//   const { email, captcha } = body;

//   if (method === "POST") {
//     // If email or captcha are missing return an error
//     if (!email || !captcha) {
//       return res.status(422).json({
//         message: "Unproccesable request, please provide the required fields",
//       });
//     }

//     try {
//       // Ping the google recaptcha verify API to verify the captcha code you received
//       const response = await fetch(
//         `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`,
//         {
//           headers: {
//             "Content-Type": "application/x-www-form-urlencoded; charSet =utf-8",
//           },
//           method: "POST",
//         }
//       );
//       const captchaValidation = await response.json();
//       /**
//        * The structure of response from the veirfy API is
//        * {
//        *  "success": true|false,
//        *  "challenge_ts": timestamp,  // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
//        *  "hostname": string,         // the hostname of the site where the reCAPTCHA was solved
//        *  "error-codes": [...]        // optional
//         }
//        */
//       if (captchaValidation.success) {
//         // Replace this with the API that will save the data received
//         // to your backend
//         await sleep();
//         // Return 200 if everything is successful
//         return res.status(200).send("OK");
//       }

//       return res.status(422).json({
//         message: "Unproccesable request, Invalid captcha code",
//       });
//     } catch (error) {
//       console.log(error);
//       return res.status(422).json({ message: "Something went wrong" });
//     }
//   }
//   // Return 404 if someone pings the API with a method other than
//   // POST
//   return res.status(404).send("Not found");
// }

// const axios = require('axios');

// //enabling cors

// //Parse data
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// //add router in express
// app.use('/', router);

// //POST route
// // router.get('/', (req, res) => {
// //   console.log(process.env.NEXT_PUBLIC_SECRET_KEY);
// //   res.status(200);
// //   res.json({ message: process.env.NEXT_PUBLIC_SECRET_KEY });
// //   // sending back an HTML file that a browser can render on the screen.
// //   // res.sendFile(path.resolve('pages/index.html'));
// // });
// // router.post('/post', async (req, res) => {
// //   //Destructuring response token from request body

// // });

export default async (req, res) => {
  if (req.method === 'POST') {
    const { tokenIn } = req.body;
    // axios
    //   .post(
    //     `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_SECRET_KEY}&response=${token}`
    //   )
    //   .then((res) => [
    //     res.  res.status(200).json({`Human 👨 👩 ${token} ${process.env.NEXT_PUBLIC_SECRET_KEY}`})
    //   ])
    //   .catch((e) => {
    //     res.status(401);
    //     res.send({
    //       error: `User already exists ${e} --  ${req.body}`,
    //     });
    //   });
    //sends secret key and response token to google
    // try {
    //   axios.post(
    //     `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_SECRET_KEY}&response=${token}`
    //   );
    // } catch (e) {
    //   res.status(401);
    //   res.send({
    //     error: `User already exists ${email} -- ${password} ${req.body}`,
    //   });
    //   return;
    // }

    //check response status and send back to the client-side
    await res.status(401).json({ yestoken: tokenIn });
    // Process a POST request
  } else {
    // Handle any other HTTP method
    await res.status(200).json({ message: process.env.NEXT_PUBLIC_SECRET_KEY });
  }
};
