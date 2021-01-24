<template>
  <div class="contact">
    <section id="intro" class="main-bg-gradient pg-tit">
            <div class="container">
                <h1 class="text-center text-capitalize " data-aos="fade-down">contact us</h1>
            </div>
        </section>
        <main id="main-content">
          
            <article id="contact-info-blk" class="py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="contact-info-item" data-aos="zoom-in" data-aos-delay="300">
                                <div class="contact-info-ico">
                                    <img src="@/assets/images/ico-phone.png" alt="">
                                </div>
                                <h5>+46-8 524856 25879</h5>
                                <p>Office Number</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="contact-info-item" data-aos="zoom-in" data-aos-delay="500">
                                <div class="contact-info-ico">
                                    <img src="@/assets/images/ico-mail.png" alt="">
                                </div>
                                <h5>email@housematchingapp.com</h5>
                                <p>Official email address</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="contact-info-item" data-aos="zoom-in" data-aos-delay="700">
                                <div class="contact-info-ico">
                                    <img src="@/assets/images/ico-location.png" alt="">
                                </div>
                                <h5>Stockholm, next to Brazilian.</h5>
                                <p>office location</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article id="contact-form-blk" class="py-5 bg-light" data-aos="fade-in">
                <div class="container py-5">
                    <div class="row align-items-center">
                        <div class="col-md-5">
                            <div class="blk-tit text-capitalize mx-0 mb-5 mb-md-0">
                                <h6 class="text-primary mb-3" data-aos="fade-down" data-aos-delay="500">keep in touch</h6>
                                <h3 class="m-0" data-aos="fade-in" data-aos-delay="300"><span class="text-primary">Feel Free,</span> Keep in touch with us, send message</h3>
                            </div>
                            <p class="font-weight-bold mt-5 mb-4 mb-md-0" data-aos="fade-in">Enter your name and email address, say what you want, Feel free.</p>
                        </div>
                        <div class="col-md-6">
                            <form id="contact-form" class="needs-validation m-0" novalidate action="" data-aos="fade-in">
                                
                                <div class="form-group">
                                    <input type="text" id="contactUsrName" class="form-control" placeholder="Full Name" required>
                                    <div class="invalid-feedback">
                                        Please Enter your Name.
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input type="email" id="contactUsrEmail" class="form-control" placeholder="Email Address" required>
                                    <div class="invalid-feedback">
                                        Please Enter E-mail Address.
                                    </div>
                                </div>
                                <div class="form-group">
                                    <textarea class="form-control" id="contactUsrMsg" placeholder="Write your Message..." required></textarea>
                                    <div class="invalid-feedback">
                                        Please Enter Message.
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary btn-sm text-capitalize px-5">
                                    send
                                    <span id="submit-loader"><span class="loader-03"></span></span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </article>
            <article id="map" data-aos="fade-in">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7226.016337596602!2d14.820647243134916!3d63.077908045578766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x466f90aa4263b271%3A0xffb30caf3ca4a207!2s834%2031%20Brunflo%2C%20Sweden!5e0!3m2!1sen!2seg!4v1609596373272!5m2!1sen!2seg" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </article>
            
            <article id="newsletter-blk" class="py-5 bg-primary text-white" data-aos="fade-in">
                <div class="container py-5">
                    <div class="row align-items-center">
                        <div class="col-md-5">
                            <div class="blk-tit text-capitalize mx-0 mb-5 mb-md-0">
                                <h6 class="mb-3" data-aos="fade-down" data-aos-delay="500">news letter</h6>
                                <h3 class="m-0" data-aos="fade-in" data-aos-delay="300">keep connecting<br>with us</h3>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <form action="" class="m-0" data-aos="fade-in">
                                <div class="form-group">
                                    <input type="email" class="form-control form-control-lg" placeholder="Email Address">
                                </div>
                                <button class="btn btn-white text-primary btn-sm text-capitalize">subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </article>
        </main>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
    name: 'Contact',
}
</script>