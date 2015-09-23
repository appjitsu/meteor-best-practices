#Meteor Best Practices

This project was created to act as starting point for your projects and to combine all of current best practices for Meteor.js.

##Stack:
- Meteor 1.2 - https://www.meteor.com
    + details about the release - http://info.meteor.com/blog/announcing-meteor-1.2
- React - http://facebook.github.io/react
- FlowRouter - https://github.com/kadirahq/flow-router
- MongoDB - https://www.mongodb.org
- Materialize CSS (Google Material UI) - http://materializecss.com

##Goals:
- Use "packages for everything" to make the application modular-first
- Build small, very specific custom packages that do one thing very well
- Split up files into their purposes; ie: client only code goes in client.js
- Security. Security. Security. (Security)
- Test the "important" things.

##Demo: http://best-practices.meteor.com/

##Coding Guidelines:
- Every file must have a blank line at the end. (http://unix.stackexchange.com/questions/18743/whats-the-point-in-adding-a-new-line-to-the-end-of-a-file)
- .gitignore extra files such as RubyMine (or any other IDE) project files to keep them out of the project
- ...

##Questions:
- Q: Why "packages for everything"?
  A: 
    1) No need to use Meteor.isClient or Meteor.isServer unless the code is common between the client and server. The package.js definition file tells meteor which files should be run.
    2) Keeps code very DRY.
    3) Very easy to maintain.
    4) Faster compile times.
    5) Smaller production files.
