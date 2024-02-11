function paginationDisplay(container) {
    container.innerHTML = "";
    const startIndex = (pageNumber - 1) * elmsPerPage;
    const endIndex = Math.min(startIndex + elmsPerPage, dic.length);


}

function createPaginationButtons() {
    const upcomingEvents = eventDic.filter(event => event.date >= new Date());
    const currentPage = 1
    const numPages = Math.ceil(upcomingEvents.length / 2);
    const eventsPagination = document.getElementById("events-pagination");

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



function eventHTML(eventsContainer, event) {
    const eventCard = document.createElement("div");

    eventCard.classList.add("event-card");
    eventCard.classList.add("table")
    const options = { month: "short" }; // Use "short" for 3-letter abbreviations
    const monthAbbr = event.date.toLocaleDateString("en-US", options).slice(0, 3);


    // Add event title, description, and RSVP button
    eventCard.innerHTML = `
    <div class="date"><h3>${monthAbbr}</h3><h1>${event.date.getDate()}</h1></div>
    <div class="event-description">
      <picture><img loading="lazy" src=${event.img}></picture>
      <div class="text">
        <h4 class="post_link"><a href="#">${event.title}</a></h4>
        <p>${event.description}</p>
      </div>
    </div>
    <a href="${event.rsvpLink}" class="button ">RSVP</a>
  `;

    eventsContainer.appendChild(eventCard);

}


function perksHTML(container, event) {
    const perkCard = document.createElement("div");
    perkCard.classList.add("card");
    perkCard.classList.add("event-description");

    perkCard.innerHTML = `
        <img src=${event.img}>
        <h3><a href="">${event.title}</a></h3>
        <p>${event.description}</p>
       `;

    container.appendChild(perkCard)
}


function sponsorHTML(container, event) {
    const sponsorElement = document.createElement("div")
    sponsorElement.classList.add("sponsor")
    sponsorElement.innerHTML = `
          <img src="${event.img}">
          <p>${event.description}</p>
        `

    container.appendChild(sponsorElement)

}


function positionHTML(container, event) {

    const position = document.createElement("div")
    position.classList.add("position")
    position.innerHTML = `
        <h3>${event.role}</h3>
        <p>${event.description}</p>
        
        `
    container.appendChild(position)

}