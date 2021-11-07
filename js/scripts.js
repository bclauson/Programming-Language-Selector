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
      } else if (programming === "python") {
        python = python + 1
      }
      console.log(python)
      console.log(javaScript)
      console.log(cSharp)
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
        } else if (programming === "java") {
          javaScript = javaScript + 1
        }
        console.log(python)
        console.log(javaScript)
        console.log(cSharp)
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
          } else if (programming === "cSharp") {
            cSharp = cSharp + 1
          }
          console.log(python)
          console.log(javaScript)
          console.log(cSharp)
          $(".questionThree").toggle();
          
        });
  });