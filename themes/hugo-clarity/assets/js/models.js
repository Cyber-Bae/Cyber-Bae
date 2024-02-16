//dictionary for our sponsors
const sponsorDic = [
    {
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgdx6EmC9LY7F79bzXBLekYqW_GmRD1Yk3tA5yg0WWM6D771Bh-8j41dYeU3T5eNtuxSWgmbTpUNhyc6EvvcwZvDtLmtAzrfNstElwY14hMHhV00irhLRNwkIuZ3_-YNv7eoeftzV-cdTRgmoLI4tCFJUFjHYOU7VWEfWtf9rAZFNRf2Yo/s1600/Beige%20Business%20Brand%20Color%20Wheel%20Palette%20Facebook%20Post%20(7).png",
        description: "include brief description of sponsor"
    },
    {
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgdx6EmC9LY7F79bzXBLekYqW_GmRD1Yk3tA5yg0WWM6D771Bh-8j41dYeU3T5eNtuxSWgmbTpUNhyc6EvvcwZvDtLmtAzrfNstElwY14hMHhV00irhLRNwkIuZ3_-YNv7eoeftzV-cdTRgmoLI4tCFJUFjHYOU7VWEfWtf9rAZFNRf2Yo/s1600/Beige%20Business%20Brand%20Color%20Wheel%20Palette%20Facebook%20Post%20(7).png",
        description: "include brief description of sponsor"
    },
    {
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgdx6EmC9LY7F79bzXBLekYqW_GmRD1Yk3tA5yg0WWM6D771Bh-8j41dYeU3T5eNtuxSWgmbTpUNhyc6EvvcwZvDtLmtAzrfNstElwY14hMHhV00irhLRNwkIuZ3_-YNv7eoeftzV-cdTRgmoLI4tCFJUFjHYOU7VWEfWtf9rAZFNRf2Yo/s1600/Beige%20Business%20Brand%20Color%20Wheel%20Palette%20Facebook%20Post%20(7).png",
        description: "include brief description of sponsor"
    },
    {
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgdx6EmC9LY7F79bzXBLekYqW_GmRD1Yk3tA5yg0WWM6D771Bh-8j41dYeU3T5eNtuxSWgmbTpUNhyc6EvvcwZvDtLmtAzrfNstElwY14hMHhV00irhLRNwkIuZ3_-YNv7eoeftzV-cdTRgmoLI4tCFJUFjHYOU7VWEfWtf9rAZFNRf2Yo/s1600/Beige%20Business%20Brand%20Color%20Wheel%20Palette%20Facebook%20Post%20(7).png",
        description: "include brief description of sponsor"
    },
];

//dictionary for perks for signing up with us
const perkDic = [
    {
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVBiC1of0YoXcsjATc44vEND9abjCaQgtJ5RnA0FDf55yd-7GjSUMKn_5yqQiBtTub5LMVzK1rkjr76vEErhDP8QMXtf6Xc2k2JEmUpPap0lLtY2hRX6O4ZXIbmv-ktHy2heFrJoiTILkuus56-4MiAUE1NZdiRogFiiXk-nyFijIEM60/s1600/14.png",
        title: "Affordable Courses",
        description: "Our budget-friendly cyber security courses are designed to assist you in enhancing your skill set for future career changes"
    },
    {
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiB_xHCZZkHCyhBiH0rIkPJJ3IvwLCKabLIXEAjnVJmFewBVC9VgKqG9KZUD6i2UDtZLN06zhRQC4Ic6B8B_UFNJ07PtfewHrgUxTHe3nl0AJUCYG-T4RCNDH3sjW-Jz2aAiGCg5SActMUQ6JMlUTeaJaX4_6vQgKwkp9xVRmwuIPKt_1k/s1600/13.png",
        title: "Dedicated Network",
        description: "We are not just a mere organization. We are a community of dedicated individuals, united in our goal to assist you in propelling your career forward"

    },
    {
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEghlHptcSdZ1lrVHG07nuPMy55SK8BHqsN7zvAc1B7MI4csYoG5iRhDQW-yehrOlbVNtFXG0BXffkiWZxYs_XdOn5Hc03cdOslh8Q9ZrG7dyqHL1x_pQRv9hdlEiUL5bWX2SvuHkeziK9TZfTD9wu0S55SRB3KzRW4qs3o1K55gkcvEB9c/s1600/Beige%20Business%20Brand%20Color%20Wheel%20Palette%20Facebook%20Post%20(8).png",
        title: "Competitive Proposals",
        description: "Get a head start with our exclusive database of top-paying competitive offers. We're here to support you as you further advance your career."
    },
];


// dictionary for upcoming events
const eventDic = [
    {
        title: "Unlock Your Job Potential: Build a Resume That Gets You Noticed",
        description: "Tired of resumes that blend into the pile? This workshop equips you with the tools to build a resume that grabs attention and lands interviews.",
        date: new Date(2024, 2, 21), // May 27, 2024
        rsvpLink: "https://example.com/rsvp/coding-workshop",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhE-OXdp-Aah1C_L5hKlk8KQHHSFHNHEZuoQEk9Rb5LEJncc0rgVXeX-AwLP0U7Zr79pIQdDShltnjWQghbojCb0ThjGFsv_J9CFsQc-KsqCQEmrSYf3g-FR0jMKjSrTWXykYIhrOuJNLQjYLK1yeBobKxyMnhZbRKjsaGmpvUX7xc3Xuk/s1600/Beige%20Business%20Brand%20Color%20Wheel%20Palette%20Facebook%20Post%20(7).png"
    },
    {
        title: "Land Your Dream Job: A Masterclass in Job Hunting Success",
        description: "This immersive masterclass equips you with the winning strategies to navigate the modern job market and land the role you deserve.",
        date: new Date(2024, 2, 28), // May 27, 2024
        rsvpLink: "https://example.com/rsvp/coding-workshop",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhE-OXdp-Aah1C_L5hKlk8KQHHSFHNHEZuoQEk9Rb5LEJncc0rgVXeX-AwLP0U7Zr79pIQdDShltnjWQghbojCb0ThjGFsv_J9CFsQc-KsqCQEmrSYf3g-FR0jMKjSrTWXykYIhrOuJNLQjYLK1yeBobKxyMnhZbRKjsaGmpvUX7xc3Xuk/s1600/Beige%20Business%20Brand%20Color%20Wheel%20Palette%20Facebook%20Post%20(7).png"
    },
    {
        title: "Beyond the Chat: Supercharge Your Productivity with ChatGPT",
        description: "Learn the basics of HTML, CSS, and JavaScript in this interactive workshop.",
        date: new Date(2024, 3, 6), // May 27, 2024
        rsvpLink: "https://example.com/rsvp/coding-workshop",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhE-OXdp-Aah1C_L5hKlk8KQHHSFHNHEZuoQEk9Rb5LEJncc0rgVXeX-AwLP0U7Zr79pIQdDShltnjWQghbojCb0ThjGFsv_J9CFsQc-KsqCQEmrSYf3g-FR0jMKjSrTWXykYIhrOuJNLQjYLK1yeBobKxyMnhZbRKjsaGmpvUX7xc3Xuk/s1600/Beige%20Business%20Brand%20Color%20Wheel%20Palette%20Facebook%20Post%20(7).png"
    },
];

const positionDic = [
    {
        role: "Cloud Development",
        description: "No matter your experience level or preferred platform, we help you chart your unique path in the dynamic cloud development landscape. Explore diverse roles, from back-end engineering to DevOps, and work with companies at every scale, from startups to global giants."
    },
    {
        role: "Artificial Intelligence",
        description: "From deep learning engineers to natural language processing specialists, we connect you with exciting AI roles that match your unique skills and passions. We work with a wide range of organizations, from research labs to established companies, offering remote, hybrid, and on-site options to suit your lifestyle."
    },
    {
        role: "Project Management",
        description: "We propel your journey in the dynamic world of project management. Drive transformative projects across diverse industries, from tech startups to global corporations, and make a tangible impact on the world."

    },
    {
        role: "Compliance Standards",
        description: "From internal controls specialists to data privacy experts, we connect you with exciting compliance roles that match your unique skills and passions. We work with a wide range of organizations, from healthcare institutions to financial services companies, offering remote, hybrid, and on-site options to suit your lifestyle."
    },
    {
        role: "IT Support",
        description: "From helpdesk specialists to network administrators, we connect you with exciting IT support roles that match your unique skills and passions. We work with a wide range of organizations across various industries, offering remote, hybrid, and on-site options to suit your lifestyle."

    },
    {
        role: "Web Design",
        description: "Whether you're a design newbie brimming with ideas or a seasoned pro seeking exciting challenges, we connect you with companies eager to bring your vision to life. From sleek startups to established brands, explore diverse projects and leave your mark on the web."
    },


]
