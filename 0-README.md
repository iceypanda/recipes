# Food

## Notes
- `room temperature` not `room temp`
- preheat directive at top of recipe, eg [Beef cobbler](beef-cobbler.html)</a>

## Ingredients
- put ingredients within `em` tags
- can put `buy` class on `li` or `span`
- space before tsp / tbsp  
  `&frac14; tsp`
- include 1 as quantity  
  `1 tin <em>chick peas</em>`

### No "of"
- `2 sticks <em>celery</em>`
- `1 clove <em>garlic</em>`
- exception for lemon and lime  
  `zest of 1 <em>lime</em>`

### Quantity before em
- cloves before em  
  `2 cloves <em>garlic</em>`
- tin before em  
  `1 tin <em>chick peas</em>`

### Prep after em  
- `<em>lettuce</em> finely chopped`

---

## Photos

### Importing photos
1. Run `convert-recipe-photos.sh`
2. Rename photos
3. Run `move-recipe-photos.sh`
```
<img src="images/" />
```
