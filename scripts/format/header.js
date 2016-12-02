(function($)
{
    var IS_LOCAL = location.href.match(/^file:/);
    var pickRandom = function(things) { return things[Math.floor(Math.random() * things.length)]; };
    
    var getSplash = function(pageTitle)
    {
        var now = new Date();
        var month = ['January', 'February', 'March', 'April' , 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][now.getMonth()];
        var date = now.getDate();
        
        var splashes = [
            'Fuck you 2016',
            '"Land of the Free"',
            '"Democracy"',
            //'Three-letter agencies suck',
            //'The FBI sucks',
            //'The CIA sucks',
            //'The NSA sucks',
            'Rule 41 sucks',
            'America sucks',
            'CNN and FOX cannot be trusted',
            'Censorship is <span style="background-color:red;">dangerous</span> safe',
            //'RIP America',
            //'It\'s like Orwell and\nHuxley\'s lovechild',
            //'1984',
            //'Brave New World',
            'Big Brother is watching',
            'Good-bye privacy,\nwish I got to know you',
            'No such thing as privacy',
            'You\'re not allowed privacy',
            'The country is run by\nshit-slinging\nbaboons in suits',
            'Rule 41 means the police/FBI/etc\ncan access your computer,\nremotely,\nlegally',
            'Start using <a href="https://www.torproject.org/projects/torbrowser.html.en">Tor</a>',
            '<a href="https://www.torproject.org/projects/torbrowser.html.en">Tor</a> is not illegal',
            //'Moving to ' + pickRandom(['Nigeria', 'Yemen', 'Myanmar (Burma)', 'Iraq', 'Afghanistan', 'Somalia', 'Pakistan', 'The Congo', 'Sudan', 'Syria']) + '\ndoesn\'t seem so bad now',
            //'Today is ' + month + ' ' + date + ' 1984',
            
        ];
        
        return pickRandom(splashes);
    }
    
    /*
    var getSplash = function(pageTitle)
    {//return 'Happy <span class="black-shadow" style="color:white;">4th of</span> <span style="color:blue">July!</span>'
        var now = new Date();
        var month = now.getMonth();
        var date = now.getDate();
        var today = (month + 1) * 100 + date;
        
        var year = now.getFullYear();
        var isleapyear = (year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0);
        
        if (today ===  111) return 'Happy Birthday Harri!';
        if (today === 1008) return 'Happy Birthday Courtney!';
        if (today === 1016) return 'Happy Anniversary Courtney!';
        
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
            'A wolf, when bitten, turns bitter',
            'Abstract',
            'Ad-free',
            'All human beings<br />are born free and equal<br />in dignity and rights',
            'An hour\'s drive up',
            'Arbitrarily precise',
            'As seen on the Internet',
            'As mysterious as<br />the dark side of the moon',
            'As swift as a coursing river',
            'At a gain for numbers',
            'At a loss for words',
            //'Built for Chrome',
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
            'Everything is arbitrary',
            'Follows a normal distribution',
            'Fork me on <a href="https://github.com/HarriKnox">GitHub</a>',
            'Free',
            'Free and Open-Source',
            'Friendship',
            'GNU',
            'Go <span style="color:#115641">Mustangs</span>!',
            'Goal-oriented',
            'Gotta catch \'em all',
            'Gratis',
            'Hacky-dory all the way',
            'Has the force of a great typhoon',
            'Has the strength of a raging fire',
            'High-level programming',
            'Hufflepuff',
            'I am the one who Knox',
            'I know you\'re on the<br />' + pageTitle + ' page',
            'If not paradoxical,<br/>then paradoxical',
            'Indubitably',
            'Insert clever statement here',
            'Infinite loop complete',
            'Initializing...',
            'Initiating awesomeness',
            'Is this your card: ' + pickRandom(['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']) + pickRandom(['&spades;', '&clubs;', '&hearts;', '&diams;']),
            'It\'s pronounced "gif", not "gif"',
            'Learning <a href="http://clojure.org/">Clojure</a>',
            'Libre y Gratis',
            'Lithium and Iron are<br/>necessary for LiFe',
            'Loading...',
            'Lorem ipsum dolor sit amet',
            'Made by Harrison Knox',
            'Made from scratch',
            'Made in California',
            'Made out of star dust',
            'Made you look',
            'Made with love',
            'MacFarlane',
            'Multilingual',
            'Never gonna give you up',
            'No longer broken',
            'Now available in English',
            'Now includes<br/>complementary splashes',
            'Now mobile friendly',
            'Object-oriented',
            'OPEN',
            'Open 24/7',
            'Open source',
            'Overly complicated',
            'Paradoxical',
            'Parallel processing',
            'Performing big calculations',
            'Permanently temporary',
            'Please wait...',
            'Populated with words',
            'Powered by electrons',
            'Powered by jQuery',
            'Procedural',
            'Punny',
            'Recycled star dust',
            'Remember to FLOSS',
            'References itself',
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
            'This splash is\nintentionally\nleft blank',
            'Today is ' + ['January', 'February', 'March', 'April' , 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][month] + " " + date,
            'Top secret',
            'Under construction',
            'Unique, like everything else',
            'Updates available',
            'Uses big numbers',
            'Uses dial-up',
            'Uses MathJax',
            'Uses recycled electrons',
            'Somewhat Vague, in a way',
            'Virtual',
            'Warning: contains opinions',
            'When Harri met Courtney',
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
        
        if (date === 1)
        {
            if (!document.cookie.match(/rabbit=true/))
            {
                document.cookie = 'rabbit=true;path=/';
                return 'Rabbit';
            }
            splashes.push('Rabbit');
        }
        
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
        if (weekday === 3) splashes.push('It\'s Tuesday!');
        if (weekday === 1) splashes.push('Enjoy your weekend!');
        
        var hour = now.getHours();
        if (hour >= 5 && hour <= 10) splashes.push('Good Morning');
        else if (hour >= 15 && hour <= 19) splashes.push('Good Afternoon');
        else if (hour >= 20 && hour <= 23) splashes.push('Good Evening');
        
        return pickRandom(splashes);
    };*/
    
    var setSplashVisibility = function()
    {
        var $splash = $('.splash');
        if ($('.header-container').width() <= 480)
            $splash.hide();
        else
            $splash.show();
    };
    
    $(document).ready(function()
    {
        /** Get page title **/
        var pageTitle = $('.page-title').text();
        
        /** Write page title in <head> and as a header **/
        $('head').append('<title>Coder by Nature: ' + pageTitle + '</title>');
        
        var title = '<h1>I\'m a Programmer</h1><h3>not by trade but by nature</h3>';
        if (pageTitle !== 'Home') title = '<a href="' + (IS_LOCAL ? 'index.html' : '/') + '" class="link-home" title="Home">' + title + '</a>';
        $('body').prepend('<div class="header-container"><div class="splash">' + getSplash(pageTitle) + '</div><div class="title">' + title + '</div></div>');
        
        /** Position the splash in middle (vertically) of header **/
        var $splash = $('.splash');
        var headerHeight = $('.header-container').height();
        var splashHeight = $splash.height();
        var top = (headerHeight - splashHeight) / 2;
        $splash.css('top', top);
        
        setSplashVisibility()
        
        $(window).resize(setSplashVisibility);
    });
})(jQuery);
