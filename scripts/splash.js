var IS_LOCAL = location.href.match(/^file:/);
var pickRandom = function(things) { return things[Math.floor(Math.random() * things.length)]; };

var getSplash = function(defaultSplash)
{
   var now = new Date();
   var month = now.getMonth();
   var date = now.getDate();
   var today = (month + 1) * 100 + date;
   
   var year = now.getFullYear();
   var isleapyear = (year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0);
   
   if (today ===  111) return 'Happy Birthday Harri!';
   
   if (today ===  101) return 'Happy New Year!';
   if (today ===  126) return '<div style="transform:rotate(180deg);-ms-transform:rotate(180deg);-webkit-transform:rotate(180deg);">Happy Australia Day!</div>';
   if (today ===  229) return 'Happy Leap Day!';
   if (today ===  314) return (Math.random() < 0.9375) ? 'Happy Pi Day!' : 'Happy Half-Tau Day!';
   if (today ===  401) return 'Fooled you!';
   if (today ===  628) return 'Happy Tau Day!';
   if (today ===  701) return 'Happy <span class="black-shadow" style="color:white;">Canada</span> Day!';
   if (today ===  704) return 'Happy <span class="black-shadow" style="color:white;">4th of</span> <span style="color:blue">July!</span>';
   if ((today ===  913 && !isleapyear) || (today == 912 && isleapyear)) return 'Happy Programmer\'s Day!';
   if (today === 1031) return pickRandom(['<span style="color:darkorange;">BOO!</span>', '<span style="color:darkorange;">Happy Halloween!</span>']);
   
   if (date === 1 && !document.cookie.match(/rabbit=true/))
   {
      document.cookie = 'rabbit=true;path=/';
      return 'Rabbit';
   }
   
   if (!document.cookie.match(/periodic=\d+/))
   {
      document.cookie = 'periodic=8;path=/';
   }
   else
   {
      var periodic = parseInt(document.cookie.match(/periodic=(\d+)/)[1])
      if (--periodic < 0)
         periodic = 7;
      document.cookie = 'periodic=' + periodic + ';path=/';
      if (periodic === 0)
         return 'Periodic';
   }
   
   var splashes = [
      'A Googol is Ten Duotrigintillion',
      'A Googolplex is 10 in base googolplex',
      'A hundred years passes<br/>one day at a time',
      'Abstract',
      'Ad-free',
      'All human beings<br />are born free and equal<br />in dignity and rights',
      'An hour\'s drive up',
      'Arbitrarily precise',
      'As seen on the Internet',
      'As mysterious as<br />the dark side of the moon',
      'As swift as a coursing river',
      'Built for Firefox',
      'Call me Harri',
      'Censorship is <span style="background-color:red;">dangerous</span> safe',
      'Check out the navbar',
      'Check out these splashes',
      'Client-side',
      'Coder by day,<br />Coder by night',
      'Coder by Nature',
      'Copyleft',
      'Conceptual',
      'Conventional',
      'Construction zone',
      'Contains long-winded essays',
      'Data',
      'Distraction',
      'Doing its best',
      'Don\'t deny it,<br />you were reading this',
      'Eco-friendly',
      'Executes an infinite loop<br/>in half the time',
      'Error 404: Splash not found',
      'Follows a normal distribution',
      'Fork me on <a href="https://github.com/HarriKnox">GitHub</a>',
      'Free',
      'Free, Libre, and Open-Source',
      'GNU',
      'Go <span style="color:#115641"><a href="http://gopoly.com">Mustangs</a></span>!',
      'Goal-oriented',
      'Gotta catch \'em all',
      'Gratis',
      'Hacky-dory all the way',
      'Has the force of a great typhoon',
      'Has the strength of a raging fire',
      'High-level programming',
      'Hufflepuff',
      'I am the one who Knox',
      /*'I know you\'re on the<br />' + pageTitle + ' page',*/
      'I\'m not a robot',
      'If not paradoxical,<br/>then paradoxical',
      'Insert clever statement here',
      'Infinite loop complete',
      'Initializing...',
      'Is this your card: ' + pickRandom(['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']) + pickRandom(['&spades;', '&clubs;', '&hearts;', '&diams;']) + '?',
      'It\'s pronounced "gif", not "gif"',
      'Libre y Gratis',
      'Loading...',
      'Lorem ipsum dolor sit amet',
      'Made by Harrison Knox',
      'Made from scratch',
      'Made out of star dust',
      'Made you look',
      'Made with love',
      'MacFarlane',
      'Multilingual',
      'Net neutral',
      'Never gonna give you up',
      'No longer broken',
      'Nosirrah',
      'Now available in English',
      'Now includes<br/>complementary splashes',
      'Object-oriented',
      'OPEN',
      'Open 24/7',
      'Open source',
      'Overly complicated',
      'Paradoxical',
      'Parallel processing',
      'Performing big calculations...',
      'Permanently temporary',
      'Please wait...',
      'Populated with words',
      'Powered by electrons',
      'Procedural',
      'Punny',
      'Recursion is cool',
      'Recycled star dust',
      'Remember to <a target="_blank" href="https://www.gnu.org/philosophy/floss-and-foss.en.html">FLOSS</a>',
      'References itself referencing itself',
      'Sarcastic',
      'Se habla Espa&ntilde;ol',
      'Self-referential',
      'Something\'s a SKU',
      'Specific',
      'Splash!',
      'Tail optimized',
      'Tail recursive',
      'Temporarily permanent',
      'Think with your closures',
      'Think with your lambdas',
      'Thinking of clever splashes',
      'This I\'ll defend',
      'This splash is<br />intentionally<br />left blank',
      'Today is ' + ['January', 'February', 'March', 'April' , 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][month] + " " + date,
      'Top secret',
      'Under construction',
      'Unique, like everything else',
      'Updates available',
      'Uses big numbers',
      'Uses dial-up',
      'Uses MathJax',
      'Uses recycled electrons',
      'Somewhat vague, in a way',
      'Virtual',
      'Web-scale',
      'Wet purple',
      'WIP<br />harriknox.github.io<br />June 15, 2015 - present',
      'Work in progress',
      'You look nice today',
      
      '9&frac34;',
      '&lambda;',
      '&pi; &lt; &tau;',
      '<span style="font-family:monospace">A wild HARRI appeared!</span>',
      (IS_LOCAL ? 'Doesn\'t require<br/>' : 'Requires ') + 'Internet access',
      (Math.random() < 0.5 ? 'Irr' : 'R') + 'egularly updated',
      '<span style="color:coral;">Coral</span> <span style="color:crimson;">Crimson</span> <span style="color:darkorange;">DarkOrange</span><br /><span style="color:orange;">Orange</span> <span style="color:orangered;">OrangeRed</span> <span style="color:red;">Red</span>',
      (function(color) { return 'Ask about the<br />color <span style="color:' + color + ';">' + color + '</span>'; })(pickRandom(['Green', 'Goldenrod', 'Blue', 'Purple', 'Brown', 'Orange', 'Black',])),
   ];
   
   splashes.push(defaultSplash);
   
   if (today >= 1200)
   {
      var messages = ['Happy &lt;insert holiday here&gt;!', 'Happy Holidays!', 'Happy Nondenominational<br>Winter Themed Month']
      if (!document.cookie.match(/december=true/))
      {
         document.cookie = 'december=true;path=/';
         return pickRandom(messages);
      }
      messages.forEach(function(message) { splashes.push(message); });
   }
   
   var weekday = now.getDay();
   if (weekday === 1) splashes.push('Enjoy your weekend!'); /* It's Monday */
   if (weekday === 3) splashes.push('It\'s Tuesday!'); /* It's Wednesday */
   if (weekday === 4) splashes.push('Happy Friday!'); /* It's Thursday */
   
   var hour = now.getHours();
   if (hour >= 5 && hour <= 10) splashes.push('Good Morning');
   else if (hour >= 15 && hour <= 19) splashes.push('Good Afternoon');
   else if (hour >= 20 && hour <= 23) splashes.push('Good Evening');
   
   return pickRandom(splashes);
};

var splash = document.getElementsByClassName("splash")[0];
splash.innerHTML = getSplash(splash.innerHTML);
