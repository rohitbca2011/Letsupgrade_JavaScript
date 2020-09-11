let players = [
        {
        	name:"Virat Kholi",
        	age: "30",
        	country: "India",
        	hobbies:["singing","football","dancing","travelling"]
        },
        {
        	name:"Shane Watson",
        	age: "36",
        	country: "austrialia",
        	hobbies:["Playing guitar", "singing" ]       
         },
        {
        	name:"Chris Gayle",
        	age: "28",
        	country: " West Indies",
        	hobbies:["Dancing, Driving, Listening to Bollywood songs."]
        },
        {
        	name:"Benjamin Andrew Stokes",
        	age: "40",
        	country: "England",
        	hobbies:["Listening music","travellin"]
        },
        {
        	name:"Prithvi Pankaj Shaw ",
        	age: "20",
        	country: "India",
        	hobbies:["Playing on PlayStation , Playing Billiards"]
        },
        {
        	name:"Mahendra Singh Dhoni",
        	age: "39",
        	country: "India",
        	hobbies:["Biking, Playing Football and Tennis, Swimming"]
        },
        {
        	name:"Rohit Gurunath Sharma",
        	age: "33",
        	country: "India",
        	hobbies:[" Travelling, watching movies, playing table tennis "]
        }
        ];
        function youngestPlayer(){
            console.log("youngestPlayer are :")
            for (let i = 0; i <players.length; i++) {
                if (players[i].age<30) {
            console.log (players[i]);

               }
             }  
            console.log("----------------------------------------------------------");
            console.log("----------------------------------------------------------");
            console.log("----------------------------------------------------------");
        
          
        }


        youngestPlayer();





        function countryIndia(){
            console.log("India country players are:")
            for (let i = 0; i <players.length; i++) {
                if (players[i].country=="India") {
            console.log (players[i]);
                }
            }    
          
        }
        countryIndia();
