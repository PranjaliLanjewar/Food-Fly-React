import React from "react";
// import Foodpic from ".../Images/Food.webp";
// import { FormMethod } from "react-router-dom";

const About=()=> {
    return(
        // <div className="container food_profile"> 
        //     <form method="">
        //         <div className="row">
        //             <div className="col-md-6">
        //                 <img src={Food} alt="Food" />  

        //             </div>
        //         </div>
        //     </form>
        // </div>


        <div>
            <form method="">
                <div className="col-md-6">
                    <div className="profile-head"></div>
                    <h5>Pranjali Lanjewar</h5>
                    <h6>Web Developer</h6>
                    <p className="profile-rating mt-3 mb-5">RANKINGS <span> 4.8/5.0</span></p>
                    

                

  
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                         <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab">About</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab">TimeLine</a>
                        </li>
                        
                    </ul>

                
                </div>

                <div className="col-md-2">
                    <input type="text" class="profile-edit-btn" value="edit-profile"/>

                </div>
               <div className="row">
                <div className="col-md-4">
                    <div className="profile-work">
                        <p>WORK LINK</p>
                        <a href="https://www.tripadvisor.in/">YouTube</a>
                        <a href="https://www.tripadvisor.in/">Instagram</a>
                        <a href="https://www.tripadvisor.in/">Web developer</a>
                        <a href="https://www.tripadvisor.in/">Figma</a>
                        <a href="https://www.tripadvisor.in/">GitHubLink</a>
                    </div>
                </div>
               </div>

               <div className="col-md-8 pl-5 about-info">
                    <div className="tab containe profile-tab" id="myTabContent">
                        <div className="tabe-pane fade show active" id="home" role="tabePanel" arial-labelleabdy="home-tab"></div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label >User_ID</label>
                                </div>
                                <div className="col-md-6">
                                    <p>7548923</p>
                                </div>
                                 </div>

                                 <div className="row">
                                <div className="col-md-6">
                                    <label >Name</label>
                                </div>
                                <div className="col-md-6">
                                    <p>Pranjali Lanjewar</p>
                                </div>
                                </div>

                                <div className="row">
                                <div className="col-md-6">
                                    <label >Profession</label>
                                </div>
                                <div className="col-md-6">
                                    <p>Web Developer</p>
                                </div>
                                
                                <div className="row">
                                <div className="col-md-6">
                                    <label >Email</label>
                                </div>
                                <div className="col-md-6">
                                    <p>pranjalinajewar1999gmail.com</p>
                                </div>
                                
                                <div className="row">
                                <div className="col-md-6">
                                    <label >Phone</label>
                                </div>
                                <div className="col-md-6">
                                    <p>8668629959</p>
                                </div>
                                
                                
                                
                            </div>
                                
                                
                            </div>
                                
                                
                            </div>
                                
                                
                            

                    </div>
                    
               </div>
            </form>
        </div>
    );
}
export default About;