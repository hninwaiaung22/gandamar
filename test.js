
const PageAccessToken='EAAFlv95qJK0BAOp3bT9eEHB27hHMkLvd9a8aZAZB5daInNk8ZAUriwseGl516XZBjFZBB4UlZBmtPfbCJB3sHfFSahsdac4iZC8u0SjYZAlZB7zRxbqSvhPANFQcUB0MTKB0GIilZCFrPytPdNVJpSwQZCbJfxFdWDWusKbZAAfNAlmB1tUIMnJzw0Lk';
 const sendmessageurl='https://graph.facebook.com/v4.0/me/messages?access_token='+PageAccessToken
 const admin= require('firebase-admin');

   const serviceAccount=({
  "type": "service_account",
  "project_id": "gandamarhninsein",
  "private_key_id": "ac2231fe19ead90ef548a3c622a1f0c4c6c90898",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDQDn+E42nCN+wv\nTZ/smvpFFheMLbatPl/5r6Y0k8CEoHFabpXbXTXy8A3DMQC0nd0tKEt+cIOHZu36\ngnw7VkCcqFRNvPiAsXjWzwkUcB+w3VZ7lrqJk36/U0BP6AzGzHR4jycEeYnDwNo0\nisGh23l8QeFPWtzF3Y60pWnBpMXsXkrF3gPhtGCFVLJNOINmLci92P+gj6Gr1pi9\nfCdiivvIsPboUNi33aGePK719xv3ogHhNUQwrbauUBe7Gz5AXzcwAH3CzebARAiz\nlXu2qeFPZRqoqLppC/BrpY9wBujzuUIka51xoyBIn5ha91bUXFCUK0u+d3oD9ZlN\nfBJB084dAgMBAAECggEABGkORHWiqAqR7+XEGlqlrAG+IYtViEIefDdAPXSVW+pf\nxMQ72oDVFC+JByZ6hpmjFuI4CXfeneftawZJlmNrbra1xMkY9ndsoZcVcPC4h0IF\n44xMK37sLKeZ4SfA35T1chnMwLBH3pWvunXniWQS5PKrkUhSjkI2VHd+MKvqwyop\nv/0jnQAHywE5tWS0u89rDNEv/Y19t0njhIk0yG3W8L7l2vsnpXqfUrx/ra/IR0/y\nAkbI0dwwtTziNYxP70ymeZ+2PatdYPs54m3C1VJA/ThMGNxGDJwvYENQTsSCIExi\nu+WyJZxHP7EJGb5pV5jlRhrI/JxRcWRs1KPfVFjOaQKBgQDqPGEXnQYSNWQ1Sf/E\naHtxoa3h2vu48HzgOIa3UTa+vhdf4Q6dQFtg9AjsjoJvXzIFzQ68NhQsIvV2rhmU\nSjwhTS9JLvxYD5sQU9bCOWt3AaWHRB9yrZ9BWVRRk652cO2OYXz2QrlhOQsAlUMK\nUMZj4jxu2nuGuILVBi1gPqFyVQKBgQDjY2kAsmNv+0NTTJPkKjdpFEsH5Cubj/st\nxr+p53oJzEy62HOjyUatUb0DAN6XS2qgr1h/Sp46QtN5rNvMlYRI1TFUBIcOdw5A\noE45Z6r8h0fVJheCQouBhRV6eKRjEVP3JySi+w3jvI89v/1Y0APGRjcUpu8WZ+WG\n8zIjh54EqQKBgQDPpBatyBTJr2rVknOYuMY1RQ3PWUAsAYOxgGprtyLAk+JErE04\nOQTIPYxrpykZcVn2qoCVd5sKRTMzscIbInOLUdDJH02zAqKDJs8J/by2Ek+aSVlX\nX3H9jCKi7jeJ5zGvNdyAsUWEWfzW13pGerRjdvn7itJV6tqP3Jn854hWwQKBgQDP\nNmYXlnh7MZO2sxAKWlZIUY/WTx1WE60nl/hNEn3ps90wX9NxrBfWFaiSthYh9T3j\n1CZnSU5LdV5VgSqDkrUL0guzrrSMf/3i8rKWKVxt57GUEbRWpeGPVAGwq4PSK5ZC\noc8HHpUXtVsrQGvUpSrrYk0LatxxpJhLlA9axVlAkQKBgCNLN7L0LG9RGD2XzNR/\nvHh91FnQogmPlkwsKXoUmDWgjNSC9dyYZZlVaOMBz3UohTifiLXg3gLiNrTVCAWV\nl3mh67hFbNnuX0xwZHAu54wZXNhKOgusCs1jfAnqXrbuaCZrU2bcAKGI5fwnasyd\nsHllW9QtWbjRN7K6mdDR0i//\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-pi3gp@gandamarhninsein.iam.gserviceaccount.com",
  "client_id": "107762114620823999407",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-pi3gp%40gandamarhninsein.iam.gserviceaccount.com"


   });
   admin.initializeApp({credential:admin.credential.cert(serviceAccount)});
   const db=admin.firestore();

var cron = require('node-cron');
			 console.log("starting ...")

			 db.collection('/worker/Female/workerlist').get().then(relt=>{
			 	relt.forEach(aa=>{
			 		const senderID = aa.data().fbid;
			 				cron.schedule("1 * * * *", () => {
						   		requestify.post(sendmessageurl,
								   {	
								   		"recipient":{
								  	  	"id":senderID
								  },
								  	"message":{
								  		"text":"Time to water for flowers!!!"
								  	}

								})
								  });

							cron.schedule("1 * * * *", () => {
						      	requestify.post(sendmessageurl,
								  {	
								   		"recipient":{
								  	  	"id":senderID
								  },
								  		"message":{
								  		"text":"Time to clean grass and check for flowers!!!"
								  	}
								  })
							});

			 	}
			 	)

			 }).catch(err=>{console.log("err", err)})