<p align="center">
  <img src="https://i.imgur.com/6vi9d6U.gif" width="380"  alt="TSChat README Cover" />
</p>
<h2 align="center" style="font-size:27.5px" font><b>TSChat: Simple TypeScript/React Chat App</b></h2>

---

This is a open-source Chat App in TypeScript & React made by a first year software development student.

#### **TSChat is an easy to use open chat in dark mode with lots of features, like:**
* Bi-Directional Communication Using Websockets.
* A Simple Swearword Filter.
* Multiple Easy To Access Chat Rooms.
* Settings Page To Change Profile Picture(only client side).

The source code is licensed under Apache License, Version 2.0. See the LICENSE file for more details.

TSChat makes use of a ton of different node_modules, before trying to run the project locally please make sure to run `npm install` both for the client side and and serverside codebases. 

Disclaimer: This project is not released for production and might never be.

---
## Structure
| Codebase              |         Description       |
|:----------            | :------------------------:|
| Client                | React FrontEnd            |
| Client/public         | HTML & Favicon            |
| Client/src/Assets     | All jpg, gif & svg files  |
| Client/src/Components | React App Components      |
| Server                | NodeJS backend            |
| Server/index          | Main backend file         |
| Server/users          | All user helper functions |
| Server/bot            | All bot helper functions  |

---
## Contributions
TSChat is open for contributons, but it would be preffered if you make an issue to let me know what you are working on first.

#### **The following is a list of emoji's used for commits and their meaning**
***important!***  if multiple emoji's apply, use the most relevant one.
| Emoji | Syntax           | Description                           |
| :---- | :-----           | :---------                            |
| 💙    | :blue_heart:     | Added a new a lot of code             |
| 🔥    | :fire:           | Deleted or cleaned up a bunch of code |
| 🎨    | :art:            | Changed or added styling              | 
| 🔎    | :mag_right:      | Added a link                          |
| 📝    | :memo:           | Added documentation or comments       |

---
# Q & A
## Why did you make this?
I was really bored and I dropped I project like this before, so I thought hey, why don't I remake it, but a little better and in TypeScript.

## What type of problems did you run into while making this?
The biggest thing I learned is that React state management definately isn't enough for any large scale projects, even this midsized project was already a drag just because of how many props I had to pass to each component.

Another problem I ran into while making this is that my knowledge on cleanup wasn't enough before, so for instance when I didn't do cleanup in my useEffect for sending messages it kept emitting messages and adding them to the state so after about 5 messages it started massively lagging.

Lastly, doing the styling by yourself for each component can make it hard to track whether it's responsive or not and makes it hard to change later on when each styling can affect another. Some of the styling is also not cross browser compatible.

## Did you learn a lot?
Yes, definately. I have learned a lot more about React especially on how to run it with TypeScript and how to handle useEffects and the cleanup in them.
I also learned a little about how to setup a simple NodeJS Express and SocketIO server, which I must say is definately a lot less intimidating than it sounds.