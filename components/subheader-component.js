Vue.component('subheader', {
  props: ['title', 'subtitle'],
  template: `
      <section id="subheader" class="jarallax text-white">
                <img src="images/background/subheader.jpg" class="jarallax-img" alt="">
                <div class="center-y relative text-center">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 text-center">
                                <h1> {{this.title }}</h1>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
            </section>

  `,
});
