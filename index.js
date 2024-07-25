const { exec } = require("child_process");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const videoURL = process.env.VIDEO_URL;

const downloadTwitterVideo = (url, outputPath) => {
  const ytDlpCommand = `yt-dlp -o "${outputPath}" -f best "${url}"`;

  exec(ytDlpCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }

    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }

    console.log(`stdout: ${stdout}`);
  });
};

const filePath = "output/";
const fileName = "video.mp4";

const twitterVideoUrl = videoURL;
const outputFilePath = path.join(__dirname, filePath + fileName); // You can specify your desired output path here

downloadTwitterVideo(twitterVideoUrl, outputFilePath);
