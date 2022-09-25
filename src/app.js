// create an express app
const express = require("express")
const app = express()

// use the express-static middleware
app.use(express.static("public"))
app.set('json spaces', 4);

// define the first route
app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>")
})

// define the first route
app.get("/tech", function (req, res) {
  res.send("<h1>Jasure Tech</h1>")
})

app.get("/.well-known/assetlinks.json", function (req, res) {
  const links = [
      {
        "relation": ["delegate_permission/common.handle_all_urls"],
        "target": {
          "namespace": "android_app",
          "package_name": "com.JaSure.qa",
          "sha256_cert_fingerprints":
            ["5F:8E:70:2B:C8:9B:7F:B8:87:7C:A4:12:AC:8E:EF:5A:39:30:F0:2E:CF:5F:8D:EE:97:F0:9C:48:E1:F1:53:7B"]
        }
      }
  ]
  res.json(links);
})

// start the server listening for requests
app.listen(process.env.PORT || 8000, 
	() => console.log("Server is running..."));
