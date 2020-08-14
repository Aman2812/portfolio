import React from 'react';
import abc from "./abc.jpg"
import './Home.css'


const Home = () => {
    return (
       
        <div className="Home">
            <img src={abc} width="300px" height="400px"/>

        <div className="banner-text">
          <h1> Full Stack Web Developer </h1>

          <hr/>

          <p>  HTML/CSS  |  Bootstrap   |  JavaScript   |   React   |   React Native |   Angular   |   Nodejs   |   Laravel   |   MongoDB  </p>
          <div className="social-links" >



<a href="https://google.com" rel="noopener noreferrer" target="_balnk">
<i className="fa fa-linkedin-square"  aria-hidden="true" />
</a>



<a href="https://google/com" rel="noopener noreferrer" target="_balnk">
<i className="fa fa-github-square"  aria-hidden="true" />


<a href="https://google/com" rel="noopener noreferrer" target="_balnk"/>
<i className="fa fa-facebook-square"  aria-hidden="true" />


<a href="https://www.instagram.com/its.amankr/" rel="noopener noreferrer" target="_balnk"/>
<i className="fa fa-instagram"  aria-hidden="true" />


</a>
</div>
</div>
</div>
      
    )
}

export default Home;



