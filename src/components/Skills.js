const skills = ()=>{
    return(
        <section class="skills" id="skills">
        <div class="max-width">
            <h2 class="title">My skills</h2>
            <div class="skills-content">
                <div class="column left">
                    <div class="text">My Skills and Self Learnings</div>
                    <p>I have acquired knowledge of Web Development through constantly updating myself with new and
                        improved ways of doing things.
                        <br />
                        I have a knowledge of MySQL and I have experience in Database Handling through MongoDB.
                    </p>
                    <a href="https://www.linkedin.com/in/chitransh-srivastava-0b2b12193/">Go to my LinkedIn</a>
                </div>
                <div class="column right">
                    <div class="bars">
                        <div class="info">
                            <span>HTML</span>
                            <span>75%</span>
                        </div>
                        <div class="line html"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>CSS</span>
                            <span>60%</span>
                        </div>
                        <div class="line css"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>JavaScript</span>
                            <span>65%</span>
                        </div>
                        <div class="line js"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>ReactJS</span>
                            <span>60%</span>
                        </div>
                        <div class="line nodejs"></div>
                    </div>
                    <div class="bars">
                        <div class="info">
                            <span>MySQL</span>
                            <span>70%</span>
                        </div>
                        <div class="line mysql"></div>
                    </div>
                  
                </div>
            </div>
        </div>
    </section>
    );
}

export default skills;