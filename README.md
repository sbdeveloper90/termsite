# TERMSITE - terminal styled website
Simple website terminal styled, written in pure HTML/CSS/Javascript.

## Inspired by
- [fkcodes.com](https://fkcodes.com/)
- [term.m4tt72.com](https://term.m4tt72.com) / [repo](https://github.com/m4tt72/terminal)
- [craigfeldman.com](https://craigfeldman.com/) / [repo](https://github.com/craig-feldman/personal-website-react)


## Useful Links
- [ASCII Fonts - Rounded](https://patorjk.com/software/taag/#p=display&f=Rounded&t=Type%20Something%20) (Slant - Larry 3D)
- [Icons](https://www.nerdfonts.com/cheat-sheet)


<hr>


### COLOR PALETTE
- ![#282a37](https://via.placeholder.com/15/282a37/000000?text=+) `#282a37 - background`
- ![#6087ae](https://via.placeholder.com/15/6087ae/000000?text=+) `#6087ae - system logo`
- ![#cca8fb](https://via.placeholder.com/15/cca8fb/000000?text=+) `#cca8fb - folder path`
- ![#5cf58d](https://via.placeholder.com/15/5cf58d/000000?text=+) `#5cf58d - github info`
- ![#ff91d0](https://via.placeholder.com/15/ff91d0/000000?text=+) `#ff91d0 - system`
- ![#6187ac](https://via.placeholder.com/15/6187ac/000000?text=+) `#6187ac - timestamp`
- ![#cb266d](https://via.placeholder.com/15/cb266d/000000?text=+) `#cb266d - cursor`
- ![#d3d7d0](https://via.placeholder.com/15/d3d7d0/000000?text=+) `#d3d7d0 - text regular`
- ![#ffffff](https://via.placeholder.com/15/ffffff/000000?text=+) `#ffffff - text bold`
- ![#0051ad](https://via.placeholder.com/15/0051ad/000000?text=+) `#0051ad - text selection`


### POWERLEVEL10K RAINBOW STYLE
```html
<div id="pl10k">
    <div id="pl10k_logo"><i class="nf nf-fa-linux"></i></div>
    <div id="pl10k_path"><i class="nf nf-fa-folder"></i>&nbsp;netlify/public_html</div>
    <div id="pl10k_git"><i class="nf nf-dev-github_alt"></i>&nbsp;<i class="nf nf-dev-git_branch"></i>&nbsp;main</div>
</div>
```
```css
/* powerlevel10k rainbow style */
#pl10k {
  display: flex;
  margin-right: 20px;
}
#pl10k #pl10k_logo,
#pl10k #pl10k_path,
#pl10k #pl10k_git {
  display: flex;
  align-items: center;
  justify-content: center;
  height:22px;
  position:relative;
  text-align:center;
  line-height:1.5em;
  font-size: 13px;
}
#pl10k #pl10k_logo {
  background-color:var(--color-system-logo);
  color:var(--color-text-bold);
  width:25px;
}
#pl10k #pl10k_path {
  background-color:var(--color-folder-path);
  color:var(--color-background);
  width:220px;
}
#pl10k #pl10k_git {
  background-color:var(--color-github-info);
  color:var(--color-background);
  width:110px;
}
#pl10k #pl10k_logo::after,
#pl10k #pl10k_path::after,
#pl10k #pl10k_git::after {
  content:"";
  position:absolute;
  height:0;
  width:0;
  left:100%;
  top:0;
  border:11px solid transparent;
}
#pl10k #pl10k_logo::after {
  border-left: 11px solid var(--color-system-logo);
  z-index: 999;
}
#pl10k #pl10k_path::after {
  border-left: 11px solid var(--color-folder-path);
  z-index: 998;
}
#pl10k #pl10k_git::after {
  border-left: 11px solid var(--color-github-info);
  z-index: 997;
}
/* end powerlevel10k rainbow style */
```