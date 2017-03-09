(function()
{
   var file = location.href.match(/^file/) !== null;
   
   document.write('<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">');
   
   [
      (file ? 'scripts/' : '//ajax.googleapis.com/ajax/libs/jquery/1.11.3/') + 'jquery.min.js',
      'scripts/format/navbar.js',
      'scripts/format/header.js',
      'scripts/format/content.js',
   ].forEach(function(script)
   {
      document.write('<script src="' + script + '"></script>');
   });
   
   [
      'stylesheet.css',
      'navbar.css',
      'header.css',
      'content.css',
   ].forEach(function(sheet)
   {
      document.write('<link type="text/css" rel="stylesheet" href="stylesheets/' + sheet + '">');
   });
})();
