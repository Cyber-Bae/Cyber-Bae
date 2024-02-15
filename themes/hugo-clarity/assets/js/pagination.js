function paginationDisplay(container) {
  container.innerHTML = "";
  const startIndex = (pageNumber - 1) * elmsPerPage;
  const endIndex = Math.min(startIndex + elmsPerPage, dic.length);
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

function pagination(container, count) {
  const navigation = document.createElement("li")
  navigation.classList.add("page_item")
  navigation.innerHTML = `
    <a class="page-link" id="page_link_${count}">${count}</a>
    `
  container.appendChild(navigation)
}

function swipe(element, positionDic, count) {
  const positionContainer = document.getElementById("positions");
  console.log(`Initial count: ${count}`);
  prevCount = count

  function navigate(count) {
    btnHighlight(`page_link_${count}`);
    const startIndex = (count - 1) * 3;
    positionContainer.innerHTML = '';
    positionDic.slice(startIndex, startIndex + 3).forEach(event => {
      positionHTML(positionContainer, event);
    });
    
  }

  element.addEventListener("click", () => {
    listen(element.innerHTML)
    navigate(count)
    prevCount = count
    
  })

  function listen(input) {
    console.log(`This is the previous page Number ${prevCount}`)
    
    if (input === "Previous") {
      count = Math.max(1, prevCount - 1)

    } if (input === "Next") {
      count = Math.min(Math.ceil(positionDic.length / 3), prevCount + 1);
  
    } if (!isNaN(Number(input))) {
      count = Number(input)
    }

    console.log(`Current page number: ${count}`)
  }

  navigate(count);
}

function btnHighlight(input) {
  const list = document.getElementsByClassName("page-link")
  Array.from(list).forEach(value => {
    if (value.id == input) {
      value.style.backgroundColor = "var(--highlight)";
    }
    else {
      value.style.backgroundColor = "transparent"
    }
  })
}

