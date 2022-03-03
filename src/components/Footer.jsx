import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import "../styles/Footer.css";
function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="socialmedia">
          <YouTubeIcon />
          <InstagramIcon />
          <TwitterIcon />
        </div>
        <p>copyright &copy; apple.com</p>
      </footer>
    </div>
  );
}

export default Footer;
