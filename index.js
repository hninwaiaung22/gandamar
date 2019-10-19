'use strict';

// Imports dependencies and set up http server
const
requestify=require('requestify'),
  express = require('express'),
  bodyParser = require('body-parser'),
  PageAccessToken='EAAFlv95qJK0BAO4wStiwH9XpP0RTlqVondE6ZAUh3YoC8m3eAZBfx7uBiZCAhZCvgYDGynGHGFGxd7ZC5NpifnTAPXOM1OfJG7PKzh6Rjc0ZCEhcB4TZBZBe5Unl05eeUYZCi5ON5d4ossCcL1J4YK0bcsFWXJIBn4HUJGCSl5z5OTVFfskMf4ZCZAq',
  app = express().use(bodyParser.json()); // creates express http server 
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


  requestify.post('https://graph.facebook.com/v2.6/me/messenger_profile?access_token='+PageAccessToken,
  	{"get_started":{"payload":"Hi"},
  	"persistent_menu":[
  	{
  		"locale":"default",
  		"composer_input_disabled":false,
  		"call_to_actions":[
  		{
  			"type":"postback",
  			"title":"Home",
  			"payload":"Hi"

  		},
  		{
  			"type":"web_url",
  			"title":"Visit Page",
  			"url":"https://mym-acavxb.firebaseapp.com/index.html",
  			"webview_height_ratio":"tall"


  		}
  	]

  }
 ],
  "greeting": [
    {
      "locale":"default",
      "text":"Hello {{user_first_name}}! \nWe provide service!!" 
    }
  ]

}).then(function(success) {
	console.log('persistent_menu.success');
	// body...
})

// Sets server port and logs message on success
app.listen(process.env.PORT || 1337, () => console.log('webhook is listening'));
app.get('/', (req, res)=>{
	res.send("Hello vro!");
})

/

// Adds support for GET requests to our webhook
app.get('/webhook', (req, res) => {

  // Your verify token. Should be a random string.
  let VERIFY_TOKEN = "393349721367725"
    
  // Parse the query params
  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];
    
  // Checks if a token and mode is in the query string of the request
  if (mode && token) {
  
    // Checks the mode and token sent is correct
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      
      // Responds with the challenge token from the request
      console.log('WEBHOOK_VERIFIED');
   	   res.status(200).send(challenge);
    
    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);      
    }
  }
});

// Creates the endpoint for our webhook 
app.post('/webhook', (req, res) => {  
 
  let body = req.body;

  // Checks this is an event from a page subscription
  if (body.object === 'page') {

    // Iterates over each entry - there may be multiple if batched
    body.entry.forEach(function(entry) {

      // Gets the message. entry.messaging is an array, but 
      // will only ever contain one message, so we get index 0
      let webhook_event = entry.messaging[0];
      console.log(webhook_event);
      var senderID=webhook_event.sender.id;
      console.log('senderID',senderID);
      if(webhook_event.postback){
      	var userButton=webhook_event.postback.payload;
      	console.log('reply',userButton);
    }
    if (webhook_event.message) {if (webhook_event.message.text) {
    	var userComment=webhook_event.message.text;
    	console.log('userComment',userComment);
    }
	if (webhook_event.message.attachments){
		var userImage=webhook_event.message.attachments;
		console.log('userPhoto',userImage);

	}}
	 if(userButton == 'Hi' || userComment == 'Hi'){

 
requestify.post(sendmessageurl,
{        
       "recipient":{
    "id":senderID
  },
  
  "message":{
    "text": "Choose type:",
    "quick_replies":[
      {
        "content_type":"text",
        "title":"Worker",
        "payload":"payload"
        
      },{
        "content_type":"text",
        "title":"Owner",
        "payload":"payload"
       
      }
    ]
  }
      }).then(function(success){
console.log('successful template');
}).catch(function(error){
console.log('error', error);
  
  });
  }
   if(userComment == "Worker"){

   	requestify.post(sendmessageurl,
   {	
   		"recipient":{
  	  	"id":senderID
  },
  
  "message":{
    "text": "Choose type:",
    "quick_replies":[
      {
        "content_type":"text",
        "title":"Male",
        "payload":"payload"
        
      },{
        "content_type":"text",
        "title":"Female",
        "payload":"payload"
      }
    ]
  }
  }) 
}

if(userComment == "Owner"){

   	requestify.post(sendmessageurl,
   {	
   		"recipient":{
  	  	"id":senderID
  },
  
  "message":{
    "text": "Choose function:",
    "quick_replies":[
      {
        "content_type":"text",
        "title":"Monitor",
        "payload":"payload"
        
      },{
        "content_type":"text",
        "title":"View Report",
        "payload":"payload"
        
      } 
    ]
  }
  }) 
}
 if (userComment == "Monitor"){

 	requestify.post(sendmessageurl,
 	{
 		"recipient":{
 		"id":senderID
 	},
 	"message":{
    "attachment":{
      "type":"template",
      "payload":{
        "template_type":"generic",
        "elements":[
           {
            "title":"Build Tent or Update Tent",
            "subtitle":"Worker must go to the tent and view the tent condition and report to me.",
            	"buttons":[
              {
                "type":"postback",
                "title":"Send to worker",
                "payload":"sendtoworker"
              }

             ]},

           {
            "title":"Build Tent or Update Tent",
            "subtitle":"Worker must go to the tent and view the tent condition and report to me.",
            	"buttons":[
              {
                "type":"postback",
                "title":"Send to worker",
                "payload":"sendtoworker"
              }

             ]}
      ]
    }
  }
}
 	})
 }


if (userComment == "Male"){

   	requestify.post(sendmessageurl,
   {	
   		"recipient":{
  	  	"id":senderID
  },
  
  "message":{
    "text": "Choose work:",
    "quick_replies":[
      {
        "content_type":"text",
        "title":"Making groove",
        "payload":"payload"
       
      },{
        "content_type":"text",
        "title":"building tent",
        "payload":"payload"
        
      }
    ]
  }
  }) 
}

if (userComment == "Female"){

   	requestify.post(sendmessageurl,
   {	
   		"recipient":{
  	  	"id":senderID
  },
  
  "message":{
    "text": "Choose work:",
    "quick_replies":[
      {
        "content_type":"text",
        "title":"Cleaning grass",
        "payload":"payload"
        
      },{
        "content_type":"text",
        "title":"Picking tip",
        "payload":"payload"
       
      },{
        "content_type":"text",
        "title":"Bamboo Matting",
        "payload":"payload"
       
      }
    ]
  }
  }) 
}
  
    });

    // Returns a '200 OK' response to all requests
    res.status(200).send('EVENT_RECEIVED');
     } else {
    // Returns a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }

});