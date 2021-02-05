import React from 'react';
import logo from '../images/1.png'

const Start = () => {
    return(
        <div className="startBg"> 
            <div className="sidebar">
                <div className="side-icon">
                <a href="/" ><i className="myicon fas fa-file-alt"></i></a>
                <a href="/edit" ><i className="myicon fas fa-code"></i></a>
                <a href="https://github.com/Venika/codedit" target="_blank" rel="noreferrer"><i className="myicon fas fa-code-branch"></i></a>
                <a href="https://www.linkedin.com/in/venikagaur" target="_blank" rel="noreferrer"><i className="myicon fab fa-linkedin"></i></a>
                    </div>
            </div>
            <div className="mainpage">
                <div className="heading">
                    
                    <button className="navbtn">
                        <div className="yellow">JS</div>&nbsp; 
                        Codedit.js &nbsp; &nbsp; 
                        <i className="navicon fas fa-times"></i> </button>
                </div>   
                
                <div className="content">
                    <div className="pink">&lt;</div><div className="green">h1</div><div className="pink">&gt;</div>Welcome to<div className="blue">&nbsp;Codedit!</div> <div className="pink">&lt;</div><div className="green">/h1</div><div className="pink">&gt;</div>             
                </div> 
                
                <div className="mainpart">
                    <div className="Para">
                        An <div className="pink1">online code editor</div> that allows you to code to your heart's content right in your browser. No need to download any fancy <div className="yellow1">IDE </div>, just write your code and see in real time as your web project comes to <div className="green">life </div>!<br></br><br></br>
                        <div className="blue">Codedit</div> is built using <div className="blue1">React JS</div> and <div className="red">CodeMirror</div>. The IDE design is inspired by Codepen. <br></br><br></br>So what are you waiting for? <div className="blue2"><a href="/edit">Get coding!</a></div>
                    </div>
                
                    <div className="mainimg">
                    <a href="/edit"><img className="testimg" src={logo}  alt="Codedit" style={{width:'85%', height:'85%'}} /></a>
                    </div>
                </div> 

            </div>             
        </div>
    )

    }

export default Start;
