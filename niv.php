 <div id="splash--rinse" class="splash rinse-splash" aria-hidden="true" style="display: none;">
  <div class="rinse-splash__content-wrapper">
    <div class="rinse-splash__image-wrapper">
      <!-- using a background image instead of <img > to prevent the image from displaying before css loads on the page -->
      <div class="rinse-splash__image"></div>
    </div>
    <div class="rinse-splash__text">Want to save 3 hours per week?</div>
  </div>
</div>

  

  
    <div id="lead-capture-popup-container"></div>

    


  


    

    
      
      <!--- header start --->  
          <div id="announcement-banner" class="announcement-banner uk-slider uk-slider-container" uk-slider="center: true; autoplay: true">
            <ul class="announcement-banner__slider-items uk-slider-items uk-child-width-1-1 uk-child-width-1-2@m" style="transform: translate3d(0px, 0px, 0px);">
              
                
                  <li class="announcement-banner__item uk-active" tabindex="-1"><span>Discover Sparqulen today! ✨</span></li>
                
              
            </ul>
          </div>
        
      
    

    
    <ul class="rinse-button--primary__skip-links skip-links">
      <li><a href="#main-content" class="hero-cta-callout__button rinse-button rinse-button--primary__skip-links" role="button">Skip to Main Content</a></li>
    </ul>
    

    <div class=" uk-offcanvas-content page__wrapper content__container content__container--sticky-footer">

      

      
  
    

<div class="navbar__wrapper ">

  

  <nav id="navbar" class="navbar uk-navbar uk-navbar-container navbar--with-dynamic-schedule-cta-right background--image-dark" uk-navbar="">
    <!-- Note: navbar--full shows only on devices wider than tablet (>1024px) -->
    <div class="navbar--pages navbar--full uk-navbar-left">
      <ul class="nav uk-navbar-nav">

        <li class="nav-item nav-item--logo nav-item--home">
          <a id="nav__a--home" class="nav__link" href="/" aria-label="Home">
            <figure class="figure--logo logo--nav-left" role="none" aria-hidden="true"></figure>
          </a>
        </li>

        <li class="nav-item nav-item--services">
          <a id="nav__a--services" class="nav__link " href="/services/">Services</a>
        </li>

         <li class="nav-item nav-item--aboutus">
          <a id="nav__a--aboutus" class="nav__link " href="/aboutus/">About Us</a>
        </li>
         <li class="nav-item nav-item--contactus">
          <a id="nav__a--contactus" class="nav__link " href="/contactus/">Contact Us</a>
        </li>
 <li class="nav-item nav-item--blog">
          <a id="nav__a--blog" class="nav__link " href="/blog/">Blog</a>
        </li>

        <li class="nav-item nav-item--partner">
          <a id="nav__a--partner" class="nav__link " href="/partner/">For Business</a>
        </li>

       
      </ul>
    </div><!-- .navbar--pages -->

    <div class="navbar--actions navbar--full uk-navbar-right">
      <!-- When using_fade_in_right_cta, this will fade in/out opposite the ul that follows; start this faded out -->
      <ul class="nav uk-navbar-nav" data-nav-fade-in-on-scroll="" style="opacity: 0; visibility: hidden; transition: opacity 400ms, visibility 400ms;">
        



  <li class="nav-item nav-item--log-in">
    
      <a data-go-to-login="header" class="nav__link nav__link--log-in" href="/accounts/login/">Log in</a>
    
  </li>




        
        
          
            



<a href="/customers/signup/" class="dynamic-schedule-cta background--light " data-dynamic-schedule-cta="nav" data-schedule-pickup-cta="" data-segment-cta="dynamic-schedule-cta" data-segment-cta-location="nav" data-select-service="" data-testid="nav-right-button">
  <div class="dynamic-schedule-cta__content">
    <div class="dynamic-schedule-cta__clickable-area" data-dynamic-schedule-cta-area="pickup">
      <strong class="dynamic-schedule-cta__heading">Pickup</strong>
      <span class="dynamic-schedule-cta__text" data-dynamic-cta-pickup="">
        Tonight
        
      </span>
    </div>
    <div class="dynamic-schedule-cta__divider"></div>
    <div class="dynamic-schedule-cta__clickable-area" data-dynamic-schedule-cta-area="where">
      <strong class="dynamic-schedule-cta__heading">Where</strong>
      <span class="dynamic-schedule-cta__text dynamic-schedule-cta__text--address" data-dynamic-cta-address="">
        Add address
        
      </span>
    </div>
  </div>
  <div class="dynamic-schedule-cta__icon-circle rinse-button--primary-new no-transform" aria-hidden="true" data-dynamic-schedule-cta-area="arrow">
    <span class="dynamic-schedule-cta__icon rinse-icon rinse-icon--arrow-right-long"></span>
  </div>
</a>

          
        
        

      </ul>

      
      <!-- When using_fade_in_right_cta, this will fade out/in opposite the ul above; this starts showing. -->
        <ul class="nav uk-navbar-nav" data-nav-fade-out-on-scroll="" style="position: absolute; right: 0px; transition: opacity 400ms, visibility 400ms; opacity: 1; visibility: visible;">
          



  <li class="nav-item nav-item--log-in">
    
     <a data-go-to-login="header" href="booknow" style="background:#F4D44C;color:#000;padding:10px 22px;border-radius:30px;box-shadow:0 4px 10px rgba(0,0,0,0.2);font-weight:600;text-decoration:none;transition:0.3s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">Book Now</a>

    
  </li>


        </ul>
      
    </div><!-- .navbar--full.navbar--actions -->


    <!-- Note: navbar--narrow shows only on narrow devices (<1024px width) -->
    <div class="navbar--narrow uk-navbar-left navbar__nav-left--narrow">
      <ul class="nav uk-navbar-nav">
        <li class="nav-item nav-item--menu">
          <a id="nav__trigger--offcanvas" class="nav__link nav__link--open-offcanvas" href="#nav--mobile" aria-label="Menu" uk-toggle="" aria-expanded="false">
            <span class="rinse-icon--align-left"></span>
          </a>
        </li>
      </ul>
    </div>

    <div class="navbar--narrow uk-navbar-center">
      <a id="nav__a--home--logo" class="uk-navbar-item uk-logo nav__link" href="/" aria-label="Home">
        <figure class="figure--logo logo--nav-center"></figure>
      </a>
    </div>

    <div class="navbar--narrow uk-navbar-right navbar__nav-right--narrow">
      <ul class="nav uk-navbar-nav">
        

        
          
          <li>
            <!-- NOTE: Click event listener and innerText will be set via JS to trigger modal to open -->
<button class="lead-capture-popup-trigger " data-lead-capture-popup-trigger="" data-segment-cta="lead-capture-popup-trigger" data-segment-cta-location="fixed-bottom" style="display: none;">Get $20 off</button>

          </li>
        
      </ul>
    </div>
  </nav>

  

</div>

  