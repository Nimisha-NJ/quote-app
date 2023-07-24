import React, { useEffect, useState } from "react";

function Quote() {
  const [quote, setQuote] = useState([]);

  const handleQuote = () => {
    let api = "http://type.fit/api/quotes";

    fetch(api)
      .then((res) => res.json())
      .then((result) => {
        let random = Math.floor(Math.random() * result.length);
        setQuote(result[random]);
        console.log(result[random]);
      });
  };

  useEffect(() => {
    handleQuote();
  }, []);

  return (
    <div className="container">
      <h1>Quote of the day</h1>
      <p className="quote-content">{quote.text}</p>
      <p className="author">--- {quote.author}</p>
      <div className="button-position">
        <button onClick={handleQuote}>Gimme Advice</button>
      </div>
    </div>
  );
}

export default Quote;
