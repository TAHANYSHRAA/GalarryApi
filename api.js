
const ArrayPhoto=[
  "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v24/Corsair_WP1_400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v1/Wallpaper-v1-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v4/Wallpaper-v4-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v5/Wallpaper-v5-400.jpg",
    "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v6/Wallpaper-v6-400.jpg",
    "https://image.shutterstock.com/image-photo/colorful-flower-on-dark-tropical-260nw-721703848.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v8/Wallpaper-v8-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v9/Wallpaper-v9-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v10/Wallpaper-v10-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v11/Wallpaper-v11-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v12/Wallpaper-v12-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v13/Wallpaper-v13-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v14/Wallpaper-v14-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v15/Wallpaper-v15-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v16/Wallpaper-v16-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v21/Wallpaper-v21-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v18/Wallpaper-v18-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v19/Wallpaper-v19-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v23/Wallpaper-v23-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v20/Wallpaper-v20-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v24/Corsair_WP1_400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v1/Wallpaper-v1-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v4/Wallpaper-v4-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v5/Wallpaper-v5-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v6/Wallpaper-v6-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v6/Wallpaper-v6-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v7/Wallpaper-v7-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v8/Wallpaper-v8-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v9/Wallpaper-v9-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v10/Wallpaper-v10-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v11/Wallpaper-v11-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v12/Wallpaper-v12-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v13/Wallpaper-v13-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v14/Wallpaper-v14-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v15/Wallpaper-v15-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v16/Wallpaper-v16-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v21/Wallpaper-v21-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v18/Wallpaper-v18-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v19/Wallpaper-v19-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v23/Wallpaper-v23-400.jpg",
    "https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v20/Wallpaper-v20-400.jpg",
];

const express = require('express')
const app = express()
const port = 3000

let pagesize=20;
app.get("/photos/:page/", (req, res) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
const page=req.url.split("/")[2];
start=(page-1)*pagesize;
end=start+ pagesize;
res.send(ArrayPhoto.slice(start,end));
});
app.listen(3000);




