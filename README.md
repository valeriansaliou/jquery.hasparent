jQuery hasParent
================

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/valeriansaliou/jquery.hasparent?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

jQuery hasParent plugin: check if the selected element has a defined parent element in the upward tree.

[![build status](https://ci.hakuma.holdings/projects/61/status.png?ref=master)](https://ci.hakuma.holdings/projects/61?ref=master)


## Usage

Simply call:

```javascript
$('.child').hasParent('.parent');
```

Returns either `true` or `false` whether the parent exists or not.