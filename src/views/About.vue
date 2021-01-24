<template>
  <div class="about">
    <section id="intro" class="main-bg-gradient pg-tit">
            <div class="container">
                <h1 class="text-center text-capitalize " data-aos="fade-down">about us</h1>
            </div>
        </section>
        <main id="main-content">
            <article id="app-blk" class="pg-blk py-5 about-app" data-aos="fade-in">
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
            <article id="team-blk" class="pg-blk py-5 bg-light" data-aos="fade-in">
                <div class="container">
                    <div class="blk-tit text-center text-capitalize mb-5">
                        <h6 class="text-primary mb-3" data-aos="fade-down" data-aos-delay="500">our team</h6>
                        <h3 data-aos="fade-in" data-aos-delay="300">Owners And Our Great Team</h3>
                    </div>
                    <div id="team-carousel">
                        <carousel :items="5" :margin="10" :autoplay="true" :nav="true" :dots="false" :responsive="{0:{items:2},768:{items:3},992:{items:4},1200:{items: 5,}}">
                            <div class="team-item item">
                                <div class="team-member-img">
                                    <img class="lazyload" src="@/assets/images/user-2.jpg" alt="House Matching App Team Member">
                                </div>
                                <h5>nadia ahmed</h5>
                                <p class="text-primary">project manager</p>
                            </div>
                            <div class="team-item item">
                                <div class="team-member-img">
                                    <img class="lazyload" src="@/assets/images/user-3.jpg" alt="House Matching App Team Member">
                                </div>
                                <h5>nadia ahmed</h5>
                                <p class="text-primary">project manager</p>
                            </div>
                            <div class="team-item item">
                                <div class="team-member-img">
                                    <img class="lazyload" src="@/assets/images/user-1.jpg" alt="House Matching App Team Member">
                                </div>
                                <h5>nadia ahmed</h5>
                                <p class="text-primary">project manager</p>
                            </div>
                            <div class="team-item item">
                                <div class="team-member-img">
                                    <img class="lazyload" src="@/assets/images/user-2.jpg" alt="House Matching App Team Member">
                                </div>
                                <h5>nadia ahmed</h5>
                                <p class="text-primary">project manager</p>
                            </div>
                            <div class="team-item item">
                                <div class="team-member-img">
                                    <img class="lazyload" src="@/assets/images/user-3.jpg" alt="House Matching App Team Member">
                                </div>
                                <h5>nadia ahmed</h5>
                                <p class="text-primary">project manager</p>
                            </div>
                            <div class="team-item item">
                                <div class="team-member-img">
                                    <img class="lazyload" src="@/assets/images/user-1.jpg" alt="House Matching App Team Member">
                                </div>
                                <h5>nadia ahmed</h5>
                                <p class="text-primary">project manager</p>
                            </div>
                            <div class="team-item item">
                                <div class="team-member-img">
                                    <img class="lazyload" src="@/assets/images/user-2.jpg" alt="House Matching App Team Member">
                                </div>
                                <h5>nadia ahmed</h5>
                                <p class="text-primary">project manager</p>
                            </div>
                        </carousel>
                    </div>
                </div>
            </article>
            <article id="feautures-blk" class="py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-6 col-md-3">
                            <div class="feature-item">
                                <div class="feature-ico" data-aos="zoom-in">
                                    <img class="lazyload" src="@/assets/images/f-1.png" alt="House Matching App Feature">
                                </div>
                                <h5 data-aos="fade-in">choose a home</h5>
                                <p data-aos="fade-in">Choose home you like and swipe right</p>
                            </div>
                        </div>
                        <div class="col-6 col-md-3">
                            <div class="feature-item">
                                <div class="feature-ico" data-aos="zoom-in">
                                    <img class="lazyload" src="@/assets/images/f-2.png" alt="House Matching App Feature">
                                </div>
                                <h5 data-aos="fade-in">direct & triple</h5>
                                <p data-aos="fade-in">Choose switching mode director triple</p>
                            </div>
                        </div>
                        <div class="col-6 col-md-3">
                            <div class="feature-item">
                                <div class="feature-ico" data-aos="zoom-in">
                                    <img class="lazyload" src="@/assets/images/f-3.png" alt="House Matching App Feature">
                                </div>
                                <h5 data-aos="fade-in">single / group chat</h5>
                                <p data-aos="fade-in">Connect with owner, single or group chatting</p>
                            </div>
                        </div>
                        <div class="col-6 col-md-3">
                            <div class="feature-item">
                                <div class="feature-ico" data-aos="zoom-in">
                                    <img class="lazyload" src="@/assets/images/f-4.png" alt="House Matching App Feature">
                                </div>
                                <h5 data-aos="fade-in">deal acceptance</h5>
                                <p data-aos="fade-in">Deal with each other, to switch your houses.</p>
                            </div>
                        </div>
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
    name: 'About',
    components: { 
        carousel
    }
}
</script>
