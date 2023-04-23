
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

    // #Creating the scheduleInput function
    // scheduleInput function will save the text in the block hour text area when the corresponnding save button is clicked
    function scheduleInput() {
      // #When the save button at the hour block is clicked, run the scheduleInput function
      $('.saveBtn').on('click', function() {
        // #Usng attr() to get the attribute value of that hour block (id) located as the parent in the HTML DOM tree
        const key = $(this).parent().attr('id');
        // #Using the val() method to return or set the attribute value to the text entered defined as the sibling
        const value = $(this).siblings('.description').val();
        // #Using the setItem method to save into localStorage with the corresponding key name and value
        localStorage.setItem(key, value);
      });
    }

    // This will get the user input from the localStorage and set textarea values for each time block.
    
    // #For each time block, the value at the local storage is set as the textarea values
    $('.time-block').each(function() {
      // #Declaring key
      const key = $(this).attr('id');
      // #Declaring value
      const value = localStorage.getItem(key);
      // #Display local storage value in the corresponding textarea
      $(this).children('.description').val(value);  

    });


  function updateColour() {
    $('.time-block').each(function() {
      // Declaring the blockHour by parsing the blockHour string into integers
      const blockHour = parseInt(this.id);
      // In the present time when blockHour is equal to the nowHour, remove the past & future class and add the present class
      if (blockHour == nowHour) {
        $(this).removeClass('past future').addClass('present');
      // In the past time when blockHour is less to the nowHour, remove the present & future class and add the past class  
      } else if (blockHour < nowHour) {
        $(this).removeClass('future present').addClass('past');
      // In the future besides past & present, remove the present & past class and add the future class    
      } else {
        $(this).removeClass('past present').addClass('future');
      }
      console.log(parseInt(this.id))
    });
  }

    // Call hourColour function
    hourColour();
       // Call scheduleInput function
    scheduleInput();
       // Call updateColour function                
    updateColour();             

    // Updating newTime function every second
    setInterval(newTime, 1000); 

  });
