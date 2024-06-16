

addEventListener("DOMContentLoaded", (ev) => {

  const sponsorContainer = document.getElementById("sponsor_list")

  const headerContainer = document.getElementById("right_header")

  const positionContainer = document.getElementById("positions")

  const perkContainer = document.getElementById("perks")

  const rolePagination = document.getElementById("role_pagination")

  const eventsContainer = document.getElementById("event-cards");

  const pageLinks = document.getElementsByClassName("page-link")

  const eventsPagination = document.getElementById("events-pagination"); // Add a container for pagination buttons
  // Filter events to display only upcoming ones
  const upcomingEvents = eventDic.filter(event => event.date >= new Date());

  const pageNumber = 1;

  const nav = document.getElementById("nav")

  if (nav != null) {
    // Get the current URL
    const currentURL = window.location.href;

    // Get the base URL of your website
    const baseURL = window.location.origin +"/Cyber-Bae/";


    console.log(`baseURL: ${baseURL}`)
    console.log(`this is the current url: ${currentURL}`)


  }


  startIndex = (pageNumber - 1) * 3

  const eventIndex = (pageNumber - 1) * 2
  upcomingEvents.slice(eventIndex, eventDic.lengt).forEach(event => {
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

  if (headerContainer != null) {
    headerCardsDic.forEach(event =>{
      headerHTML(headerContainer, event)
    });

  }

  let count = 1


  if (positionContainer != null && rolePagination != null && pageLinks != null) {

    let finalCount;

    positionDic.slice(startIndex, Math.min(startIndex + 3, positionDic.length)).forEach(event => {
      positionHTML(positionContainer, event)

      if ((positionDic.length) / count == 3) {
        finalCount = count + 1
      }
      if (count < finalCount || isNaN(finalCount)) {
        pagination(rolePagination, count)
      }
      count++
    })

    Array.from(pageLinks).forEach(link => {
      swipe(link, positionDic, 1)
    })


  }



})