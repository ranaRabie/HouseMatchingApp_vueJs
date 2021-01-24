<template>
  <div class="home">
    <section id="intro" class="main-bg-gradient">
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <div class="col-md-7 col-lg-6">
                    <h6 class="mb-3" data-aos="fade-down">Hello</h6>
                    <h3 class="h1 mb-5" data-aos="fade-in" data-aos-delay="300">Replace your <br>home with another!</h3>
                    <p class="mb-5" data-aos="fade-in" data-aos-delay="300">We provide the best service by application. You can try yourself.<br>please feedback to us . It's always appreciate .</p>
                    <div data-aos="fade-up" data-aos-delay="500">
                        <a href="#" class="btn btn-primary app-btn btn-sm shadow" target="_blank">app store</a>
                        <a href="#" class="btn btn-white app-btn btn-sm shadow" target="_blank">google play</a>
                    </div>        
                </div>
                <div class="col-md-5 col-lg-5">
                    <div class="intro-imgs" data-aos="fade-in" data-aos-delay="300">
                        <div>
                            <img class="lazyload w-100 mb-2" src="@/assets/images/intro-1.png" alt="House Matching Image"  data-aos="zoom-in" data-aos-delay="500">
                            <img class="lazyload w-100" src="@/assets/images/intro-2.png" alt="House Matching Image" data-aos="zoom-in" data-aos-delay="500">
                        </div>
                        <div>
                            <img class="lazyload w-100 mb-2" src="@/assets/images/intro-3.png" alt="House Matching Image" data-aos="zoom-in" data-aos-delay="900">
                            <img class="lazyload w-100" src="@/assets/images/intro-4.png" alt="House Matching Image" data-aos="zoom-in" data-aos-delay="900">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <main id="main-content">
        <article id="services-blk" class="pg-blk py-5">
            <div class="container">
                <div class="blk-tit text-center text-capitalize mb-5">
                    <h6 class="text-primary mb-3" data-aos="fade-down" data-aos-delay="500">our services</h6>
                    <h3 data-aos="fade-in" data-aos-delay="300">We provide various kind of service for you</h3>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <div class="service-item">
                            <img class="lazyload" src="@/assets/images/service-ico-1.png" alt="House Matching Service" data-aos="zoom-in-up" data-aos-delay="300">
                            <h5 data-aos="fade-in" data-aos-delay="300">Direct Exchang</h5>
                            <p data-aos="fade-in" data-aos-delay="300">We provide the best service application. please feedback to us .</p>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="service-item">
                            <img class="lazyload" src="@/assets/images/service-ico-2.png" alt="House Matching Service" data-aos="zoom-in-up" data-aos-delay="500">
                            <h5 data-aos="fade-in" data-aos-delay="500">Direct Exchang</h5>
                            <p data-aos="fade-in" data-aos-delay="500">We provide the best service application. please feedback to us .</p>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="service-item">
                            <img class="lazyload" src="@/assets/images/service-ico-3.png" alt="House Matching Service" data-aos="zoom-in-up" data-aos-delay="700">
                            <h5 data-aos="fade-in" data-aos-delay="700">Direct Exchang</h5>
                            <p data-aos="fade-in" data-aos-delay="700">We provide the best service application. please feedback to us .</p>
                        </div>
                    </div>
                </div>
                <div class="text-center text-capitalize mt-5" data-aos="fade-up" data-aos-delay="300">
                    <a href="#app-blk" class="link-primary continue-link"><font-awesome-icon icon="angle-down" /> continue to know us</a>
                </div>
            </div>
        </article>
        <article id="app-blk" class="pg-blk py-5 bg-light" data-aos="fade-in">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-md-6">
                        <div class="app-imgs">
                            <img class="lazyload" src="@/assets/images/app-screen-1.png" alt="" data-aos="fade-down">
                            <img class="lazyload" src="@/assets/images/app-screen-2.png" alt="" data-aos="fade-up">
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-5">
                        <div class="blk-tit text-capitalize mb-5 mx-0">
                            <h6 class="text-primary mb-3" data-aos="fade-down" data-aos-delay="500">What Our App Does</h6>
                            <h3 data-aos="fade-in" data-aos-delay="300">We provide various kind of service for you</h3>
                        </div>
                        <div class="app-item" data-aos="fade-in" data-aos-delay="700">
                            <h5>Security And Safety.</h5>
                            <p>We provide the best service application. <br>please feedback to us .</p>
                        </div>
                        <div class="app-item" data-aos="fade-in" data-aos-delay="900">
                            <h5>Saving Time And Efforts.</h5>
                            <p>We provide the best service application. <br>please feedback to us .</p>
                        </div>
                        <div class="app-item" data-aos="fade-in" data-aos-delay="1100">
                            <h5>Easy To Use App.</h5>
                            <p>We provide the best service application. <br>please feedback to us .</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
        <article id="screenshots-blk" class="py-5" data-aos="fade-in">
            <div class="container py-5">
                <div class="row align-items-center">
                    <div class="col-lg-3">
                        <div class="blk-tit text-capitalize mx-0">
                            <h6 class="text-primary mb-3" data-aos="fade-down" data-aos-delay="500">app screenshots</h6>
                            <h3 class="m-0" data-aos="fade-in" data-aos-delay="300">screenshots from<br>real app</h3>
                        </div>
                    </div>
                    <div class="col-lg-9">
                        <div id="screenshots-carousel">
                            <carousel :items="3.5" :loop="true" :margin="10" :autoplay="true" :nav="true" :dots="false" :responsive="{0:{items:1.5},576:{items:2.5},768:{items:4.5},992:{items:3.5}}">
                                <div class="item">
                                    <img class="lazyload" src="@/assets/images/screen1.png" alt="">
                                </div>
                                <div class="item">
                                    <img class="lazyload" src="@/assets/images/screen2.png" alt="">
                                </div>
                                <div class="item">
                                    <img class="lazyload" src="@/assets/images/screen3.png" alt="">
                                </div>
                                <div class="item">
                                    <img class="lazyload" src="@/assets/images/screen1.png" alt="">
                                </div>
                                <div class="item">
                                    <img class="lazyload" src="@/assets/images/screen2.png" alt="">
                                </div>
                                <div class="item">
                                    <img class="lazyload" src="@/assets/images/screen3.png" alt="">
                                </div>
                                <div class="item">
                                    <img class="lazyload" src="@/assets/images/screen1.png" alt="">
                                </div>
                            </carousel>
                        </div>
                    </div>
                </div>
            </div>
        </article>
        <article id="app-blk2" class="pg-blk py-5">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-md-6 col-lg-5">
                        <img class="lazyload w-100" src="@/assets/images/users.png" alt="House Matching Image"  data-aos="zoom-out" data-aos-delay="300">
                    </div>
                    <div class="col-md-6 col-lg-5">
                        <div class="blk-tit text-capitalize mb-5 mx-0">
                            <h6 class="text-primary mb-3" data-aos="fade-down" data-aos-delay="500">What Our App Does</h6>
                            <h3 data-aos="fade-in" data-aos-delay="300">We provide various kind of service for you</h3>
                        </div>
                        <div class="app-item" data-aos="fade-in" data-aos-delay="700">
                            <h5>Security And Safety.</h5>
                            <p>We provide the best service application. <br>please feedback to us .</p>
                        </div>
                        <div class="app-item" data-aos="fade-in" data-aos-delay="900">
                            <h5>Saving Time And Efforts.</h5>
                            <p>We provide the best service application. <br>please feedback to us .</p>
                        </div>
                        <div class="app-item" data-aos="fade-in" data-aos-delay="1100">
                            <h5>Easy To Use App.</h5>
                            <p>We provide the best service application. <br>please feedback to us .</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
        <article id="sponsers-blk" class="py-5 bg-light" data-aos="fade-in">
            <div class="container py-3">
                <div class="blk-tit text-center text-capitalize mb-5">
                    <h6 class="text-primary mb-3" data-aos="fade-down" data-aos-delay="500">Our Sponsers</h6>
                    <h3 class="mb-4" data-aos="fade-in" data-aos-delay="300">Sponsers we love to deal with them</h3>
                </div>
                
                <div id="sponsers-carousel" class="mt-4">
                    <carousel :items="5" :margin="10" :autoplay="true" :nav="false" :dots="false" :responsive="{0:{items:2},768:{items:3},992:{items:5}}">
                        <div class="item">
                            <img class="lazyload" src="@/assets/images/sponser1.png" alt="">
                        </div>
                        <div class="item">
                            <img class="lazyload" src="@/assets/images/sponser1.png" alt="">
                        </div>
                        <div class="item">
                            <img class="lazyload" src="@/assets/images/sponser1.png" alt="">
                        </div>
                        <div class="item">
                            <img class="lazyload" src="@/assets/images/sponser1.png" alt="">
                        </div>
                        <div class="item">
                            <img class="lazyload" src="@/assets/images/sponser1.png" alt="">
                        </div>
                        <div class="item">
                            <img class="lazyload" src="@/assets/images/sponser1.png" alt="">
                        </div>
                        <div class="item">
                            <img class="lazyload" src="@/assets/images/sponser1.png" alt="">
                        </div>
                        <div class="item">
                            <img class="lazyload" src="@/assets/images/sponser1.png" alt="">
                        </div>
                    </carousel>
                </div>
            </div>
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
import carousel from 'vue-owl-carousel'
// @ is an alias to /src
export default {
    name: 'Home',
    components: { 
        carousel
    }
}
</script>
