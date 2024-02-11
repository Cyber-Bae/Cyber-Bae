

addEventListener("DOMContentLoaded", (ev) => {

  const sponsorContainer = document.getElementById("sponsor_list")


  const positionContainer = document.getElementById("positions")


  const perkContainer = document.getElementById("perks")

  const eventsContainer = document.getElementById("event-cards");
  const eventsPagination = document.getElementById("events-pagination"); // Add a container for pagination buttons
  // Filter events to display only upcoming ones
  const upcomingEvents = eventDic.filter(event => event.date >= new Date());

  const pageNumber = 1;
  const startIndex = (pageNumber - 1) * 2;

  upcomingEvents.slice(startIndex, Math.min(startIndex + 2, eventDic.length)).forEach(event => {
    eventHTML(eventsContainer, event)
  });


  if (perkContainer != null) {
    perkDic.forEach(event => {
      perksHTML(perkContainer, event)
    });
  }

  if (sponsorContainer != null) {
    sponsorDic.forEach(event => {
      sponsorHTML(sponsorContainer, event)

    })
  }

  if (positionContainer != null) {
    positionDic.slice(startIndex, Math.min(startIndex + 3, eventDic.length)).forEach(event => {
      positionHTML(positionContainer, event)

    });
  }

  createPaginationButtons();

})
