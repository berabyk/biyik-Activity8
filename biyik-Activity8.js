$(document).ready(function() {
    $( "#birthday" ).datepicker();

    var languages = [
        "ActionScript", "AppleScript", "Asp", "JavaScript", "Lisp", "Perl", "PHP", "Python", "HTML", "CSS", "TypeScript" ];

    $( "#languages" ).autocomplete({
            source: languages });
  
});