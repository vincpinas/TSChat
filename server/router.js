const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
   res.send(
       `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8" />
            <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />       
            <title>TSChat • Router</title>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
                *, *::before, *::after {
                    -moz-box-sizing: border-box; box-sizing: border-box; padding: 0; margin: 0;
                    font-family: 'Lato', sans-serif; -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; scrollbar-width: thin; scrollbar-color: rgb(122, 122, 122) rgb(16, 16, 16);}
                :root {color: rgb(216, 216, 216);}
                ::-webkit-scrollbar {background-color: #1a1a1a; width: 6px;height: 6px;} 
                ::-webkit-scrollbar-thumb {background-color: rgb(187, 187, 187);}
                a {text-decoration: none; color: rgb(216, 216, 216);}
                body, html {height: 100vh; display: flex; justify-content: center; align-items: center;}
                body {overflow-x: hidden;background-color: #2a2a2a;}
                span {color: orange;}
                .bg {
                    animation:background-slide 3s ease-in-out infinite alternate;
                    background-image: linear-gradient(120deg, rgb(2, 2, 2) 50%, rgb(15, 15, 15) 0%); bottom:0; left:-50%; opacity:.2; position:fixed; right:-50%; top:0; z-index:-1;
                  }
                .bg2 {animation-direction:alternate-reverse; animation-duration:4s;}
                .bg3 {animation-duration:5s;}
                @keyframes background-slide {
                    0% {transform:translateX(0%);}
                    100% {transform:translateX(25%);}
                }
            </style>
        </head>
        <body>
            <h2>Server currently running on port: <span>5000</span></h2>
            <div class="bg"></div>
            <div class="bg bg2"></div>
            <div class="bg bg3"></div>
        </body>
       </html>`
    );
});

module.exports = router;