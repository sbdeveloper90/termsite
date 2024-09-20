var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer"); 
var textarea = document.getElementById("texter"); 
var terminal = document.getElementById("terminal");

var git = 0;
var commands = [];

var pl10k_rainbow = '<div id="pl10k"><div id="pl10k_logo"><i class="nf nf-fa-linux"></i></div><div id="pl10k_path"><i class="nf nf-fa-folder"></i>&nbsp;netlify/public_html</div><div id="pl10k_git"><i class="nf nf-dev-github_alt"></i>&nbsp;<i class="nf nf-dev-git_branch"></i>&nbsp;main</div></div>';

setTimeout(function() {
  loopLines(banner, "", 80);
  textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);

//init
textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
  if (e.keyCode == 181) {
    document.location.reload(true);
  }
  if (e.keyCode == 13) {    /* Enter */
    commands.push(command.innerHTML);
    git = commands.length;
    addLine("guest@sbdeveloper.cloud:~$ " + command.innerHTML, "no-animation", 0);
    commander(command.innerHTML.toLowerCase());
    command.innerHTML = "";
    textarea.value = "";
  }
  if (e.keyCode == 38 && git != 0) {    /* Arrow Up */
    git -= 1;
    textarea.value = commands[git];
    command.innerHTML = textarea.value;
  }
  if (e.keyCode == 40 && git != commands.length) {    /* Arrow Down */
    git += 1;
    if (commands[git] === undefined) {
      textarea.value = "";
    } else {
      textarea.value = commands[git];
    }
    command.innerHTML = textarea.value;
  }
}

function commander(cmd) {
  switch (cmd.toLowerCase()) {
    case "banner":
      loopLines(banner, "", 80);
      break;
    case "clear":
      setTimeout(function() {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    case "date":
      const now = new Date();
      const options = { timeZoneName: 'short' }; // Include timezone name for clarity
      const formattedDatetime = now.toLocaleString(navigator.language, options);
      addLine(formattedDatetime + "<br><br>", "color1", 80);
      break;
    case "email":
      addLine('Opening mailto:<a href="mailto:info@sbdeveloper.cloud">info@sbdeveloper.cloud</a>...' + "<br><br>", "color1", 80);
      newTab(email);
      break;
    case "help":
      loopLines(help, "color2 margin", 80);
      break;
    case "history":
      addLine("<br>", "", 0);
      loopLines(commands, "color2", 80);
      addLine("<br>", "command", 80 * commands.length + 50);
      break;
    case "projects":
      loopLines(projects, "color1 margin", 80);
      break;
    case "repos":
      loopLines(repos, "color1 margin", 80);
      break;
    case "skills":
      loopLines(skills, "color1 margin", 80);
      break;
    case "social":
      loopLines(social, "color2 margin", 80);
      break;
    case "weather":
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://wttr.in', true);
      xhr.onload = function() {
        if (xhr.status === 200) {
          const response = xhr.responseText;
          addLine(response+ "<br><br>", "color1", 0);
        } else {
          addLine("<span class=\"inherit\">Request failed with status: <span class=\"command\">" + xhr.status +"</span>.</span>", "error", 100);
        }
      };
      xhr.send();
      break;
    case "whoami":
      loopLines(whoami, "color1 margin", 80);
      break;
    case "whois":
      loopLines(whois, "color1 margin", 80);
      break;
    // socials
    case "facebook":
      addLine("Opening Facebook..." + "<br><br>", "color2", 0);
      newTab(facebook);
      break;
    case "github":
      addLine("Opening GitHub..." + "<br><br>", "color2", 0);
      newTab(github);
      break;
    case "instagram":
      addLine("Opening Instagram..." + "<br><br>", "color2", 0);
      newTab(instagram);
      break;
    case "linkedin":
      addLine("Opening LinkedIn..." + "<br><br>", "color2", 0);
      newTab(linkedin);
      break;
    default:
      addLine("<span class=\"inherit\">Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
      break;
  }
}

function newTab(link) {
  setTimeout(function() {
    window.open(link, "_blank");
  }, 500);
}

function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function() {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function(item, index) {
    addLine(item, style, index * time);
  });
}