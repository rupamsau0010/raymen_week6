import React, { Component } from "react";
import axios from "./axios";
import "./styles.css";

export default class main extends Component {
  state = {
    allData: {},
  };

  componentDidMount = () => {
    this.getData();
  };

  getData = () => {
    axios({ url: "/barstool.json", method: "GET" })
      .then((response) => {
        const data = response;
        this.setState({ allData: data });
        console.log("Data has been received");
      })
      .catch((err) => {
        console.log(err);
        console.log("Error retriving the data");
      });
  };

  displayData = (allData) => {
    if (allData != null) {
      console.log(allData);
      return (
        <>
          {allData.map((all, index) => (
            <div class="outer">
              <div class="inner1">
                <img
                  class=""
                  src={all.thumbnail.location + all.thumbnail.images.large}
                  alt=""
                />
              </div>
              <div class="inner2">
                <a href={all.url}>
                  <h2>
                  {all.title}
                  </h2>
                </a>
                <div class="inner2_inner">
                  <div class="inner2_inner_1">
                    <img
                      src={all.author.avatar}
                      alt=""
                      width="30"
                      height="30"
                    />
                    <h5>{all.author.name}, {Math.floor((new Date().getTime() - new Date(all.updated_at).getTime()) / (1000 * 3600 * 24))} days ego</h5>
                  </div>
                  <div class="inner2_inner_2">
                    <small>{all.comment_count}</small>
                    <i class="fab fa-facebook-messenger"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      );
    }
  };
  render() {
    return <div>{this.displayData(this.state.allData.data)}</div>;
  }
}
