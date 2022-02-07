/*********************************************************************
 ***
 *Original Author: Michelle Petit                                  *
 *Date Created:  10-02-2020                                        *
 *Version: 1                                                       *
 *Date Last Modified: 10-02-2020                                   *
 *Modified by: Michelle Petit                                      *
 *Modification log: added JQuery code to animate welcome bar,      *
                   added Velocity.js code to animate ghost         *
 ***
 ******************************************************************** */

$(document).ready(function () {
  $("#welcome_message").mouseover(function () {
    $("#welcome_message").fadeTo(5000, 0.4);
  }); //end mouseover

  $("#welcome_message").mouseleave(function () {
    $("#welcome_message").fadeTo(5000, 1);
  }); //end mouseout

  $("#ghost").velocity(
    {
      top: "+=0px"
    },
    {
      duration: 20000,
      easing: "linear",
      loop: true,
      begin: function () {
        $(this).css("transform", "translateY(-100%)");
      },
      complete: function () {
        $(this).css("transform", "translateY(0)");
      }
    }
  ); //end ghost animation
  //got velocity to work by applying the code changes recommened at
  //https://stackoverflow.com/questions/63540331/how-to-animate-translatex-with-velocity-js-without-affecting-translatey
}); //end ready
