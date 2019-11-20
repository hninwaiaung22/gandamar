'use strict';

// Imports dependencies and set up http server
const
requestify=require('requestify'),
  express = require('express'),
  bodyParser = require('body-parser'),
  PageAccessToken1='EAAFlv95qJK0BAO4wStiwH9XpP0RTlqVondE6ZAUh3YoC8m3eAZBfx7uBiZCAhZCvgYDGynGHGFGxd7ZC5NpifnTAPXOM1OfJG7PKzh6Rjc0ZCEhcB4TZBZBe5Unl05eeUYZCi5ON5d4ossCcL1J4YK0bcsFWXJIBn4HUJGCSl5z5OTVFfskMf4ZCZAq',
  PageAccessToken='EAAFlv95qJK0BAOp3bT9eEHB27hHMkLvd9a8aZAZB5daInNk8ZAUriwseGl516XZBjFZBB4UlZBmtPfbCJB3sHfFSahsdac4iZC8u0SjYZAlZB7zRxbqSvhPANFQcUB0MTKB0GIilZCFrPytPdNVJpSwQZCbJfxFdWDWusKbZAAfNAlmB1tUIMnJzw0Lk',
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

       
		db.collection('Owner').where('ID','==',`${senderID}`).get().then( snapshot => {
	if(snapshot.empty){
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
  }).then(result=>{ console.log("ok")
		  }).catch(err=>{console.log("err",err)}) 
		        
      }
		else{
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
		        
		      },{
		        "content_type":"text",
		        "title":"Search Male Workers",
		        "payload":"payload"
		        
		      } 

		    ]
		  }
		  }).then(result=>{console.log("ok")}).catch(err=>{console.log("err",err)}) 
		}
})

  }


 if (userComment == "Monitor"){
 	console.log("insidie monitor")
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
	            "title":"Build Tent",
	            "subtitle":"Male worker need to plant according to the owner direction.",
	            	"buttons":[
	              {
	                "type":"postback",
	                "title":"To Build Tent",
	                "payload":"build tent"
	              }

	             ]},

	             {
	            "title":"Prepare Soil",
	            "subtitle":"Male worker need to add according to the direction.",
	            	"buttons":[
	              {
	                "type":"postback",
	                "title":"To prepare soil",
	                "payload":"Prepare soil"
	            }

	             ]},

	             {
	            "title":"Planting",
	            "subtitle":"Female worker need to plant according to the owner direction.",
	            	"buttons":[
	              {
	                "type":"postback",
	                "title":"Start Planting",
	                "payload":"start planting"
	              }

	             ]},

	             {
	            "title":"Add Fertilizer",
	            "subtitle":"Female worker need to add according to the direction.",
	            	"buttons":[
	              {
	                "type":"postback",
	                "title":"Add Fertilizer",
	                "payload":"add fertilizer"
	              }

	             ]},

	             {
	            "title":"Bamboo Matting",
	            "subtitle":"Female worker need to make bamboo matting for 2 months plant.",
	            	"buttons":[
	              {
	                "type":"postback",
	                "title":"Make Bamboo Matting",
	                "payload":"make bamboo matting"
	              }

	             ]},

	             {
	            "title":"Pick up and Bunch up flower",
	            "subtitle":"Female worker must pick up the flowers and then bunch up the flowers.",
	            	"buttons":[
	              {
	                "type":"postback",
	                "title":"Pick Up in Blassom time",
	                "payload":"pickup and bunchup"
	              }

	             ]},

	             {
	            "title":"Contact to wholesale to deliver flower",
	            "subtitle":"Female worker .",
	            	"buttons":[
	              {
  					"type":"phone_number",
  					"title":"Call Wholesale",
  					"payload":"<+959977136406>"
				}

	             ]},

	             {
	            "title":"Contact to small client",
	            "subtitle":"if the flowers has a small pieces of bunchup.",
	            	"buttons":[
	              {
  					"type":"phone_number",
  					"title":"Call Small Client",
  					"payload":"<+959977136406>"
				}
	             ]}

	      ]
	    }
	  }
	}
 	})
 }


if (userComment == "Search Male Workers"){
 	console.log("data")
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
	            "title":"For Build Tent",
	            "subtitle":"Workers are need to build according to the owner direction.",
	            	"buttons":[
	              {
	                "type":"postback",
	                "title":"For Bulid Tent",
	                "payload":"for build tent"
	              }

	             ]},

	             {
	            "title":"Prepare Soil",
	            "subtitle":"Workers are need to prepare according to the direction.",
	            	"buttons":[
	              {
	                "type":"postback",
	                "title":"For Prepare Soil",
	                "payload":"for prepare soil"
	              }

	             ]}
	            ]
	 }
	}
}
	})
}



if (userComment == "Male"){
	
	var elements = [];
	db.collection('worker').doc('Male').collection('workerlist').get().then(malelist=>{
		if(malelist.empty){
			console.log("no data")
		}
			else{
				console.log("get data")
 			malelist.forEach(doc => {

 			var workerid = doc.data().fbid;
 				let data={
 					"title":doc.data().name,
 					"subtitle":`${doc.data().date} to ${doc.data().name}`,
 					"buttons":[
 					{
 						"type":"postback",
 						"title":"Available",
 						"payload":`Available ${doc.data().date} ${doc.data().name}`

 					}]
 					
 				}
 				elements.push(data)
 				requestify.post(sendmessageurl,
   		{	
   		"recipient":{
  	  	"id":workerid
  		},
 		
 		"message":{
   	 	"attachment":{
      	"type":"template",
      	"payload":{
        "template_type":"generic",
        "elements":elements
    }
  }
}
 	})
 			

 		})
 			
}

})

}

if (userButton == "for build tent"){
let data = {
	date : `${day} ${month} ${year}`,
	fbid : 2361714633954651 ,
	name : 'taway'
}
db.collection('woker').add(data).then(ref=>{
	console.log('document ID:', ref.id)
})


}



if(userButton){
	if (userButton.includes('Available')){
var string = userButton
console.log(string, 'within include statement')
var strarray = string.split(' ')
if(strarray.length = 6){
	var actionname = strarray[4]+' '+strarray[5]
}else{
	var actionname = strarray[4]+' '+strarray[5]+' '+strarray[6]
}
var day = strarray[1]

var month = strarray[2]

var year = strarray[3]

let data = {
	name: actionname,
	fbid: 2361714633954651,
	date : `${day} ${month} ${year}`

}

console.log(data)

db.collection('worker').where('date','==',`${day} ${month} ${year}`).where('name','==',`${actionname}`).where('fbid','==',`${fbid}`).get().then(doclist => {
	if(doclist.empty){

	}else{
		doclist.forEach(doc => {
			console.log(doc.id)

			db.collection('worker').doc(doc.id).set(data, {merge: true})
		})
	}
})



}
}



if (userComment == "View Report"){
	var a = new Date()

var z = a.toLocaleDateString()

var datearray = z.split('/')

var day = datearray[1]

var month = datearray[0]

var year = datearray[2]

var todaydate = `${day} ${month} ${year}`

var elements = []

db.collection('Dailywork').where('date', '==', `${todaydate}`).get().then( snapshot => {
	if(snapshot.empty){}
		else{
			elements = []
			snapshot.forEach( doc => {
			
				let data = {
            "title":doc.data().name,
            "subtitle":`Status: ${doc.data().status}`,
       		 }
            	

             elements.push(data)
			}

			
		)
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
        "elements":elements
    }
  }
}
 	})

	}

	
})
}

if(userButton){
	if (userButton.includes('Workcomplete')){
var string = userButton
console.log(string, 'within include statement')
var strarray = string.split(' ')
if(strarray.length = 6){
	var actionname = strarray[4]+' '+strarray[5]
}else{
	var actionname = strarray[4]+' '+strarray[5]+' '+strarray[6]
}
var day = strarray[1]

var month = strarray[2]

var year = strarray[3]

let data = {
	name: actionname,
	date: `${day} ${month} ${year}`,
	worker: 'Male',
	status:'complete'
}

console.log(data)

db.collection('Dailywork').where('date','==',`${day} ${month} ${year}`).where('name','==',`${actionname}`).get().then(doclist => {
	if(doclist.empty){

	}else{
		doclist.forEach(doc => {
			console.log(doc.id)

			db.collection('Dailywork').doc(doc.id).set(data, {merge: true})
		})
	}
})



}
}


if (userComment == "Male"){

var a = new Date()

var z = a.toLocaleDateString()

var datearray = z.split('/')

var day = datearray[1]

var month = datearray[0]

var year = datearray[2]

var todaydate = `${day} ${month} ${year}`

var elements = []

db.collection('Dailywork').where('date', '==', `${todaydate}`).get().then( snapshot => {
	if(snapshot.empty){}
		else{
			elements = []
			snapshot.forEach( doc => {
			if(doc.data().worker == 'Male'){
				let data = {
            "title":doc.data().name,
            "subtitle":`${doc.data().date} to ${doc.data().name}`,
            	"buttons":[
              {
                "type":"postback",
                "title":"Complete",
                "payload":`Workcomplete ${doc.data().date} ${doc.data().name}`
              }

             ]}

             elements.push(data)
			}

			
		})
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
        "elements":elements
    }}

  }
 	})}
})

}

if (userButton == "build tent"){

	var a = new Date()

var z = a.toLocaleDateString()

var datearray = z.split('/')

var day = datearray[1]

var month = datearray[0]

var year = datearray[2]

let data = {
	name: 'Build Tent',
	date: `${day} ${month} ${year}`,
	worker: 'Male',
	status:'In-Progress'
}

db.collection('Dailywork').add(data).then(ref=>{
	console.log('document ID:', ref.id)
})


}



if (userButton == "Prepare soil"){

	var a = new Date()

var z = a.toLocaleDateString()

var datearray = z.split('/')

var day = datearray[1]

var month = datearray[0]

var year = datearray[2]

let data = {
	name: 'Prepare Soil',
	date: `${day} ${month} ${year}`,
	worker: 'Male',
	status:'In-Progress'
}

db.collection('Dailywork').add(data).then(ref=>{
	console.log('document ID:', ref.id)
})


}




if (userComment == "Female"){

   var a = new Date()

var z = a.toLocaleDateString()
	
var datearray = z.split('/')

var day = datearray[1]

var month = datearray[0]

var year = datearray[2]

var todaydate = `${day} ${month} ${year}`

var elements = []

db.collection('Dailywork').where('date', '==', `${todaydate}`).get().then( snapshot => {
	if(snapshot.empty){}
		else{
elements = []
			snapshot.forEach( doc => {
			if(doc.data().worker == 'Female'){
				let data = {
            "title":doc.data().name,
            "subtitle":`${doc.data().date} to ${doc.data().name}`,
            	"buttons":[
              {
                "type":"postback",
                "title":"Complete",
                "payload":`Workcomplete ${doc.data().date} ${doc.data().name}`
              }

             ]}
             console.log(data)
             elements.push(data)
             console.log(elements)
			}		

})
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
        "elements":elements
    }
  }
}
 	})}
})
}


if (userButton == "start planting"){

	var a = new Date()

var z = a.toLocaleDateString()

var datearray = z.split('/')

var day = datearray[1]

var month = datearray[0]

var year = datearray[2]

let data = {
	name: 'Start Planting',
	date: `${day} ${month} ${year}`,
	worker: 'Female',
	status:'In-Progress'
}

db.collection('Dailywork').add(data).then(ref=>{
	console.log('document ID:', ref.id)
})


}



if (userButton == "add fertilizer"){

	var a = new Date()

var z = a.toLocaleDateString()

var datearray = z.split('/')

var day = datearray[1]

var month = datearray[0]

var year = datearray[2]

let data = {
	name: 'Add Fertilizer',
	date: `${day} ${month} ${year}`,
	worker: 'Female',
	status:'In-Progress'
}

db.collection('Dailywork').add(data).then(ref=>{
	console.log('document ID:', ref.id)
})


}

if (userButton == "make bamboo matting"){

	var a = new Date()

var z = a.toLocaleDateString()

var datearray = z.split('/')

var day = datearray[1]

var month = datearray[0]

var year = datearray[2]

let data = {
	name: 'Make Bamboo Matting',
	date: `${day} ${month} ${year}`,
	worker: 'Female',
	status:'In-Progress'
}

db.collection('Dailywork').add(data).then(ref=>{
	console.log('document ID:', ref.id)
})


}


if (userButton == "pickup and bunchup"){

	var a = new Date()

var z = a.toLocaleDateString()

var datearray = z.split('/')

var day = datearray[1]

var month = datearray[0]

var year = datearray[2]

let data = {
	name: 'Pickup and Bunchup flower',
	date: `${day} ${month} ${year}`,
	worker: 'Female',
	status:'In-Progress'
}

db.collection('Dailywork').add(data).then(ref=>{
	console.log('document ID:', ref.id)
})


}

   } );

    // Returns a '200 OK' response to all requests
    res.status(200).send('EVENT_RECEIVED');
     } else {
    // Returns a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }

});