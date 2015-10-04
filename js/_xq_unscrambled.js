jQuery(document).ready(function($) {
    $('#term').terminal(function(command, term) {
        if (command == '4 8 15 16 23 42') {
            term.echo("I knew you'd try that. ;-)");
        }
        else if (command == 'help') {
            term.echo("Type 'contact' to get in touch.\nYou'll have to figure out the rest.");
        }
        else if (command == 'contact') {
            term.echo("Mail:         jl@xq0.net\nTwitter:      https://twitter.com/jlxq0\nGoogle+:      https://plus.google.com/117601863189824202666\nSpeakerdeck:  https://speakerdeck.com/jlxq0\nGithub:       https://github.com/jlxq0");
        }
        else if (command == 'berlin') {
            term.echo("http://xq0.net/berlin");
        }
        else {
            term.echo("Unknown command (try 'help').");
        }
    }, { prompt: '>: ', name: 'test', greetings: null });
});
