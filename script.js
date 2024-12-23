function startGuide() {
    document.querySelector('.container').style.display = 'none';
    document.getElementById('choose-celebration').style.display = 'block';
  }

  function showFestivals(country) {
    const festivals = {
      'India': {
        story: '<span style="color: #FF6F61; font-weight: bold;">Diwali</span>, also known as Deepavali, is one of the most significant and widely celebrated festivals in India. It is known as the Festival of Lights and symbolizes the victory of light over darkness and good over evil. Diwali is celebrated by Hindus, Sikhs, Jains, and some Buddhists, each with their own unique traditions and reasons for observing the festivalDiwali usually falls between mid-October and mid-November, depending on the lunar calendar. The main day of Diwali is observed on the new moon night (Amavasya) of the Hindu lunisolar month Kartika',
        video: 'https://www.youtube.com/embed/pp59n0So-XE',
        activities: ['Cleaning and Decorating Homes','Lighting Diyas and Candles','Bursting Firecrackers','Performing Puja','Exchanging Gifts and Sweets','Feasting','Wearing New Clothes','Visiting Friends and Relatives','Playing Games','Storytelling and Cultural Performances']
      },
      'Japan': {
    story: '<span style="color: #FF6F61; font-weight: bold;">Cherry blossoms</span> typically bloom from late March to early April, but the exact timing varies depending on the region. In southern regions like Okinawa, cherry blossoms can bloom as early as January, while in northern regions like Hokkaido, they bloom later, around late April to May.',
    video: 'https://www.youtube.com/embed/0q-ojZPR5q8',
    activities: [
        'Picnics Under the Blossoms',
        'Night Viewing (Yozakura)',
        'Boat Rides',
        'Attending Festivals: Participate in local cherry blossom festivals',
        'Photography: Capture the stunning beauty of the cherry blossoms',
        'Tea Ceremonies',
        'Strolling Through Parks',
        'Sampling Seasonal Foods',
        'Traditional Performances',
        'Hanami Parties: Organize gatherings under the cherry trees'
    ]},
      'USA': {
        story: '<span style="color: #FF6F61; font-weight: bold;">Thanksgiving</span> is a major national holiday in the United States, celebrated with great enthusiasm and a sense of gratitude. It is a time for family gatherings, festive meals, and giving thanks for the blessings of the past year.Thanksgiving is traditionally a harvest festival and is celebrated on the fourth Thursday of November each year. It originated as a day of giving thanks for the bountiful harvest and other blessings',
        video: 'https://www.youtube.com/embed/lslqtUMwDxA',
        activities:['Thanksgiving Dinner','Expressing Gratitude', 'Watching Thanksgiving Parades', 'Football Games', 'Volunteering', 'Playing Games', 'Turkey Trot','Watching Movies', 'Crafting','Black Friday Planning',]
      },
      'Brazil': {
    story: '<span style="color: #FF6F61; font-weight: bold;">Carnival</span> is one of the most vibrant and anticipated festivals in Brazil, known for its colorful parades, lively music, and exuberant celebrations. It is an explosion of culture and joy that takes over the country each year. Carnival is a pre-Lenten festival celebrated before the Christian season of Lent begins. It is characterized by grand parades, street parties, samba dancing, and elaborate costumes. The festivities usually last for several days, culminating in a grand finale just before Ash Wednesday.',
    video: 'https://www.youtube.com/embed/ltXfR_TIlEE',
    activities: [
        'Carnival Activities',
        'Samba Parades',
        'Street Parades: Smaller celebrations that bring communities together',
        'Street Parties (Blocos)',
        'Costume Balls (Bailes)',
        'Themed Parties',
        'Traditional Dance',
        'Food and Drink',
        'Boat Rides and Beach Parties',
        'Beach Parties'
    ]
}
    };
    const festival = festivals[country];
    document.getElementById('festival-content').innerHTML = `
      <p>${festival.story}</p>
      <iframe src="${festival.video}" allowfullscreen></iframe>
    `;

    // Save activities for the next page
    window.currentActivities = festival.activities;

    document.getElementById('choose-celebration').style.display = 'none';
    document.getElementById('generate-activities').style.display = 'block';
    document.getElementById('festival-name').textContent = country;

  }


    function showActivityIdeas() {
        const ideasList = document.getElementById('ideas-list');
        const activityImage = document.getElementById('activity-image');
        
        // Populate the activity list
        ideasList.innerHTML = window.currentActivities
          .map(activity => `<li>${activity}</li>`)
          .join('');
        
        // Set the country-specific image
        const countryImages = {
          'India': 'https://static.vecteezy.com/system/resources/thumbnails/035/978/604/small/ai-generated-indian-family-lighting-diwali-lamp-during-diwali-celebration-indian-hindu-family-gathered-together-celebrating-diwali-in-their-backyard-garden-ai-generated-free-photo.jpg',
          'Japan': 'https://img.freepik.com/premium-photo/quotjapanese-cherry-blossom-festival-hanami-serene-scenequot_1168612-602984.jpg',
          'USA': 'https://media.istockphoto.com/id/459244035/photo/macys-thanksgiving-day-parade.jpg?s=612x612&w=0&k=20&c=dMqJNG9w3Xmw80tpZlrAGSKcuY3ye-r3zuwzmerxOio=',
          'Brazil': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT73UcOhaLLQtYuxBPHiok_QAuIQMieZDSsuNA5zOfidg-C4bvjZTxxG7yL9NQysBdjS6o&usqp=CAU'
        };
        activityImage.src = countryImages[document.getElementById('festival-name').textContent] || 'path-to-images/default.jpg';
      
        document.getElementById('generate-activities').style.display = 'none';
        document.getElementById('activity-ideas').style.display = 'block';
      }
      

  function createPlan() {
    document.getElementById('activity-ideas').style.display = 'none';
    document.getElementById('create-plan').style.display = 'block';
  }

  function savePlan() {
    const plan = document.getElementById('plan-text').value;
    if (plan.trim() === '') {
      alert('Please write a plan before saving.');
      return;
    }
    alert("Your plan has been saved:\n${plan}");
    document.getElementById('create-plan').style.display = 'none';
    document.getElementById('share-tradition').style.display = 'block';
  }
  function showTraditionImage(country) {
    const traditionImage = document.getElementById('tradition-image');
    
    // Map countries to images of traditional clothing
    const countryImages = {
      'India': 'https://media.istockphoto.com/id/698724258/photo/indian-family-celebrating-diwali-festival-with-fire-crackers.jpg?s=612x612&w=0&k=20&c=B9E5MqVufHDNYpZvD4xC3RWGb4KTgEhV3TZuJa92kpQ=',
      'Japan': 'https://images.stockcake.com/public/4/8/1/4819b081-ed82-4846-a05d-5cc7f7888e74_large/traditional-attire-couple-stockcake.jpg',
      'USA': 'https://teenavi.com/wp-content/uploads/2023/10/mens-Thanksgiving-outfit-ideas-5-min.jpg',
      'Brazil': 'https://c8.alamy.com/comp/HW91NX/girlwoman-in-elaborate-fancy-dress-costume-tenerife-carnival-HW91NX.jpg',
    };

    // Set the image based on the selected country
    const imageUrl = countryImages[country];
    if (imageUrl) {
      traditionImage.src = imageUrl;
      traditionImage.alt = `${country} Traditional Clothing Image`;
      traditionImage.style.display = 'block';  // Ensure image is visible
    } else {
      traditionImage.style.display = 'none';  // Hide the image if not found
    }
  }

  function displayTraditionForCountry(country) {
    showTraditionImage(country);
    document.getElementById('share-tradition').style.display = 'block';
  }

// You would call `displayTraditionForCountry(country)` after the country is selected,
// for instance, in the `showFestivals` function after a country is chosen.
// Navigation functions
function goBackToChooseCelebration() {
    document.getElementById('generate-activities').style.display = 'none';
    document.getElementById('choose-celebration').style.display = 'block';
  }

  function goBackToGenerateActivities() {
    document.getElementById('activity-ideas').style.display = 'none';
    document.getElementById('generate-activities').style.display = 'block';
  }

  function goBackToActivityIdeas() {
    document.getElementById('create-plan').style.display = 'none';
    document.getElementById('activity-ideas').style.display = 'block';
  }

  function goBackToCreatePlan() {
    document.getElementById('share-tradition').style.display = 'none';
    document.getElementById('create-plan').style.display = 'block';
  }