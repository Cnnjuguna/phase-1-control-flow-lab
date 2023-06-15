function scuberGreetingForFeet(someVAlue){
  // Write your code here!
  
  if (someVAlue <= 400){
      return 'This one is on me!'

  } else if(someVAlue >= 2001 && someVAlue <= 2500){
      return 'I will gladly take your thirty bucks.'

  } else if(someVAlue >= 2501 || someVAlue > 2500){
      return 'No can do.'

  }
  
    
 
}   
console.log(scuberGreetingForFeet(2600))

function ternaryCheckCity(city){
  // Write your code here! 
  return(city === 'NYC' ? 'Ok, sounds good.' : 'No go.');

}

function switchOnCharmFromTip(tip){
  // Write your code here!  
  switch(tip){
    case('generous'):
      return "Thank you so much."
      break;
    case('not as generous'):
      return "Thank you."
      break;
    case('thanks for everything'):
      return 'Bye.'
      break;
    case('Bye'):
      return 'Bye.'
      break;
    default:
      tip = "Bye.";
  }

}