import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Avatar, CircularProgress } from "@mui/material";
import Muhaab from "../public/assets/Muhaab10.jpg";
import { useAppContext } from "@/Context/Auth.Context";

export default function NavBar() {
  const { error, login, logout, userData, userToken, isLoading } =
    useAppContext();

  const [isClicked, setisClicked] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const formData = {
    email: email,
    password: password,
  };

  useEffect(() => {
    if (userData) {
      setisClicked(false);
    }
  }, [userData]);

  return (
    <div className="contenedor-header" id="arriba">
      <header>
        <div className="logo">
          <Link href="/">Muhaab</Link>
        </div>

        <nav className={`responsive ${navOpen ? "block" : ""}`}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/#About">About</Link>
            </li>
            <li>
              <Link href="/#Skills">Skills</Link>
            </li>
            <li>
              <Link href="/#Educacion">Educacion</Link>
            </li>
            <li>
              <Link href="/portofolio">Portofolio</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            {userToken ? (
              <>
                <li className="adminNav">
                  <Link href="/admin">Admin Pannel</Link>
                </li>
                <li>
                  <p onClick={() => logout()}>Logout</p>
                </li>
              </>
            ) : (
              ""
            )}
          </ul>
        </nav>

        <div className="NavRightSection">
          {!userToken ? (
            <>
              {isLoading ? (
                <div className="Loading">
                  <CircularProgress />{" "}
                </div>
              ) : (
                <button
                  disabled={isLoading}
                  className="LoginBut"
                  onClick={() => setisClicked(!isClicked)}
                >
                  Login
                </button>
              )}
            </>
          ) : (
            <>
              <div className="User">
                <Avatar alt="Muhaab" src={Muhaab.src} />
                <p>{userData.userName}</p>
              </div>
              {isLoading ? (
                <div className="Loading">
                  <CircularProgress />{" "}
                </div>
              ) : (
                ""
              )}
            </>
          )}

          <div className="nav-responsive" onClick={() => setNavOpen(!navOpen)}>
            <MenuIcon />
          </div>
        </div>

        <div className={`loginPopUP ${isClicked ? "flex" : ""}`}>
          <form onSubmit={(e) => login(formData, e)}>
            <input
              defaultValue={email}
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              defaultValue={password}
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="submit"
              value="Login"
              className="submit"
              disabled={isLoading}
            />
            {error ? <div className="error">{error}</div> : ""}
          </form>
          <div className="LoginClose" onClick={() => setisClicked(false)}>
            <p>Close</p>
          </div>
        </div>
      </header>
    </div>
  );
}
