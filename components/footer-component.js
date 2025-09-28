Vue.component('site-footer', {
  template: `
     <footer>
          <div class="container">
            <div class="row">
              <div class="col-lg-4">
                <div class="widget">
                  <a href="index.html"
                    ><img alt="" class="img-fluid mb20" src="images/LOG.png" style="height:70px"
                  /></a>
                  <address class="s1">
                    <span
                      ><i class="id-color fa fa-map-marker fa-lg"></i>08 W 36th St, New
                      York, NY 10001</span
                    >
                    <span><i class="id-color fa fa-phone fa-lg"></i>+1 333 9296</span>
                    <span
                      ><i class="id-color fa fa-envelope-o fa-lg"></i
                      ><a href="mailto:contact@example.com">contact@example.com</a></span
                    >
               
                  </address>
                </div>
              </div>
              <div class="col-md-4">
                <h5 class="id-color mb20">Practice Areas</h5>
                <ul class="ul-style-2">
                  <li>Corporate and M&A</li>
                  <li>Construction and Real Estate</li>
                  <li>Commercial Duspute Resolution</li>
                  <li>Employment</li>
                  <li>Banking and Finance</li>
                </ul>
              </div>
              <div class="col-lg-4">
                <div class="widget">
                  <h5 class="id-color">Newsletter</h5>
                  <p>
                    Signup for our newsletter to get the latest news, updates and special
                    offers in your inbox.
                  </p>
                  <form
                    action="https://www.madebydesignesia.com/themes/justica/blank.php"
                    class="row"
                    id="form_subscribe"
                    method="post"
                    name="form_subscribe">
                    <div class="col text-center">
                      <input
                        class="form-control"
                        id="name_1"
                        name="name_1"
                        placeholder="enter your email"
                        type="text" />
                      <a href="index-4.html#" id="btn-submit"
                        ><i class="fa fa-long-arrow-right"></i
                      ></a>
                      <div class="clearfix"></div>
                    </div>
                  </form>
                  <div class="spacer-10"></div>
                  <small>Your email is safe with us. We don't spam.</small>
                </div>
              </div>
            </div>
          </div>
          <div class="subfooter">
            <div class="container">
              <div class="row g-4 align-items-center">
                <div class="col-lg-6">&copy; Copyright 2025 - Andrew Ehrlich</div>
                
              </div>
            </div>
          </div>
        </footer>
  `,
});
