# Food


## Ingredients
- put within `em` tags
- can put `buy` and `prep` classes on `li` or `span`

### Don't include "of"
- `2 sticks <em>celery</em>`
- `clove <em>garlic</em>`

### Quantity before em
- cloves before em  
  `2 cloves <em>garlic</em>`
- tin before em  
  `1 tin <em>chick peas</em>`

### Prep details after em  
- `<em>lettuce</em> finely chopped`


## Photos
1. Tools > "Adjust Size..."
   - reduce size to 30%
2. File > "Export..." 
   - as jpeg, include jpg in saved filename     
```
<img src="images/" />
```


## Templates

- [Template](./template.html)

### Recipe
```
<ol>
    <li></li>
</ol>
```

### Serve with
```
<h2>Serve with</h2>
<ul>
    <li></li>
</ul>
```

### Notes
```
<h2>Notes</h2>
<ul>
    <li></li>
</ul>
```

### Original recipe
```
<li><a href="" target="_blank">Original recipe</a></li>
```

### Nested list
```
<li>
    <ul>
        <li></li>
    </ul>
</li>
```
