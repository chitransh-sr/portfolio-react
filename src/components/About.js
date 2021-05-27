import prof from '../img/0.jpg';
import cv from '../files/Chitransh.pdf';

const about = ()=>{
return(
    <section class="about" id="about">
    <div class="max-width">
        <h2 class="title">About me</h2>
        <div class="about-content">
            <div class="column left">
                <img src={prof} alt="My Picture"/>
            </div>
            <div class="column right">
                <div class="text">I'm Chitransh and I'm a <span class="typing-2"></span></div>
                <p>A Quick learner and A keen observer, Skilled in Computer Science, Web Development and
                    Databases. Always ready to learn something new and apply it in real life Scenarios. Open to
                    Opportunities related to Front-End Web Development and Database Management.</p>

                <a href={cv} target="_blank">Go To My Resume</a>
            </div>
        </div>
    </div>
</section>
);
}

export default about;