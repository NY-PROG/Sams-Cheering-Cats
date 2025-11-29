document.addEventListener('DOMContentLoaded', () => {
 
    const mainCatMascot = document.getElementById('main-cat-mascot'); 
    const cheeringBubble = document.getElementById('cheering-bubble');
    const cheerCountDisplay = document.getElementById('cheer-count');
    
    
    const sideCatLeft = document.getElementById('side-cat-left');
    const sideCatRight = document.getElementById('side-cat-right');
    
    // Counts
    let cheerCount = 0; 
    const cheers = [
        "Meow! You got this! Go for it!",
        "Pawsitive thinking! Keep going!",
        "You're purr-fect! Never give up!",
        "Stay strong, champion!",
        "Almost there! Just a little more!",
        "Cheering you on with all nine lives!",
        "Take a break, then conquer the world!",
        "Hiss Hiss! (That's 'Go Team Go' in cat language!)",
        "Sam, you can be rich!",
        "Sam, the future billionaire!",
        "Free Sam!",
        "Go go go!",
        "Love you!"
    ];

    let lastCheerIndex = -1; 
    
    // Main cat
    const MAIN_CAT_NORMAL_IMAGE = 'cat-before.png'; 
    const MAIN_CAT_FIRE_IMAGE = 'cat-after.png';     
    
    // Left cat and right cat
    const SIDECAT_LEFT_NORMAL_IMAGE = 'cat-normal-left.png';  //left normal cat
    const SIDECAT_LEFT_WAVING_IMAGE = 'cat-waving-left.png';  // left waving cat
    const SIDECAT_RIGHT_NORMAL_IMAGE = 'cat-normal.png'; // right normal cat
    const SIDECAT_RIGHT_WAVING_IMAGE = 'cat-waving.png'; // right waving cat


    // 3. Click the main cat
    mainCatMascot.addEventListener('click', () => {
        
        // change the main cat pic
        mainCatMascot.src = MAIN_CAT_FIRE_IMAGE; 
        setTimeout(() => {
            mainCatMascot.src = MAIN_CAT_NORMAL_IMAGE; 
        }, 300); 

        
        // change the left cat
        sideCatLeft.src = SIDECAT_LEFT_WAVING_IMAGE; 
        setTimeout(() => {
            sideCatLeft.src = SIDECAT_LEFT_NORMAL_IMAGE; 
        }, 300); 

        // change the right cat
        sideCatRight.src = SIDECAT_RIGHT_WAVING_IMAGE; 
        setTimeout(() => {
            sideCatRight.src = SIDECAT_RIGHT_NORMAL_IMAGE; 
        }, 300); 

        // change the bubbles
        cheeringBubble.classList.remove('hidden'); 
        
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * cheers.length);
        } while (randomIndex === lastCheerIndex); 
        
        lastCheerIndex = randomIndex;
        const selectedCheer = cheers[randomIndex];
        cheeringBubble.textContent = selectedCheer;

        // count++
        cheerCount++; 
        cheerCountDisplay.textContent = `Cheer Count: ${cheerCount}`;
    });
});