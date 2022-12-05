import React from "react";
import "../index.css";

function Articles(props) {
  return (
    <div
      className="home-container d-flex align-items-center p-5"
      style={{
        backgroundColor: "#101010",
        height: "50vh",
      }}
    >
      <div className="d-flex flex-column align-items-center justify-content-center p-3 w-100">
        <p>Latest News and Updates</p>
        <div className="d-flex justify-content-evenly w-100 mt-1">
          <Article
            title="Article Headline 1"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec tincidunt ipsum, in feugiat eros. In sit amet consequat mi." image="https://i.pinimg.com/564x/23/ae/91/23ae91d93c928765a14a23a3faa2ab92.jpg"
          />
          <Article
            title="Article Headline 2"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec tincidunt ipsum, in feugiat eros. In sit amet consequat mi." image="https://i.pinimg.com/236x/e3/c5/52/e3c552e6e065b6aad8adf8dbb8c6958c.jpg"
          />
          <Article
            title="Article Headline 3"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec tincidunt ipsum, in feugiat eros. In sit amet consequat mi." image="https://i.pinimg.com/564x/a9/b6/a2/a9b6a2e75f27df08c0fbb07d6d45f1d6.jpg"
          />
          <Article
            title="Article Headline 4"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec tincidunt ipsum, in feugiat eros. In sit amet consequat mi." image="https://i.pinimg.com/236x/5d/1e/e2/5d1ee20a3af97d372a4a55663d01b813.jpg"
          />
        </div>
      </div>
    </div>
  );
}

function Article(props) {
  return (
    <div
      style={{ width: "250px" }}
      className="d-flex flex-column align-items-center"
    >
      <div className="article-image" style={{ width: "200px", height: '60px', border: '1px solid white' }}>
        <img src={props.image} alt="featured"  style={{ width: "200px", height: '60px', objectFit: 'cover'}}/>
      </div>
      <p className="mt-2 mb-1">
        <b>{props.title}</b>
      </p>
      <p style={{ fontSize: "12px" }}>{props.body}</p>
      <button style={{ width: "200px", fontSize: "12px" }}>Read More</button>
    </div>
  );
}

export default Articles;
