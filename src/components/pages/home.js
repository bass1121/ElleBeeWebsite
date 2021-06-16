import React, { Component } from "react";
import business from "../../images/business.png";
import axios from "axios";
import PlaylistItem from "../playlist/playlist-item"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const API_KEY = process.env.REACT_APP_YOUTUBE_KEY;

library.add(faSpinner);

export default class Home extends Component {
  constructor() {
    super();
      this.state= {
        data: [],
        totalCount: 0,
        pageToken: "",
        nextPageToken: "",
        currentPage: 0,
        isLoading: true
      }

  };

  activateInfinateScroll() {
    window.onscroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop === 
        document.documentElement.offsetHeight
      ) {
        this.getYoutubePlaylist();
      }
    };
  }

  getYoutubePlaylist() {
    // this.setState({
    //   currentPage: this.state.currentPage + 1
    // });

    axios
      .get(
        `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=UU-HvkbTWtG_AC0d-PjQ-9YA&maxResults=10&part=snippet&key=${API_KEY}`
        )
        .then((response) => {
          console.log("getting", response.data)
          debugger
          this.setState({
            data: response.data.items,
            totalCount: response.data.pageInfo.totalResults,
            nextPageToken: response.data.nextPageToken,
            pageToken: response.data.pageToken,
            isLoading: false
          })
        })
        .catch((error) => {
          console.log("error in getYoutubePlaylist", error);
    });
  }

  playlistItems() {
    return this.state.data.map(item => {
      return (item)
    })
  }

  componentDidMount() {
    this.getYoutubePlaylist();
  }

  render() {
    const renderPlaylist = (state) => {
      return state.map(item => {
        return <PlaylistItem key={item.id} item={item} />
      })
    }
    return (
      <div>
        <div className="home-container">
          <div className="home-pic">
            <img src={business} alt="did not load" />
          </div>
          <div className="text-container">
            <p>Elle Bee's youtube channel is centered around reality television news. Her livestreams are open discussions on different topics in reality television.</p>
            <p>Elle Bee puts her heart and soul into her channel. She is dedicated to getting the news out about reality television shows like: Jersey Shore, Teen Mom, Mama June, Floribama Shore, 19 Kids and Counting, Siesta Key, Sister Wives, Seeking Sister Wives and 90 Day Fiance.</p>
            <p>She has a sweet southern charm about her and a huge heart.</p>
          </div>
          <div className="right-side-home">
            <div className="recent-upload-title">
                  Recent Uploads
            </div>
            <div className="youtube-playlist">
                <div className="recent-upload-list">
                  {renderPlaylist(this.state.data)}

                  {this.state.isLoading ?(
                    <div className="spinner-wrapper">
                      <FontAwesomeIcon icon="spinner" spin />
                    </div>) : null }

                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


