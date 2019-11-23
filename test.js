

 var cron = require('node-cron');
 console.log("starting ...")

 db.collection('/worker/Female/workerlist').get().then(relt=>{
 	relt.forEach(aa=>{
 		const senderID = aa.data().fbid;
 				cron.schedule("1 0 * * *", () => {
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

				cron.schedule("0 15 * * *", () => {
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

 })
