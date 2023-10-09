const today = new Date().getHours()
if (today <= 12) {
    console.log("Good morning")
} else if ((today > 12) && (today <= 18)) {
    console.log("Good afternoon") 
} else if ((today > 18) &&(today <= 21)) {
    console.log("Good evening") 
} else {console.log("Good night")}