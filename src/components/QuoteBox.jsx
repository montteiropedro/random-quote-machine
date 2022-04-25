import React from "react";
import $ from "jquery";

import { api } from "../services/quoteApi";
import { generateColor } from "../functions";

import { Quote, Span, TwitterButton, NewQuoteButton } from "./styled";
import "../styles/QuoteBox.css";

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "Kanye West",
      color: "",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    try {
      // when the component is first mounted, get its first quote
      const responseObj = await api.get("/");
      const responseArray = responseObj.data.quotes;
      const response = responseArray[Math.floor(Math.random() * responseArray.length)];

      const quote = response.quote;
      const author = response.author;

      // as above, the same occur for the ambient color
      const color = generateColor();
      const bodyBackground = $(document.body);
      bodyBackground.css({ backgroundColor: color });

      this.setState({ quote, author, color });
    } catch (err) {
      console.error(err);
    }
  }

  async handleClick() {
    // generate a new quote
    const responseObj = await api.get("/");
    const responseArray = responseObj.data.quotes;
    const response = responseArray[Math.floor(Math.random() * responseArray.length)];

    const quote = response.quote;
    const author = response.author;

    // generate a new color
    const color = generateColor();
    const bodyBackground = $(document.body);
    bodyBackground.css({ backgroundColor: color });

    // animations
    $("#text").fadeOut(0).fadeIn(1200);
    $("#author").fadeOut(0).fadeIn(1200);

    this.setState({ quote, author, color });
  }

  render() {
    const quote = this.state.quote;
    const author = this.state.author;
    const color = this.state.color;

    const tweetLink = `https://twitter.com/intent/tweet?hashtags=quotes&text=${encodeURIComponent(
      '"' + quote + '" ' + author
    )}`;

    return (
      // the 'card' class is from bootstrap
      <div id="quote-box" className="card">
        <div id="text">
          <Quote color={color} className="fa-solid fa-quote-left"></Quote>
          <Span color={color}>{quote}</Span>
        </div>

        <div id="author">
          <Span color={color}>- {author}</Span>
        </div>

        {/* HTML entity '&amp' = '&'  */}
        <div id="buttons">
          <TwitterButton
            id="tweet-quote"
            href={tweetLink}
            target="_blank"
            rel="noreferrer noopener"
            color={color}
          >
            <i className="fa-brands fa-twitter"></i>
          </TwitterButton>
          <NewQuoteButton
            id="new-quote"
            color={color}
            onClick={this.handleClick}
          >
            New Quote
          </NewQuoteButton>
        </div>
      </div>
    );
  }
}

export default QuoteBox;
