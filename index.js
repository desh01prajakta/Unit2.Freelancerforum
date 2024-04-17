
const initialFreelancers = [
    { name: "Alice", occupation: "Writer", startingPrice: 30 },
    { name: "Bob", occupation: "Teacher", startingPrice: 50 }
  ];
  
  // Function to calculate average starting price
  function calculateAverageStartingPrice(freelancers) {
    const totalStartingPrice = freelancers.reduce((acc, freelancer) => acc + freelancer.startingPrice, 0);
    return totalStartingPrice / freelancers.length;
  }
  
  // Function to render freelancers list
  function renderFreelancers(freelancers) {
    const freelancerList = document.getElementById("freelancerList");
    freelancerList.innerHTML = ''; // Clear existing list
  
    freelancers.forEach(freelancer => {
      const listItem = document.createElement('li');
      listItem.textContent = `${freelancer.name} - ${freelancer.occupation} - $${freelancer.startingPrice}`;
      freelancerList.appendChild(listItem);
    });
  }
  
  // Function to update average starting price
  function updateAverageStartingPrice(freelancers) {
    const averageStartingPrice = calculateAverageStartingPrice(freelancers);
    const averageStartingPriceElement = document.getElementById("averageStartingPrice");
    averageStartingPriceElement.textContent = averageStartingPrice.toFixed(2);
  }
  
  // Render initial freelancers
  renderFreelancers(initialFreelancers);
  updateAverageStartingPrice(initialFreelancers);
  
  // Simulate new freelancers appearing every few seconds
  const additionalFreelancers = [
    { name: "Carol", occupation: "Programmer", startingPrice: 70 },
    { name: "Dave", occupation: "Designer", startingPrice: 40 },
    { name: "Emma", occupation: "Artist", startingPrice: 60 }
  ];
  
  let freelancers = initialFreelancers.slice(); // Copy initial freelancers
  additionalFreelancers.forEach((freelancer, index) => {
    setTimeout(() => {
      freelancers.push(freelancer);
      renderFreelancers(freelancers);
      updateAverageStartingPrice(freelancers);
    }, (index + 1) * 3000); // Add a new freelancer every 3 seconds
  });