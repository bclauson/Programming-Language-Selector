$(document).ready(function() {
  let python = 1
  let cSharp = 1
  let javaScript = 1
  $("#submitOne").click(function() {
    event.preventDefault();
    const programming = $("input:radio[name=programming]:checked").val();
      
    if (programming === "python") {
      python = python + 1
    } else if (programming === "cSharp") {
      cSharp = cSharp + 1
    } else if (programming === "java") {
      javaScript = javaScript + 1
    }

    $(".questionOne").toggle();
    $(".questionTwo").toggle();
  });
    
  $("#submitTwo").click(function() {
    event.preventDefault();
    const programming = $("input:radio[name=programming]:checked").val();
    
    if (programming === "java") {
      javaScript = javaScript + 1
    } else if (programming === "python") {
      python = python + 1
    } else if (programming === "cSharp") {
      cSharp = cSharp + 1
    } 

    $(".questionTwo").toggle();
    $(".questionThree").toggle();

  });

  $("#submitThree").click(function() {
    event.preventDefault();
    const programming = $("input:radio[name=programming]:checked").val();
    
    if (programming === "cSharp") {
      cSharp = cSharp + 1
    } else if (programming === "java") {
      javaScript = javaScript + 1
    } else if (programming === "python") {
      python = python + 1
    }

    $(".questionThree").toggle();
    $(".questionFour").toggle();

  });

  $("#submitFour").click(function() {
    event.preventDefault();
    const programming = $("input:radio[name=programming]:checked").val();
    
    if (programming === "cSharp") {
      cSharp = cSharp + 1
    } else if (programming === "java") {
      javaScript = javaScript + 1
    } else if (programming === "python") {
      python = python + 1
    }

    $(".questionFour").toggle();
    $(".questionFive").toggle();

   });

  $("#submitFive").click(function() {
    event.preventDefault();
    const programming = $("input:radio[name=programming]:checked").val();
    
    if (programming === "cSharp") {
      cSharp = cSharp + 1
    } else if (programming === "java") {
      javaScript = javaScript + 1
    } else if (programming === "python") {
      python = python + 1
    }

    $(".questionFive").toggle();
    $("#submitFinal").toggle();
    
  });

  $("#submitFinal").click(function() {
    event.preventDefault();
    let maximum
    if ((python > javaScript) && (python > cSharp)) {
      $(".tryPython").toggle();
    } else if ((javaScript > python) && (javaScript > cSharp)) {
      $(".tryJavaScript").toggle();
    } else if ((cSharp > javaScript) && (cSharp > python)) {
      $(".tryCSharp").toggle();
    } else {
      $(".tie").toggle();
    }


  });
  $("#restart").click(function() {

  });


});