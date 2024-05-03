// Function to toggle the dropdown menu
function toggleDropdown() {
    const dropdown = document.getElementById('dropdown');
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}

// Function to populate the activity subtype dropdown based on selected type
function populateSubtypeDropdown() {
    const activityType = document.getElementById('activityType').value;
    const activitySubtypeDropdown = document.getElementById('activitySubtype');
    activitySubtypeDropdown.style.display = 'block';
    activitySubtypeDropdown.innerHTML = ''; // Clear previous options
    
    // Define activity subtypes based on selected type
    const subtypes = {
        'accomplishment': [
            'Cleaned', 'Life Task', 'Walked Dog', 'Worked', 'Washed Car', 'Task List', 'Life Admin', 'Saved Money', 'Tried Something New', 'Invested', 'Learnt Something'
        ],
        'kindness': [
            'Gave Gift', 'Complimented Someone', 'Picked Up Rubbish', 'Gave Clothes Away', 'Volunteer Work', 'Hold Door Open for Someone', 'Put a Trolley Away', 'Helped Someone in Shops', 'Gave Time for Expertise', 'Bought Someone a Coffee'
        ],
        'emotion': [
            'Happiness', 'Gratitude', 'Excitement', 'Love', 'Joy', 'Pride', 'Optimism'
        ],
        'selfcare': [
            'Bath', 'Sauna', 'Steam Room', 'Ice Bath', 'Nail Painting', 'Hair', 'Makeup', 'Taking Photos', 'Buying New Clothes', 'Meditated', 'Practiced Gratitude'
        ]
    };

    // Populate activity subtype dropdown options
    subtypes[activityType].forEach(subtype => {
        const option = document.createElement('option');
        option.value = subtype.toLowerCase().replace(/\s+/g, '-');
        option.textContent = subtype;
        activitySubtypeDropdown.appendChild(option);
    });
}

// Function to update the liquid level by 1%
function updateLiquidLevel() {
    const liquid = document.getElementById('liquid');
    const currentHeight = parseFloat(liquid.style.height) || 0;
    const newHeight = Math.min(currentHeight + 1, 100);
