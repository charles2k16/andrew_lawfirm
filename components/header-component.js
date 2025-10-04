Vue.component('site-header', {
  template: `
  <header class="transparent scroll-light">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="de-flex sm-pt10">
                  <div class="de-flex-col">
                    <!-- logo begin -->
                    <div id="logo">
                      <a href="index.html">
                        <img alt="" class="logo" src="images/logo.png" height="70px" />
                          <img alt="" class="logo-2" src="images/logo2.png" height="70px" />
               
                      </a>
                    </div>
                    <!-- logo close -->
                  </div>
                  <div class="de-flex-col header-col-mid">
                    <!-- mainmenu begin -->
                    <ul id="mainmenu">
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="about.html">About</a>
                     
                      </li>
                      <li>
                        <a href="practice-areas.html">Practice Areas</a>
                      </li>

                      <li><a href="contact.html">Contact</a></li>
                    </ul>
                    <!-- mainmenu close -->
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </header>
  `,
});
