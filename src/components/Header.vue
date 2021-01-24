<template>
    <header id="main-header">
        <div id="header-wrap" :class="{'header-fixed': scrollPosition > 35}">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light justify-content-between px-0">
                    <div class="d-flex align-items-center">
                        <a id="navbar-toggler-lnk" href="javascript:void(0)" class="btn text-primary mr-2" v-on:click="showMainMenu = true">
                            <span></span>
                            <span></span>
                            <span></span>
                        </a>
                        <a class="navbar-brand">
                            <img class="h-100" src="@/assets/images/logo.png" alt="House Matching Brand">
                        </a>
                    </div>
    
                    <div class="collapse navbar-collapse" id="navbarSupportedContent" v-bind:style= "[mobNav ? showMainMenu ? {'width':'100vw', 'opacity':'1'} : {'width': '0', 'opacity':'0'} : '']">
                        <a id="navbar-close-lnk" v-on:click="showMainMenu = false"><font-awesome-icon icon="times-circle" /></a>
                        <ul class="navbar-nav mr-auto text-capitalize" v-bind:style= "[mobNav ? showMainMenu ? {'transform': 'translate(0, 0)'} : {'transform': 'translate(-100%, 0)'} : '']">
                            
                            <li class="nav-item">
                                <!-- <a class="nav-link" href="index.html">Home</a> -->
                                <router-link to="/" class="nav-link" >Home</router-link>
                            </li>
                            <li class="nav-item">
                                <!-- <a class="nav-link" href="about.html">about us</a> -->
                                <router-link to="/about" class="nav-link" >about us</router-link>
                            </li>
                            <li class="nav-item">
                                <!-- <a class="nav-link" href="contact.html">contact us</a> -->
                                <router-link to="/contact" class="nav-link" >contact us</router-link>
                            </li>
                        </ul>
                    </div>
    
                    <div class="d-flex align-items-center">
                        <div class="lang-blk mx-3">
                            <div class="dropdown-blk text-uppercase" :class="{'show-drop-down' : showDropDown == true}">
                                <a class="dropdown-trigger" v-on:click="dropDownToggle(this)">
                                    <font-awesome-icon icon="globe" />
                                    en <font-awesome-icon icon="chevron-down" style="font-size:.7rem;" />
                                </a>
                                <ul class="dropdown-list dropdown-list-sm r-0 list-unstyled m-0" v-bind:style= "[showDropDown ? {'height':'auto'} : {'height':'0'}]">
                                    <li><a href="#">SW</a></li>
                                    <li><a href="#">DE</a></li>
                                    <li><a href="#">IT</a></li>
                                </ul>
                            </div>
                        </div>
                        <a href="#" class="btn btn-white app-btn btn-sm mr-1" target="_blank">google play</a>
                        <a href="#" class="btn btn-primary app-btn btn-sm" target="_blank">app store</a>
                    </div>
                </nav>
            </div>
        </div>
    </header>
    
</template>
<script>
export default {
    name: 'Header',
    data: () => {
        return{
            scrollPosition: null,
            windowWidth: null,
            mobNav: false,
            showMainMenu: false,
            showDropDown: false,
        }
    },
    
    methods: {
        // Update Scroll Method
        updateScroll() {
            this.scrollPosition = window.scrollY
        },
        updateWindowWidth(){
            this.windowWidth = window.innerWidth
            if(this.windowWidth > 991.98){
                this.mobNav = false;
            }else{
                this.mobNav = true;
            }
        },
        dropDownToggle(){
            if(this.showDropDown == true){
                this.showDropDown = false;
            }else{
                this.showDropDown = true;
            }
        }
    },
    
    mounted() {
        // Adding EventListener To Scroll Window
        window.addEventListener('scroll', this.updateScroll);
        // Adding EventListener To Resize Window
        window.addEventListener('resize', this.updateWindowWidth);
        this.updateWindowWidth();
        
    }
}
</script>
