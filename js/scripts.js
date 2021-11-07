$(document).ready(function() {
  $(".radio").click(function() {
      const animal = $("input:radio[name=animal]:checked").val();
      let result 
      if (animal === "blueWhale") {
        $(".blueWhale").toggle();
      } else if (animal === "Clownfish") {
        $(".clownfish").toggle();
      } else if (animal === "Dolphin") {
        $(".dolphin").toggle();
      }
    });
  });