# Food

## Notes
- `room temperature` not `room temp`
- `remove heat` not `remove from heat`
- preheat directive at top of recipe, eg [Beef cobbler](beef-cobbler.html)</a>

---

## Ingredients
- Ingredients within `em` tags
- `buy` class on `li` or `span`
- Include 1 as quantity for tins  
  `1 tin <em>chickpeas</em>`

### Ingredients: case
- Start with lowercase letter  
  `<li>pinch <em>salt</em></li>`
- Don't capitalise parmesan, cheddar, gruyère

---

## Units

### Units: once after range
- `1-2cm`
- `20x30cm`

### Units: no space
- `2"`
- `30cm`
- `600g`

### Units: L for litre
- l is consistent with ml but too similar to 1
- L easier to read

### Space for spoon measurements
- `1 tsp`
- `&frac12; tbsp`

### No "of"
- `2 sticks <em>celery</em>`
- `1 clove <em>garlic</em>`
- `1 tin <em>chickpeas</em>`
- exception for lemon and lime  
  `zest of 1 <em>lime</em>`

### Quantity before em
- cloves before em  
  `2 cloves <em>garlic</em>`
- tin before em  
  `1 tin <em>chickpeas</em>`

### Prep after em  
- `<em>lettuce</em> finely chopped`

### Weight qualifier
- `600g (after peeling) <em>potatoes</em>`

### Temperature then time
- because set temperature first
- `at 180&deg;C for 25 mins`

---

## Photos

### Importing photos
1. Run `convert-recipe-photos.sh`
2. Rename photos
3. Run `move-recipe-photos.sh`
```html
<img src="images/" />
```
