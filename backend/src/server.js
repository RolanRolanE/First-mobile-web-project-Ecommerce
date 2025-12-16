import express from "express"
import path from "path"
import { ENVs } from "./config/env.js"

const app = express()

const __dirname = path.resolve()
const diskFolderPath = path.join(__dirname, "../admin/dist")

// api end point sample
app.get("/api/health", (req, res) => {
    return res.status(200).json({message: "success"})
})

// Make out app ready to deployment
if(ENVs.NODE_ENV === "production") {

    // static assets in admin located at disk folder
    app.use(express.static(diskFolderPath))

    // render the index,hmlt in disk static folder
    app.get("/{*any}", (req, res) => {
        res.sendFile(diskFolderPath, "index.html")
    })

}

// server started
app.listen(ENVs.PORT, () => { console.log("server started!") })
