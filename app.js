
import express  from "express";
import 'dotenv/config';
import rwClient from "./twitterClient.js";
import { CronJob } from "cron";
import { error } from "console";

// const CronJob = require("cron").CronJob;

const port = 3000;
const app = express()

app.listen(port, () => console.log(`your port is running ${port}`))

const tweet = async() => {
    try{
        await rwClient.v2.tweet(
            "it's 12:30pm. Good Morning and have a very productive day! Testing servers :)"
        );
        console.log("tweeted");
    } catch (error) {
        console.error(error);
    }
};

const job = new CronJob("33 12 * * *", () => {
    tweet();
})

job.start();

export default app;