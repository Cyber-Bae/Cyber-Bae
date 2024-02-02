//this is for the perks we provide

const perkDic = [
  {
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVBiC1of0YoXcsjATc44vEND9abjCaQgtJ5RnA0FDf55yd-7GjSUMKn_5yqQiBtTub5LMVzK1rkjr76vEErhDP8QMXtf6Xc2k2JEmUpPap0lLtY2hRX6O4ZXIbmv-ktHy2heFrJoiTILkuus56-4MiAUE1NZdiRogFiiXk-nyFijIEM60/s1600/14.png",
    title: "Affordable Courses",
    description: "We provide afordable cyber security courses to help you upskil for your next career pivit"
  },
  {
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiB_xHCZZkHCyhBiH0rIkPJJ3IvwLCKabLIXEAjnVJmFewBVC9VgKqG9KZUD6i2UDtZLN06zhRQC4Ic6B8B_UFNJ07PtfewHrgUxTHe3nl0AJUCYG-T4RCNDH3sjW-Jz2aAiGCg5SActMUQ6JMlUTeaJaX4_6vQgKwkp9xVRmwuIPKt_1k/s1600/13.png",
    title: "Dedicated Network",
    description: "We're more than an organization. We're a community of motivated professions here to help you advance your career"

  },
  {
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiPnFAcwz9xIRXwcGBg3GIy4LXsfUjQoWsNZVPMHK8PwDcz0ZwwX-FYRCDJaJFkfapo13c2LGn-57HIwnrh4q5gVjSWkHuBNh8_nCQgUD3N6Sxez01LeH6k4UI3JSiw-em7n1EeyTezWK4KEkR6329j1OqVfN1HQN0teYNAYFzX_DBleeY/s1600/Beige%20Business%20Brand%20Color%20Wheel%20Palette%20Facebook%20Post%20(3).png",
    title: "???",
    description: "We provide afordable cyber security courses to help you upskil for your next career pivit"
  },
];


// this is for the events
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
      date: new Date(2024, 2, 21), // May 27, 2024
      rsvpLink: "https://example.com/rsvp/coding-workshop"
    },
    {
      title: "Land Your Dream Job: A Masterclass in Job Hunting Success",
      description: "Learn the basics of HTML, CSS, and JavaScript in this interactive workshop.",
      date: new Date(2024, 2, 28), // May 27, 2024
      rsvpLink: "https://example.com/rsvp/coding-workshop"
    },
    {
      title: "Beyond the Chat: Supercharge Your Productivity with ChatGPT",
      description: "Learn the basics of HTML, CSS, and JavaScript in this interactive workshop.",
      date: new Date(2024, 3, 6), // May 27, 2024
      rsvpLink: "https://example.com/rsvp/coding-workshop"
    },
  ];

addEventListener("DOMContentLoaded", (ev) => {

  const perkContainer = document.getElementById("perks")

  function getPerks() {
    if (perkContainer != null) {
      perkDic.forEach((event) => {
        const perkCard = document.createElement("div");
        perkCard.classList.add("card");
        perkCard.classList.add("event-description");

        perkCard.innerHTML = `
        <img src=${event.img}>
        <h3><a href="">${event.title}</a></h3>
        <p>${event.description}</p>
       `;

        perkContainer.appendChild(perkCard)

      });
    }
  }
  getPerks();



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

  // Create page number buttons
  for (let i = 1; i <= numPages; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.addEventListener("click", () => {
      let nextButton = document.getElementById("nextBtn")
      if (currentPage < numPages && nextButton.style.visibility == "hidden"){
        nextButton.style.visibility="visible"
      }else{
        nextButton.style.visibility="hidden"
      }
      currentPage = i;
      displayPage(i);
    });
    eventsPagination.appendChild(button);
  }

  // Create next arrow button (if needed)
  if (currentPage < numPages) {
    const nextButton = document.createElement("button");
    nextButton.setAttribute("id", "nextBtn")
    const backButton = document.createElement("button")
    nextButton.textContent = ">"; // Or use an arrow icon
    backButton.textContent = "<"
    nextButton.addEventListener("click", () => {
      currentPage++;
      displayPage(currentPage, numPages);
      if (currentPage >= numPages){
        nextButton.style.visibility ="hidden"
      }
    });
  
    backButton.addEventListener("click", () => {
      currentPage--;
      displayPage(currentPage);
      if (currentPage <= numPages[0]){
        backButton.style.display ="none"
      }
    });
    eventsPagination.appendChild(nextButton);
  }
})