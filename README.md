jQuery hasParent
================

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/valeriansaliou/jquery.hasparent?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

jQuery hasParent plugin: check if the selected element has a defined parent element in the upward tree.

[![Build Status](https://semaphoreci.com/api/v1/projects/10c29b4e-e30d-452f-9dc1-d73f88a8e56a/376001/shields_badge.svg)](https://semaphoreci.com/valeriansaliou/jquery-hasparent--3)


## Usage

Simply call:

```javascript
$('.child').hasParent('.parent');
```

Returns either `true` or `false` whether the parent exists or not.