# Designo
Designo is a multi-page Digital Marketing Agency website where I had the opportunity of putting into practice skills such as CSS layout, compile code through SASS Preprocessor, build user interactions with vanilla JavaScript.

# Analysing Design
Before start typing any line of code, I analyze the design page by page to find layout patterns that allow me to preplan how I'm going to organize and build components, which favors reusability and development time.

# Mobile-first
Since it is a responsive website, I approached it as mobile-first; this philosophy helps to simplify code because the main concerns at the beginning of the developing process are mobile content, which generally has simplified layouts.

## Resolutions for this project:

```css
/* Tablet */
@media only screen and (min-width: 768px)

/* Desktop */
@media only screen and (min-width: 1440px)
```

# HTML
Using the right HTML tag, we can take advantage of the semantic tagging benefits and enhance accessibility and support digital marketing strategy.

From the development perspective, it favors maintenance because we ensure the separation of content from presentation and create clearer and standardize code for ourselves and other developers.

For this project tags such as HEADER, NAV, SECTION, and FOOTER helped to describe semantically the most important areas of each page.

```html
<!-- Header -->
<header class="content__wrap--full header">
  <!-- Navigation -->
  <nav class="navigation">
    <a href="#">OUR COMPANY</a>
    <a href="#">LOCATIONS</a>
    <a href="#">CONTACT</a>
  </nav>
</header>

<!-- Section (sample) -->
<section class="content__wrap--full">
  <div class="content location">
    <div class="location__info">
      <div class="info">
        <h4>Canada</h4>
        <div class="info__address__contact">
          <div class="address">
            <h5>Designo Central Office</h5>
            <p>3886 Wellington Street<br /> Toronto, Ontario M9C 3J5</p>
          </div>
          <div class="contact">
            <h5>Contact</h5>
            <p>P: +1 253-863-8967</p>
            <p>M : contact@designo.co</p>
          </div>
        </div>
      </div>
    </div>
  <div id="canada" class="location__map"></div>
  </div>
</section>

<!-- Footer (sample) -->
<footer class="content__wrap footer">
  <div class="content footer__content">
    <div class="footer__brand">
            ...
    </div>
    <div class="footer__contact">
      ...
      <div class="footer__social">
        ...
      </div>
    </div>
  </div>
</footer>
```
# CSS
I approach the naming convention with the BEM methodology; it makes sense when you tackle a layout as a set of components; I like this methodology because it helps you control the dependencies between HTML elements, avoids side effects when updating CSS, it has flexible rules and is still readable when there are many nested elements and is easy and fast to write with SASS.

## Sass Architecture
The more efficient way I find to organize projects, even the small ones, is by using something close to the 7-1 Sass architecture; it improves efficiency because of the modular workflow, reinforcing the idea of working on components than in whole pages.

```
sass/
|
|– base/
|   |– _base.scss
|   |– _reset.scss
|   |– _typography.scss   
|
|– layout/
|   |– _layout.scss        
|
|– components/
|   |– _about_card.scss      
|   |– _buttons.scss     
|   |– _contact_card.scss       
|   |– _content.scss
|   |– _cover_page.scss
|   |– _cta_bottom.scss
|   |– _footer.scss
|   |– _form_contact.scss
|   |– _grid_content.scss
|   |– _header.scss
|   |– _hero_banner.scss
|   |– _icons_grid.scss
|   |– _location_card.scss
|   |– _navigation.scss
|   |– _overlay_mobile_.scss
|   |– _service_banner.scss
|
|– utils/
|   |– _variables.scss    
|   |– _mixins.scss 
|
 – main.scss              
 ```
 

# JavaScript
I used vanilla JavaScript to code the micro-interactions for the menu on mobile devices and form validation, I also used the Leaflet.js library to display the maps on the Locations page.

## Menu on mobile
The functionality of the menu for mobile devices relies on 3 events:

One for responding to displaying and hiding the menu and changing the button style depending on the menu state (opened-closed).

```Javascript
menu_btn.addEventListener('click', function() {
	displayMenu();
	bgMobileMenuBtn();
});
```

I'm adding two more events to respond to closing the menu, one of them if the user clicks on the overlay layer and one more If the user scrolls down and the menu is still open, both are natural and standard interactions that I wanted to comply with.

```javascript
overlay.addEventListener('click', function() {
	displayMenu();
	bgMobileMenuBtn();
});

window.addEventListener('scroll', function() {
	if (menu_btn.classList.contains('mobile-btn-close')) {
		displayMenu();
		bgMobileMenuBtn();
	}
});
```

## Leaflet library
Leaflet library was very useful and easy to use to display the maps for each location by country on the Locations page.

I created an object to store name, longitude, and latitude by country.
```javascript
const locations = [
	{
		country: 'Canada',
		long: 43.64419484706138,
		lat: -79.3945608610694
	},
	{
		country: 'Australia',
		long: -30.329148449296643,
		lat: 149.78822916951194
	},
	{
		country: 'UK',
		long: 53.71041818128988,
		lat: -1.3417707595071173
	}
];
```

A function called `drawMaps` get as parameters the data from the `locations` object and internally it draws a map based on the longitude and latitude coordinates. It also makes use of the icon object from the library to customize the icon that indicates the exact location.
```javascript
function drawMaps(country, long, lat) {
	...
}
```

Finally, I used a `forEach` loop to iterate over `locations` object and on each iteration I draw a map on the specific HTML element. 
```javascript
locations.forEach((location) => {
	drawMaps(location.country.toLowerCase(), location.long, location.lat);
});
```
