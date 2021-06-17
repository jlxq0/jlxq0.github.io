jQuery(document).ready(function($) {
    $('#term').terminal(function(command, term) {
        if (command == '4 8 15 16 23 42') {
            term.echo("I knew you'd try that. ;-)");
        }
        else if (command == 'help') {
            term.echo("Type 'contact' to get in touch.\nYou'll have to figure out the rest.");
        }
        else if (command == 'contact') {
            term.echo("Mail:         jl@xq0.net\nTwitter:      https://twitter.com/jlxq0\nInstagram:    https://instagram.com/jlxq0\n500px:        https://500px.com/jlxq0\nFacebook:      https://fb.com/jlxq0\nSpeakerdeck:  https://speakerdeck.com/jlxq0\nGithub:       https://github.com/jlxq0");
        }
        else {
            term.echo("Unknown command (try 'help').");
        }
    }, { prompt: '>: ', name: 'test', greetings: null });
});
