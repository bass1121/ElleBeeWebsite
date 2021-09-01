import React, { Component } from "react";

import Closeup from "../../images/elle-bee-closeup.jpg";
import Chrisley from "../../images/chrisleyKnowsBest.png";
import Jersey from "../../images/jerseyShore.jfif"; 
import LoveAfterLockup from "../../images/loveAfterLockup.jfif";
import MommaJune from "../../images/mommaJune.jfif";
import SiestaKey from "../../images/siestaKey.jfif";
import TeenMom from "../../images/teenMom.jfif";
import TeenMom2 from "../../images/teenMom2.jfif";

import axios from "axios";
import PlaylistItem from "../playlist/playlist-item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const API_KEY = process.env.REACT_APP_YOUTUBE_KEY;

library.add(faSpinner);

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      nextPageToken: "",
      isLoading: true,
    };

    this.getYoutubePlaylist = this.getYoutubePlaylist.bind(this);
  }

  getYoutubePlaylist() {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=UU-HvkbTWtG_AC0d-PjQ-9YA&maxResults=5&part=snippet&key=${API_KEY}`
      )
      .then(response => {
        this.setState(prevState => ({
          data: [...prevState.data, ...response.data.items],
          nextPageToken: response.data.nextPageToken,
          isLoading: false,
        }));
      })
      .catch(error => {
        console.error("error in getYoutubePlaylist", error);
      });
  }

  componentDidMount() {
    this.getYoutubePlaylist();
    
    var container = document.getElementById("youtubePlaylist");
      container.onscroll = () => {
        if (
          container.scrollTop + container.clientHeight ===
          container.scrollHeight
        ) {
          if (this.state.nextPageToken !== undefined) {
            this.getNextPage();
          }
        }
      };
  }

  getNextPage() {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=UU-HvkbTWtG_AC0d-PjQ-9YA&maxResults=5&part=snippet&pageToken=${this.state.nextPageToken}&key=${API_KEY}`
      )
      .then(response => {
        this.setState({
          data: this.state.data.concat([...response.data.items]),
          totalCount: response.data.pageInfo.totalResults,
          nextPageToken: response.data.nextPageToken,
          isLoading: false,
        });
      })
      .catch(error => {
        console.error("error in getYoutubePlaylist", error);
      });
  }

  render() {
    const renderPlaylist = state => {
      return state.map(item => {
        return <PlaylistItem key={item.id} item={item} />;
      });
    };

    return (
      <div className="homepage-wrapper">
        <div className="home-container">
          <div className="left-side">
            <div className="divider">
              <div className="home-pic">
                <img src={Closeup} alt="did not load" />
              </div>

              <div className="text-container">
                <p>
                  Elle Bee's youtube channel is centered around reality
                  television news. Her livestreams are open discussions about
                  reality television.
                </p>
                <p>
                  Elle Bee has put her heart and soul into her channel. She is
                  dedicated to getting the news out about reality television
                  shows like: Jersey Shore, Teen Mom, Mama June, Floribama
                  Shore, 19 Kids and Counting, Siesta Key, Sister Wives, Seeking
                  Sister Wives and 90 Day Fiance.
                </p>
                <p>
                  She has a sweet southern charm about her and a huge heart. She
                  is always the first to help people when they are in need and
                  she loves being friendly to everybody. She is always open for
                  suggestions and feedback. Join our community where we can
                  discuss and gossip about the latest reality t.v. news
                  together.
                </p>
              </div>
            </div>

            <div className="show-logo">
              <img src={Chrisley} alt="" />
              <img src={Jersey} alt="" />
              <img src={LoveAfterLockup} alt="" />
              <img src={MommaJune} alt="" />
              <img src={SiestaKey} alt="" />
              <img src={TeenMom} alt="" />
              <img src={TeenMom2} alt="" />
            </div>
          </div>

          <div className="right-side-home" id="rightSideHome">
            <div className="recent-upload-title">Elle's Content</div>
            <div className="youtube-playlist" id="youtubePlaylist">
              <div className="recent-upload-list" id="recentUploadList">
                {renderPlaylist(this.state.data)}
                {this.state.isLoading ? (
                  <div className="spinner-wrapper">
                    <FontAwesomeIcon
                      className="spinner-icon"
                      icon="spinner"
                      spin
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
