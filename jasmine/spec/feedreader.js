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

    /* A function to check that each feed in all feeds has a url defined
         * and it isnt empty.
         */
    it('have URL', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.url).toBeDefined();
        expect(feed.url).not.toBe('');
      });
    });

    /* A function to check that each feed in all feeds has a name defined
         * and it isnt empty.
         */
    it('have name', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.name).toBeDefined();
        expect(feed.name).not.toBe('');
      });
    });

  });

  /* A suite to test the function of the menu bar */
  describe("The menu", function() {

    /* A test to ensure the menu has the class menu-hidden to ensure it isn't shown
       */
    it("menu hidden", function() {
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
    /* A test to ensure that when the menu button is clicked the menue bar
        * either apears or disapears from the screen.
        */
    it("menu changes", function() {
      //first trigger the button to show the menu
      $('.menu-icon-link').trigger('click');
      //check that the menu-hidden class has been removed
      expect($('body').hasClass('menu-hidden')).toBe(false);
      //trigger the button again
      $('.menu-icon-link').trigger('click');
      //check the menu has hidden again.
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

  });

  /* A test suite to ensure the feed loads onto the screen
  */
  describe("Initial Entries", function() {
    //first the feed needs to be loaded
    beforeEach(function(done) {
      loadFeed(0, done);
    });

    //now check that the h2 element in the first entry isn't === undefined.
    it('has loaded content', function(done) {
      expect($('.feed').find('.entry')).toBeDefined();
      done();
    });
  });

  /* A test suite to ensure the page displays the new information depending on the
         * feed loaded.
         */

  describe("New Feed Selection", function() {
    let original = $('.feed').html();

    //load feed 0, set original to the contents of feed zero then load feed 1.
    beforeEach(function(done) {
      loadFeed(0);
      original = $('.feed').html();
      loadFeed(1, done);
    });

    //ensure the .feed changes on the screen
    it('has changed the screen content 1', function(done) {
      expect($('.feed').html()).not.toBe(original);
      done();
    });


  });
}());
