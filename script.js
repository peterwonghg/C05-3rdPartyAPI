
const localeSettings = {};
dayjs.locale(localeSettings);

// Create the newTime function that will update every second displaying the date, time and time zone (GMT) of the local machine
function newTime() {
  // Declaring that the dateElement is equivalent to the id identified at the HTML
  const dateElement = $('#date');
  // Declaring the currentDate as the new date at that point in time
  let currentDate = new Date();
  // Using jQuery text() to return the text content of currentDate
  dateElement.text(currentDate);  
}


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  // #Running the jQuery dayjs() to extract the hour value and displaying the date on the header
  $(function () {
    // #declare the present hour from dayjs() in 'HH' format (24 hour format)
    const nowHour = dayjs().format('HH');
    
// Add code to apply the past, present, or future class to each time 
// block by comparing the id to the current hour.
  
// HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes?

// How can Day.js be used to get the current hour in 24-hour time?
  // #Using Day.js 24 hour time format as the id 

    // #Creating the hourColour function
    // #hourColour function changes the blockHour style based on past, present or future 
    // #referenced to the time
    function hourColour() {
      $('.time-block').each(function() {
        // #declare the blockHour by calling upon the id identifified in the html as a string object 09,10,11,12,13,14,15,16,17
        // through 'this' in JavaScript
        // #parseInt parses this string into integers 9,10,11,12,13,14,15,16,17
        const blockHour = parseInt(this.id);
        // $(this) becomes a jQuery object that enables the usage of all the properties of jQuery
        // #Use jquery toggleClass to add or remove classes from each element under certain condition
        // #When the present time hour is less than the blockHour Id toggle the past class
        $(this).toggleClass('past', blockHour < nowHour);
        // #When the present time hour is equal than the blockHour Id toggle the present class
        $(this).toggleClass('present', blockHour === nowHour);
        // #When the present time hour is more than the blockHour Id toggle the future class
        $(this).toggleClass('future', blockHour > nowHour);
      });
    }
  


    // Call hourColour function
    hourColour();
             

    // Updating newTime function every second
    setInterval(newTime, 1000); 

  });
