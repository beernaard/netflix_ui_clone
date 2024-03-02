import React from "react";
import "./footer.css";
import { TfiWorld } from "react-icons/tfi";
import { IoMdArrowDropdown } from "react-icons/io";
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-questions">
          <p>Question? Call 0-000-000-0000</p>
        </div>
        <div className="footer-threecol">
          <div className="footer-col">
            <p>FAQ</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
          </div>
          <div className="footer-col">
            <p>FAQ</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
          </div>
          <div className="footer-col">
            <p>FAQ</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
          </div>
          <div className="footer-col">
            <p>FAQ</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
          </div>
        </div>
        <div className="footer-dropdown">
          <button className="btn">
            <div>
              <TfiWorld />
            </div>
            <div>English</div>
            <div>
              <IoMdArrowDropdown />
            </div>
          </button>
          <div className="dropdown-content">
            <div className="dropdown-div">
              <p>Tagalog</p>
            </div>
            <div className="dropdown-div">
              <p>Tagalog</p>
            </div>
            <div className="dropdown-div">
              <p>Tagalog</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-src">
        <div>
          <a href="https://www.freepik.com/free-photo/rows-red-seats-theater_3532061.htm#query=cinema%20poster&position=38&from_view=keyword&track=ais&uuid=c3027bdf-c9de-4eab-a4b2-fe33c023b123">
            Image by rawpixel.com
          </a>{" "}
          on Freepik
        </div>
        <div>
          Image by{" "}
          <a href="https://www.freepik.com/free-photo/man-watching-streaming-service-his-tv_16624177.htm#&position=20&from_view=search&track=ais&uuid=ce4f9c85-be2a-4088-aa86-05b28d9f53ee">
            Freepik
          </a>
        </div>
        <div>
          <a href="https://www.freepik.com/free-photo/teenager-sitting-his-bed-watching-movie-using-his-smartphone_21745523.htm#fromView=search&page=1&position=5&uuid=559bcc88-56e3-4ce0-aeb1-d3f1c6e47546">
            Image by freepik
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
