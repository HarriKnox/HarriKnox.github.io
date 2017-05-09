(function($)
{
   if (typeof $ === 'undefined')
   {
      document.writeln('jQuery was not found and is required to render this page');
      return;
   }
   
   var $document = $(document);
   var $window = $(window);
   
   $document.ready(function()
   {
      var $content = $('.content-container');
      
      /** Format content to group code blocks to surrounding punctuation marks **/
      var GROUPED = '<span class="grouped">$1</span>';
      var innards = $content.html();
      innards = innards.replace(                      /((?:[^\w\s>]|&.+?;)+<code>(?:[^<]|<(?!\/code>))*?<\/code>)/g,                          GROUPED)
                       .replace(                                         /(<code>(?:[^<]|<(?!\/code>))*?<\/code>(?:[^<\w\s]|&.+?;)+)/g,       GROUPED)
                       .replace(/<span class="grouped">((?:[^\w\s>]|&.+?;)+<code>(?:[^<]|<(?!\/code>))*?<\/code>)<\/span>([^<\w\s]|&.+?;)+/g, GROUPED.replace(/\$1/, '$$1$$2'));
      $content.html(innards);
   });
})(jQuery);
