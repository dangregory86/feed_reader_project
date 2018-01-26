/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function, since some of these tests may require DOM elements. We want to ensure they don't run until the DOM is ready. */
$(function() {
  /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
  describe('RSS Feeds', function() {
    /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
    it('have URL', function() {
      for (var x = 0; x < 4; x++) {
        expect(allFeeds[x].url).toBeDefined();
      }
    });

    /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
    it('have name', function() {
      for (var x = 0; x < 4; x++) {
        expect(allFeeds[x].name).toBeDefined();
      }
    });

  });

  /* TODO: Write a new test suite named "The menu" */
  describe("The menu", function() {

    /* TODO: Write a test that ensures the menu element is
       * hidden by default. You'll have to analyze the HTML and
       * the CSS to determine how we're performing the
       * hiding/showing of the menu element.
       */
    it("menu hidden", function() {
      expect($('body').attr('class')).toBe('menu-hidden');
    });
    /* TODO: Write a test that ensures the menu changes
        * visibility when the menu icon is clicked. This test
        * should have two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */
    it("menu changes", function() {
      //first trigger the button to show the menu
      $('.menu-icon-link').trigger('click');
      //check that the menu-hidden class has been removed
      expect($('body').attr('class')).not.toBe('menu-hidden');
      //trigger the button again
      $('.menu-icon-link').trigger('click');
      //check the menu has hidden again.
      expect($('body').attr('class')).toBe('menu-hidden');
    });

  });

  /* TODO: Write a new test suite named "Initial Entries" */

  /* TODO: Write a test that ensures when the loadFeed
           * function is called and completes its work, there is at least
           * a single .entry element within the .feed container.
           * Remember, loadFeed() is asynchronous so this test will require
           * the use of Jasmine's beforeEach and asynchronous done() function.
           */
  describe("Initial Entries", function() {
    //first the feed needs to be loaded
    beforeEach(function(done) {
      loadFeed(0, done);
    });

    //now check that the h2 element in the first entry isn't === undefined.
    it('has loaded content', function(done) {
      expect($('.entry h2')[0]).toBeDefined();
      done();
    });
  });

  /* TODO: Write a new test suite named "New Feed Selection" */

  /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

  describe("New Feed Selection", function() {
    let original = $('.header-title').html();
    //first load the css tricks feed.
    beforeEach(function(done) {
      loadFeed(1, done);
    });
    //ensure the .header-title changes on the screen
    it('has changed the screen content', function(done) {
      expect($('.header-title').html()).not.toBe(original);
      done();
    });

  });
}());
