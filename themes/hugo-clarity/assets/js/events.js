

addEventListener("DOMContentLoaded", (ev) => {

  const sponsorContainer = document.getElementById("sponsor_list")


  const positionContainer = document.getElementById("positions")


  const perkContainer = document.getElementById("perks")

  const rolePagination = document.getElementById("role_pagination")

  const eventsContainer = document.getElementById("event-cards");

  const pageLinks = document.getElementsByClassName("page-link")

  const eventsPagination = document.getElementById("events-pagination"); // Add a container for pagination buttons
  // Filter events to display only upcoming ones
  const upcomingEvents = eventDic.filter(event => event.date >= new Date());

  const pageNumber = 1;
  startIndex = (pageNumber - 1) * 3


  upcomingEvents.slice(startIndex,  eventDic.lengt).forEach(event => {
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

  let count = 1


  if (positionContainer != null && rolePagination != null && pageLinks != null) {
  
    positionDic.slice(startIndex, Math.min(startIndex + 3, positionDic.length)).forEach(event => {
      positionHTML(positionContainer, event)
      pagination(rolePagination, count )
      count ++

    })

    Array.from(pageLinks).forEach(link =>{
      swipe(link, positionDic, 1)
    })


    // for (let i=0; i< pageLinks.length; i++){
    //   swipe(pageLinks[i], positionDic)
    // }


  }



})