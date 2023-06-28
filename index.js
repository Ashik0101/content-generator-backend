const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

/**************** Generating poem here.... ***************/
app.post("/generate/poem", async (req, res) => {
  try {
    const keyword = req.body.keyword;
    if (!keyword)
      return res.status(400).json({ msg: "Please provide a keyword!" });
    // Make a request to the ChatGPT API
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        messages: [
          {
            role: "system",
            content: `You are a poet. \n You have to generate a poem around Keyword: ${keyword} in 200 words in HINDI.`,
          },
        ],
        model: "gpt-3.5-turbo",
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Extract the generated poem from the API response
    const content = response.data.choices[0].message.content;
    console.log(content);
    res.json({ content });
  } catch (error) {
    console.error("Error:", error.response.data);
    res.status(500).json({
      error: "Something went wrong while generating poem",
      message: error.message,
    });
  }
});

/**************** Generating joke here.... ***************/
app.post("/generate/joke", async (req, res) => {
  try {
    const keyword = req.body.keyword;
    if (!keyword)
      return res.status(400).json({ msg: "Please provide a keyword!" });
    // Make a request to the ChatGPT API
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        messages: [
          {
            role: "system",
            content: `You are a Comedian who know tones of jokes in every keyword and every situation. \n You have to generate a joke around Keyword: ${keyword} in simple english terms and the joke should be related to Indian situations so that an average middle class Indian and a   beginner in English can understand and please don't mention like average Indian, Indian etc.`,
          },
        ],
        model: "gpt-3.5-turbo",
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Extract the generated joke from the API response
    const content = response.data.choices[0].message.content;
    console.log(content);
    res.json({ content });
  } catch (error) {
    console.error("Error:", error.response.data);
    res.status(500).json({
      error: "Something went wrong while generating joke",
      msg: error.message,
    });
  }
});

/**************** Generating Quotes here.... ***************/
app.post("/generate/quote", async (req, res) => {
  try {
    const keyword = req.body.keyword;
    if (!keyword)
      return res.status(400).json({ msg: "Please provide a keyword!" });
    // Make a request to the ChatGPT API
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        messages: [
          {
            role: "system",
            content: `You are a Very Experience person who have tons of experience in life in all the situation and also you are the motivational speaker who have tons of quotes in any aspect of life . \n You have to generate a quote around Keyword: ${keyword} in simple language so that everyone can understand.`,
          },
        ],
        model: "gpt-3.5-turbo",
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Extract the generated quote from the API response
    const content = response.data.choices[0].message.content;
    console.log(content);
    res.json({ content });
  } catch (error) {
    console.error("Error:", error.response.data);
    res.status(500).json({
      error: "Something went wrong while generating quote",
      msg: error.message,
    });
  }
});

/**************** Generating Story here.... ***************/
app.post("/generate/story", async (req, res) => {
  try {
    const keyword = req.body.keyword;
    if (!keyword)
      return res.status(400).json({ msg: "Please provide a keyword!" });
    // Make a request to the ChatGPT API
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        messages: [
          {
            role: "system",
            content: `You are a a story teller who know lots of stories in every topic. \n You have to generate a story around Keyword: ${keyword} in simple language of around 200 words, so that everyone can understand.`,
          },
        ],
        model: "gpt-3.5-turbo",
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Extract the generated story from the API response
    const content = response.data.choices[0].message.content;
    console.log(content);
    res.json({ content });
  } catch (error) {
    console.error("Error:", error.response.data);
    res.status(500).json({
      error: "Something went wrong while generating story",
      msg: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
