jQuery hasParent
================

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/valeriansaliou/jquery.hasparent?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

jQuery hasParent plugin: check if the selected element has a defined parent element in the upward tree.

[![Build Status](https://semaphoreci.com/api/v1/projects/77e8da57-5b41-4598-baa0-f4da4d6c924f/375999/shields_badge.svg)](https://semaphoreci.com/valeriansaliou/jquery-hasparent)


## Usage

Simply call:

```javascript
$('.child').hasParent('.parent');
```

Returns either `true` or `false` whether the parent exists or not.