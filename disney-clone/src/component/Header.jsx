import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Nav>
      <Link to="/">
        <Logo src="/images/logo.svg" alt="" />
      </Link>
      <NavMenu>
        <a href>
          <img src="/images/home-icon.svg" alt="home icon" />
          <span>HOME</span>
        </a>
        <a href>
          <img src="/images/search-icon.svg" alt="search icon" />
          <span>SEARCH</span>
        </a>

        <a href>
          <img src="/images/watchlist-icon.svg" alt="watchlist icon" />
          <span>WATCHLIST</span>
        </a>
        <a href>
          <img src="/images/original-icon.svg" alt="orginal icon" />
          <span>ORIGINALS</span>
        </a>
        <a href>
          <img src="/images/movie-icon.svg" alt="movie icon" />
          <span>MOVIES</span>
        </a>
        <a href>
          <img src="/images/series-icon.svg" alt="series icon" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="https://media-exp1.licdn.com/dms/image/C4D03AQF5_otvQphnRQ/profile-displayphoto-shrink_800_800/0/1616328484082?e=1625097600&v=beta&t=uUf0k79oe1b8u7U-s40PkpVUoDYMCxpZjvIVqOI6dGs" />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        background: white;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
`;
