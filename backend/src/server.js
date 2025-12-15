import express from "express"

const app = express()

// api end point sample
app.get("/api/health", (req, res) => {
    return res.status(200).json({message: "success"})
})

app.listen(3000, () => {
    console.log("server started!")
})