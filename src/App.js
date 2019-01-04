import React, { Component } from 'react';
import './App.css';
export default class App extends Component {
  render() {
    return (
            <div className="container" >  
                <div>
                    <div className="menubar" align = "center" id="menubar">
                      <nav class="navbar  navbar-expand-sm bg-black fixed-top justify-content-center">
                        <ul class="navbar-nav">
                          <li class="nav-item">
                            <a class="nav-link" href="#" align = "center" id = "navbar-text">Home</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#" align = "center" id = "navbar-text"> About</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#" align = "center" id = "navbar-text"> Skills </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#" align = "center" id = "navbar-text"> Experience </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#" align = "center" id = "navbar-text"> Education </a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#" align = "center" id = "navbar-text"> Contact Me </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div id="myPageContent" class="container-fluid">  
                      <section id="home">
                          <div id="textSlider" class="row">
                            <div class="col-xs-12 col-sm-12 col-md-1 col-lg-4 iamCol">
                            </div>
                              <div class="col-xs-12 col-sm-12 col-md-7 col-lg-8 slideCol">
                                <div class="scroller">
                                  <div class="inner">
                                    <p>Nilesh Kumar</p>
                                    <p>Web Developer</p>
                                    <p>Coder</p>
                                    <p>Football Blogger</p>
                                  </div>
                                </div>
                                    <a href="https://linkedin.com/in/nilesh-kumar-567b0076" class="fa fa-linkedin"></a> &nbsp;   
                                    <a href="https://github.com/nilesh2625" class="fa fa-github"></a> &nbsp;
                                    <a href="https://www.facebook.com/nilesh.kumar.35110" class="fa fa-facebook"></a> &nbsp;
                                    <a href="#" class="fa fa-twitter"></a>  &nbsp;
                              </div>      
                          </div>
                      </section>
                    </div>
                </div>

                <div className="container">
                <div>
                  <nav>
                  <section class="resume-section p-3 p-lg-5 d-flex d-column">
                  <p> Hello there</p>
                  </section>
                  </nav>
                  </div>
                </div>



            </div> 
    );
  }
}
