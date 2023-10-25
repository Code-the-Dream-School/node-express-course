const express = require("express");
const app = express();


app.get("/", (req, res)=> {
    return res.send(`
  <h1>Hi there! I will try to complete this assignment too.</h1>
  <h5>Here couple links for different functionality:</h5>
  <div>Do you like disco? Turn on music and change background <a href="/changeColor">here</a></div>
  <div>We always need calculate something. You can do it <a href="/calculator">here</a></div>
  <div>It is my memory note about header and plain text <a href="/note">here</a></div>
`)})
  
app.use("/changeColor", (req, res) => {
let bgcolor=""
 const {color} = req.query
    if(color){
        bgcolor = color
    } else {
        bgcolor="white"
    }
    return res.send(
   `
 <body style="background-color:${bgcolor}">
    <h5>Turn on music and...</h5>
    <div>
    <button onclick="window.location.href = '/changeColor?color=red'" style="background-color:red; padding:16px 32px"/>
    <button onclick="window.location.href = '/changeColor?color=blue'" style="background-color:blue; padding:16px 32px"/>
    <button onclick="window.location.href = '/changeColor?color=gray'" style="background-color:gray; padding:16px 32px"/>
    <button onclick="window.location.href = '/changeColor?color=white'" style="background-color:white; padding:16px 32px"/>
    <button onclick="window.location.href = '/changeColor?color=green'" style="background-color:green; padding:16px 32px"/>
    <button onclick="window.location.href = '/changeColor?color=black'" style="background-color:black; padding:16px 32px"/>
   </div>
  <div><a href="/">return home</a></div>
 </body>
  `
  )});

  app.get("/calculator", (req, res)=> {
    return res.send(`
    <!DOCTYPE html> 
<html> 

<head> 
	<title>JavaScript Calculator</title> 
	<script src= 
"https://cdnjs.cloudflare.com/ajax/libs/mathjs/10.6.4/math.js"
		integrity= 
"sha512-BbVEDjbqdN3Eow8+empLMrJlxXRj5nEitiCAK5A1pUr66+jLVejo3PmjIaucRnjlB0P9R3rBUs3g5jXc8ti+fQ=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"></script> 
	<script src= 
"https://cdnjs.cloudflare.com/ajax/libs/mathjs/10.6.4/math.min.js"
		integrity= 
"sha512-iphNRh6dPbeuPGIrQbCdbBF/qcqadKWLa35YPVfMZMHBSI6PLJh1om2xCTWhpVpmUyb4IvVS9iYnnYMkleVXLA=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"></script> 
	
	<!-- For styling -->
	<style> 
		table { 
			border: 1px solid black; 
			margin-left: auto; 
			margin-right: auto; 
		} 

		input[type="button"] { 
			width: 100%; 
			padding: 20px 40px; 
			background-color: gray; 
			color: white; 
			font-size: 24px; 
			font-weight: bold; 
			border: none; 
			border-radius: 5px; 
		} 

		input[type="text"] { 
			padding: 20px 30px; 
			font-size: 24px; 
			font-weight: bold; 
			border: none; 
			border-radius: 5px; 
			border: 2px solid black; 
		} 
	</style> 
</head> 
	
<body> 
	
	<!-- Use Table to Create Calculator Structure Design -->
	<table id="calc"> 
		<tr> 
			<td colspan="3"><input type="text" id="result"></td> 
			<td><input type="button" value="c" onclick="clr()" /> </td> 
		</tr> 
		<tr> 
			<td><input type="button" value="1" onclick="dis('1')"
						onkeydown="myFunction(event)"> </td> 
			<td><input type="button" value="2" onclick="dis('2')"
						onkeydown="myFunction(event)"> </td> 
			<td><input type="button" value="3" onclick="dis('3')"
						onkeydown="myFunction(event)"> </td> 
			<td><input type="button" value="/" onclick="dis('/')"
						onkeydown="myFunction(event)"> </td> 
		</tr> 
		<tr> 
			<td><input type="button" value="4" onclick="dis('4')"
						onkeydown="myFunction(event)"> </td> 
			<td><input type="button" value="5" onclick="dis('5')"
						onkeydown="myFunction(event)"> </td> 
			<td><input type="button" value="6" onclick="dis('6')"
						onkeydown="myFunction(event)"> </td> 
			<td><input type="button" value="*" onclick="dis('*')"
						onkeydown="myFunction(event)"> </td> 
		</tr> 
		<tr> 
			<td><input type="button" value="7" onclick="dis('7')"
						onkeydown="myFunction(event)"> </td> 
			<td><input type="button" value="8" onclick="dis('8')"
						onkeydown="myFunction(event)"> </td> 
			<td><input type="button" value="9" onclick="dis('9')"
						onkeydown="myFunction(event)"> </td> 
			<td><input type="button" value="-" onclick="dis('-')"
						onkeydown="myFunction(event)"> </td> 
		</tr> 
		<tr> 
			<td><input type="button" value="0" onclick="dis('0')"
						onkeydown="myFunction(event)"> </td> 
			<td><input type="button" value="." onclick="dis('.')"
						onkeydown="myFunction(event)"> </td> 
			
			<!-- solve function call function solve to evaluate value -->
			<td><input type="button" value="=" onclick="solve()"> </td> 

			<td><input type="button" value="+" onclick="dis('+')"
						onkeydown="myFunction(event)"> </td> 
		</tr> 
	</table> 
<div><a href="/">return home</a></div>
	<script> 
		
		// Function that display value 
		function dis(val) { 
			document.getElementById("result").value += val 
		} 

		function myFunction(event) { 
			if (event.key == '0' || event.key == '1' 
				|| event.key == '2' || event.key == '3' 
				|| event.key == '4' || event.key == '5' 
				|| event.key == '6' || event.key == '7' 
				|| event.key == '8' || event.key == '9' 
				|| event.key == '+' || event.key == '-' 
				|| event.key == '*' || event.key == '/') 
				document.getElementById("result").value += event.key; 
		} 

		var cal = document.getElementById("calc"); 
		cal.onkeyup = function (event) { 
			if (event.keyCode === 13) { 
				console.log("Enter"); 
				let x = document.getElementById("result").value 
				console.log(x); 
				solve(); 
			} 
		} 

		// Function that evaluates the digit and return result 
		function solve() { 
			let x = document.getElementById("result").value 
			let y = math.evaluate(x) 
			document.getElementById("result").value = y 
		} 

		// Function that clear the display 
		function clr() { 
			document.getElementById("result").value = "" 
		} 
	</script> 
</body> 

</html> `)


})

app.get("/note", (req, res)=> {
    res.setHeader("content-type", "text/plain").send(
        `we need to setHeader() in case the code here is not html.
        Enter http://localhost:3000/ to return on the main page.
        `
)})

  app.all("*", (req,res)=> {
    res.status(404).send("Page not found")
})

app.listen(3000);