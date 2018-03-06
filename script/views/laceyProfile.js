'use strict';

laceyProfile

(function(module) {
    var laceyProfile = {};
  
    laceyProfile.init = (ctx, next) => {
      console.log('Lacey Amazon profile loading')
  
      $('#bio').hide();
      $('#articles').hide();
  
      $('#amazon-profile').show();
    };
  
    module.laceyProfile = laceyProfile;
  })(window);