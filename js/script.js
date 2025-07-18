jQuery(function () {
  jQuery("#js-button-drawer").on("click", function () {
    jQuery(this).toggleClass("is-checked");
    jQuery("#js-drawer").slideToggle();
    jQuery("body").toggleClass("is-fixed");
  });
  jQuery(window).resize(function () {
    if (jQuery(window).width() >= 768 && jQuery("#js-drawer").css("display") == "none") {
      jQuery("#js-drawer").css("display", "block");
    }
  });
  jQuery(".header__nav-link").each(function () {
    $(this).on("click", function () {
      if (jQuery(window).width() >= 768) {
        jQuery("#js-drawer").css("display", "block");
      } else {
        jQuery("#js-drawer").hide();
      }
    });
  });
});
