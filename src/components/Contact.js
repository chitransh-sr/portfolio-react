import contact1 from '../img/contact.png';


const contact = ()=>{
    return(
        <section class="contact" id="contact">
        <div class="max-width">
            <h2 class="title">Contact me</h2>
            <div class="contact-content">
                
                <div class="column left">
                    <div class="text">Get in Touch</div>
                    <p>
                        Feel free to contact me for any queries.
                    </p>
                    <div class="icons">
                        <div class="row">
                            <i class="fas fa-user"></i>
                            <div class="info">
                                <div class="head">Name</div>
                                <div class="sub-title">Chitransh Srivastava</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="info">
                                <div class="head">Address</div>
                                <div class="sub-title">Lucknow, Uttar Pradesh</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-envelope"></i>
                            <div class="info">
                                <div class="head">Email</div>
                                <div class="sub-title">chitransh2209@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column right">
                    
                    <img src={contact1} width="90%"  />
                </div>
            </div>
        </div>
    </section>
    );
}

export default contact;