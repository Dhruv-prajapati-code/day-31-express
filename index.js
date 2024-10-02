const express=require("express");

const app=express();

let port=3000;

app.listen(port,()=>{
    console.log(`app listen on port ${port}`);
})

// app.use((req,res)=>{
//     console.log("request recived");
//     // res.send("this is the basic response");
//     res.send({
//         name:"fruit",
//         type:"apple",
//         hoho:"Santa cruse"
//     });
// });

app.get("/apple",(req,res)=>{
    res.send({
        name:"fruit",
        type:"apple",
        hoho:"Santa cruse"
    });
});

app.get("/",(req,res)=>{
    res.send({
        kya_hai:"fruits hai",
        conse:"do teen hai "
    });
});

// app.get("*",(req,res)=>{
//     res.send("Galat route per hai aap ");
// });

app.post("/",(req,res)=>{
    console.log("post request to root");
});

  
// app.get("/:username",(req,res)=>{
//     let {username, id }=req.params;
//     let htlo=`<h1>Welcome to @${username}</h1>`;
//     res.send(htlo);
// });





app.get("/search", (req,res) =>{
    console.log(req.query);
    res.send("no result");
});