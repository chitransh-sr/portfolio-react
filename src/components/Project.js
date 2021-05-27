import project1 from '../img/saas.png';
import project2 from '../img/ct.png';
import project3 from '../img/p.png';
const projects = ()=>{
    return (
        <section class="projects" id="projects">
        <div class="max-width">
            <h2 class="title">My Projects</h2>
            <div class="carousel">
                <div class="card">
                    <div class="box">
                        <a href="https://chitransh-sr.github.io/saas/" target="_blank"><img src={project1} alt=""/></a>
                        <div class="text">SaaS Website</div>
                        <p>
                            Software as a service (or SaaS) is a way of delivering applications over the Internet—as a
                            service.
                            Instead of installing and maintaining software, you simply access it via the Internet,
                            freeing yourself
                            from complex software and hardware management.<br />
                        </p>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <a href="https://chitransh-sr.github.io/covid/" target="_blank"><img src={project2} alt=""/></a>
                        <div class="text">Covid-19 Tracker</div>
                        <p>
                            COVID-19 is thought to spread mainly through close contact from person to person, including
                            between people who are physically near each other (within about 6 feet). People who are
                            infected but do not show symptoms can also spread the virus to others.<br />

                        </p>
                    </div>
                </div>
                <div class="card">
                    <div class="box">
                        <a href="https://chitransh-sr.github.io/portfolio/" target="_blank">
                            <img src={project3} alt=""/></a>
                        <div class="text">Portfolio Website </div>
                        <p> At its most basic form, a portfolio website provides professional information about an
                            individual or a
                            company and presents a showcase of their work. ... To supply site visitors with information
                            about the
                            individual or company to showcase work.

                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default projects;