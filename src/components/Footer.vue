<template>
    <footer id="main-footer">
            <div class="footer-wrap py-4">
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-md-5">
                            <a href="index.html" class="footer-brand">
                                <img class="lazyload h-100" src="@/assets/images/logo.png" alt="House Matching Brand">
                            </a>
                            <p>
                                We provide the best service by application. You can try yourself. <br>please feedback to us . It's always appreciate .
                            </p>
                        </div>
                        <div class="col-6 col-md-2">
                            <h5 class="footer-tit">links</h5>
                            <ul class="m-0 list-unstyled">
                                <li>
                                    <router-link to="/">Home</router-link>
                                </li>
                                <li>
                                    <router-link to="/about">about us</router-link>
                                </li>
                                <li>
                                    <router-link to="/contact" >contact us</router-link>
                                </li>
                            </ul>
                        </div>
                        <div class="col-6 col-md-3">
                            <h5 class="footer-tit">contact us</h5>
                            <ul class="m-0 list-unstyled">
                                <li>0102548965875</li>
                                <li>0102548965875</li>
                                <li>home@info.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright py-4">
                <div class="container">
                    <div class="d-sm-flex justify-content-between align-items-center">
                        <p class="m-0">
                            © 2020. All rights reserved.
                        </p>
                        <div class="footer-social">
                            <a href="#" target="_blank">
                                <img class="lazyload" src="@/assets/images/soc-fb.png" alt="House Matching">
                            </a>
                            <a href="#" target="_blank">
                                <img class="lazyload" src="@/assets/images/soc-tw.png" alt="House Matching">
                            </a>
                            <a href="#" target="_blank">
                                <img class="lazyload" src="@/assets/images/soc-in.png" alt="House Matching">
                            </a>
                            <a href="#" target="_blank">
                                <img class="lazyload" src="@/assets/images/soc-p.png" alt="House Matching">
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </footer>
    
</template>

<script>
export default {
  name: 'Footer',
}
</script>
