
         var password = "tutorial";
         (function passcodeprotect() {
            var passcode = prompt("Enter PassCode");
            while (passcode !== password) {
               alert("Incorrect PassCode");
               return passcodeprotect();
            }
         }());
         window.open("https://enconttra.github.io/contestado/index_map.html");
      
