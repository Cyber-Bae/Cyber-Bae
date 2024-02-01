const eventDic = [
    {
      title: "Create a Personalized Email Signature with HTML, CSS, and JavaScript",
      description: "Join us for a screening of 'Casablanca' in the park. Bring your blankets and picnic baskets!",
      date: new Date(2024, 2, 10), // March 10, 2024
      rsvpLink: "https://example.com/rsvp/movie-night",
      img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHG-NEvn5-XaIVLKT_WOeYSrafCulPM7JCt_f9flT5zZP4jMQCA9mOYcrMpuxM8rjgSMaBhz667Ji0imW2r8iNzdbIEbjVB7mx4QKMB3EqqsS9HrgxcKSnoOpq64gK1sZooirFZfxqB9uZa7lCaCYJ8kkv_inInby04VRdTThCxE9QOvE/s1600/Zv5AePTrA4AMtJ53nf1t--1--vldou.jpg"
    },
    {
      title: "Unlock Your Job Potential: Build a Resume That Gets You Noticed",
      description: "Learn the basics of HTML, CSS, and JavaScript in this interactive workshop.",
      date: new Date(2024, 4, 27), // May 27, 2024
      rsvpLink: "https://example.com/rsvp/coding-workshop"
    },
    {
      title: "Unlock Your Job Potential: Build a Resume That Gets You Noticed",
      description: "Learn the basics of HTML, CSS, and JavaScript in this interactive workshop.",
      date: new Date(2024, 4, 27), // May 27, 2024
      rsvpLink: "https://example.com/rsvp/coding-workshop"
    },
    {
      title: "Unlock Your Job Potential: Build a Resume That Gets You Noticed",
      description: "Learn the basics of HTML, CSS, and JavaScript in this interactive workshop.",
      date: new Date(2024, 4, 27), // May 27, 2024
      rsvpLink: "https://example.com/rsvp/coding-workshop"
    },
  ];

  addEventListener("DOMContentLoaded", (ev) => {

    const eventsContainer = document.getElementById("event-cards");
    const eventsPagination = document.getElementById("events-pagination"); // Add a container for pagination buttons

    // Filter events to display only upcoming ones
    const upcomingEvents = eventDic.filter(event => event.date >= new Date());

    let currentPage = 1;
    const eventsPerPage = 2;

    // Create event card elements for the current page
    function displayPage(pageNumber) {
      eventsContainer.innerHTML = ""; // Clear the container for new events

      const startIndex = (pageNumber - 1) * eventsPerPage;
      const endIndex = Math.min(startIndex + eventsPerPage, upcomingEvents.length);

      upcomingEvents.slice(startIndex, endIndex).forEach(event => {
        const eventCard = document.createElement("div");
        eventCard.classList.add("event-card");
        const options = { month: "short" }; // Use "short" for 3-letter abbreviations
        const monthAbbr = event.date.toLocaleDateString("en-US", options).slice(0, 3);


        // Add event title, description, and RSVP button
        eventCard.innerHTML = `
      <div class="date"><h3>${monthAbbr}</h3><h1>${event.date.getDate()}</h1></div>
      <div class="event-description">
        <picture><img loading="lazy" src=${event.img}></picture>
        <h3 class="post_link"><a href="#">${event.title}</a></h3>
      </div>
      <a href="${event.rsvpLink}" class="button ">RSVP</a>
    `;

        eventsContainer.appendChild(eventCard);
      });
    }

    // Display the initial page
    displayPage(currentPage);

    // Create pagination buttons
    function createPaginationButtons() {
  const numPages = Math.ceil(upcomingEvents.length / eventsPerPage);

  eventsPagination.innerHTML = ""; // Clear previous buttons

  // Create previous arrow button (if needed)
  if (currentPage > 1) {
    const prevButton = document.createElement("button");
    prevButton.textContent = "Previous"; // Or use an arrow icon
    prevButton.addEventListener("click", () => {
      currentPage--;
      displayPage(currentPage);
    });
    eventsPagination.appendChild(prevButton);
  }

  // Create page number buttons
  for (let i = 1; i <= numPages; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.addEventListener("click", () => {
      currentPage = i;
      displayPage(i);
    });
    eventsPagination.appendChild(button);
  }

  // Create next arrow button (if needed)
  if (currentPage < numPages) {
    const nextButton = document.createElement("button");
    nextButton.textContent = "Next"; // Or use an arrow icon
    nextButton.addEventListener("click", () => {
      currentPage++;
      displayPage(currentPage);
    });
    eventsPagination.appendChild(nextButton);
  }
}


    createPaginationButtons(); // Create initial pagination buttons

  });
