const app = require("./stuffThatYouCanIgnore");

app.get("/", (_, res) => res.send(`
  <h1>Palindrome Check</h1>
  <a href="/palindrome">Click Here to start palindroming!</a>
`));

app.get('/palindrome', (req, res) => {

    let palindrome, backwardsValue
    if (Object.values(req.query)[0]) {
        const enterPalindrome = Object.values(req.query)
        palindrome = enterPalindrome[0].toLowerCase();
        backwardsValue = enterPalindrome[0].split('').reverse().join('').toLowerCase();
    }
    res.send(`
    <body><main>
     <a href='/palindrome?enterHere=yourWord'>Click Here to Get Started</a>
     ${Object.keys(req.query)[0] ? `<p>Change the word after the = in the URL above, then press enter to check if your word is a palindrome!</p>`:""}
   

   ${Object.keys(req.query).length !== 0 && Object.values(req.query)[0] !=='yourWord'
            ? `
        ${palindrome === backwardsValue ? `
   <h3>The value you entered : <i>${palindrome}</i> is indeed a palindrome!!!</h3>
   ` : `
   <h3>The value you entered : <i>${palindrome}</i> is not a palindrome, try again.</h3>`}
  </body></main>
`: ""
        }`
    )
})

app.listen(3000)