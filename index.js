function scuberGreetingForFeet(number){
  let message
   if(number <= 400) {
     message = "This one is on me!"
   } else if(number > 2000 && number < 2500) {
     message = "I will gladly take your thirty bucks."
   } else if(number > 2500) {
     message = "No can do."
   }
   return message
 }

function ternaryCheckCity(city){
  let result = city === "NYC" ? "Ok, sounds good." : "No go."

   return result
 }

function switchOnCharmFromTip(tip){
  let response;
    switch (tip) {
      case "generous" :
      response = "Thank you so much.";
      break;
      case "not as generous" :
      response = "Thank you.";
      break;
      case "thanks for everything" :
      response = "Bye.";
      break;
    }
    return response;
  }
