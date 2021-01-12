import React, { useState } from 'react'
import './Login.css'
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import FingerprintRoundedIcon from '@material-ui/icons/FingerprintRounded';
import PersonIcon from "@material-ui/icons/Person";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import AdjustIcon from '@material-ui/icons/Adjust';
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";


function Login() {
        const history = useHistory();

        const home = (e) => {
                e.preventDefault();
                if ('submit')
                    history.push('/app')
        
        
        }



        const signup = (e) => {
                document.getElementById("signin_right").style.width = "0px";
                document.getElementById("signin_right").style.marginTop = "6000px";


              };

        const signin = (e) => {
                document.getElementById("signin_right").style.width = "900px";
                document.getElementById("signin_right").style.marginTop = "0px";

              };


   

        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
      

        return (
                <div className='login'>
                        <div className='login_left'>
                        <img
          className="logo"
          src="https://scontent.xx.fbcdn.net/v/t1.15752-9/133732630_383628032737473_3554463676936883782_n.png?_nc_cat=109&ccb=2&_nc_sid=58c789&_nc_eui2=AeFzl11LgUJhIZKXNZCaIcO7smrNKGQgu7Wyas0oZCC7tTvui58k4Bo7zqkdiru8na0Xcto141I9HdZORigeADPi&_nc_ohc=wAcvrmEqfoMAX92vtV4&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=06336ec79b2dc94156a99ebde613c5ae&oe=6018B4EA"
          alt=""
        />
                                <h1>The Crypto Assest Exchange</h1>
                                <div className='login_image_box'>
                                        <img src='https://pbs.twimg.com/media/ErJ60TyVQAAeWfI?format=png&name=small'/>
                                </div>
                        </div>
                        <div className='signin_right' id='signin_right'>
                                <div>
                                <div className="login_container">
        <h1>Sign in to Viscle Exchange</h1>
        <form>
          <div className="input-field">
            <i>
              <PersonIcon />
            </i>
            <input
              className="user-input-box"
              type="text"
              placeholder="Username/Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>

                                                        <div className="input-field">
            <i>
              <LockOpenIcon />
            </i>
            <input
              className="user-input-box"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
                                                        </div>


                                                        <p className="Forgottenpassword">Forgot password?</p>

                                                        <div className='verifybox'>

                                                                <AdjustIcon />
                                                                <p>Click to verify</p>
                                                        
                                                        </div>
          <div className="login_singInButton">
          <Button type="submit" onClick={home} >
            Sign In
          </Button>
                                                        </div>
          <div className="login_singUpButton" >
          <p1>New Here?</p1>
        <p> <FingerprintRoundedIcon />   </p>           
            <p2 onClick={signup}>Sign up now</p2>
       
          </div>
          <div class="social-media">
            <a
              href="https://www.facebook.com/tawkiralifa"
              class="social-icon-facebook"
            >
              <i class="facebook">
                <FacebookIcon />
              </i>
            </a>
            <a
              href="https://www.twitter.com/alif_tawkir"
              class="social-icon-twitter"
            >
              <i class="twitter">
                <TwitterIcon />
              </i>
            </a>
            <a
              href="https://www.instagram.com/tawkiralif"
              class="social-icon-instagram"
            >
              <i class="instagram">
                <InstagramIcon />
              </i>
            </a>
            <a
              href="https://www.linkedin.com/TawkirAlif20"
              class="social-icon-linkedin"
            >
              <i class="linkedin">
                <LinkedInIcon />
              </i>
            </a>
          </div>
        </form>
      </div>
                                </div>
                        </div>

















                        <div className='singup_right' id='singup_right'>
                                <div>
                                <div className="login_container">
        <h1>Sign up</h1>
        <form>
          <div className="input-field">
            <i>
              <PersonIcon />
            </i>
            <input
              className="user-input-box"
              type="text"
              placeholder="Username/Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>

          <div className="input-field">
            <i>
              <LockOpenIcon />
            </i>
            <input
              className="user-input-box"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
                                                        </div>


          <div className="input-field">
            <i>
              <LockOpenIcon />
            </i>
            <input
              className="user-input-box"
              type="password"
              placeholder="Confirm password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
                                                        </div>


                                                        <p className="Forgottenpassword">Forgot password?</p>

                                                        <div className='verifybox'>

                                                                <AdjustIcon />
                                                                <p>Click to verify</p>
                                                        
                                                        </div>
          <div className="login_singInButton">
          <Button type="submit" onClick={home} >
            Sign Up
          </Button>
                                                        </div>

                                                        <div className='already_have_an_account'>
                                                                <p>Already have an account ?</p>
                                                                <p1 onClick={signin}>Sing in</p1>
                                                        </div>

          <div className="login_singUpButton" >

          </div>
          <div class="social-media">
            <a
              href="https://www.facebook.com/tawkiralifa"
              class="social-icon-facebook"
            >
              <i class="facebook">
                <FacebookIcon />
              </i>
            </a>
            <a
              href="https://www.twitter.com/alif_tawkir"
              class="social-icon-twitter"
            >
              <i class="twitter">
                <TwitterIcon />
              </i>
            </a>
            <a
              href="https://www.instagram.com/tawkiralif"
              class="social-icon-instagram"
            >
              <i class="instagram">
                <InstagramIcon />
              </i>
            </a>
            <a
              href="https://www.linkedin.com/TawkirAlif20"
              class="social-icon-linkedin"
            >
              <i class="linkedin">
                <LinkedInIcon />
              </i>
            </a>
          </div>
        </form>
      </div>
                                </div>
                        </div>








                </div>
        )
}

export default Login
