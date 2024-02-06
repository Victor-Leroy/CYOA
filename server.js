const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); // to serve static files like your JSON file and any JS/CSS files

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>My Interactive Story</title>
        <!-- Include any CSS or JS here -->
      </head>
      <body>
        <div id="story"></div>
        <script src="yourStoryHandlingScript.js"></script>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
