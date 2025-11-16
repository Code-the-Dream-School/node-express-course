// local (not exported/private) (Not shared bcoz' did not use module.exports yet) That means other files cannot access it.
const secret = 'SUPER Poonam' 
// share (exported)
const firstName = 'Poonam'
const lastName = 'Shrestha'
const nick = 'PS'


module.exports = { firstName, lastName, nick }