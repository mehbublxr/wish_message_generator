function generateWish() {
    const friendName = document.getElementById("friendName").value.trim();

    if (friendName === "") {
        alert("Please enter your friend's name.");
        return;
    }

    const wishMessages = [
        `Happy Friendship Day, ${friendName}! May our bond grow stronger with each passing day.`,
        `Wishing you a joyful Friendship Day, ${friendName}! Thank you for being an amazing friend.`,
        `To my dearest friend ${friendName}, Happy Friendship Day! You're the best!`,
        `${friendName}, you make the world a better place! Happy Friendship Day!`,
        `On this Friendship Day, I'm grateful for your presence in my life, ${friendName}.`,
        `Happy Friendship Day, ${friendName}! May our bond grow stronger with each passing day.`,
        `Wishing you a joyful Friendship Day, ${friendName}! Thank you for being an amazing friend.`,
        `To my dearest friend ${friendName}, Happy Friendship Day! You're the best!`,
        `${friendName}, you make the world a better place! Happy Friendship Day!`,
        `On this Friendship Day, I'm grateful for your presence in my life, ${friendName}.`,
        `Sending you a virtual hug and lots of love on Friendship Day, ${friendName}.`,
        `Happy Friendship Day to my partner-in-crime, ${friendName}! Let's keep creating wonderful memories together.`,
        `${friendName}, you're not just a friend; you're family! Happy Friendship Day!`,
        `Cheers to the countless laughter and unforgettable moments we've shared, ${friendName}! Happy Friendship Day!`,
        `Friendship isn't about how long we've known each other, but about how beautiful our connection is. Happy Friendship Day, ${friendName}.`,
        `Wishing you all the happiness and success in the world, my dear friend ${friendName}. Happy Friendship Day!`,
        `May our friendship remain as vibrant and colorful as a rainbow. Happy Friendship Day, ${friendName}!`,
        `Through thick and thin, you've stood by my side. Thank you, ${friendName}, for being an incredible friend.`,
        `You are a true gem, ${friendName}, and I'm lucky to have you in my life. Happy Friendship Day!`,
        `Distance may separate us, but our hearts are always close. Happy Friendship Day, ${friendName}!`,
        `Life is more beautiful with you as my friend, ${friendName}. Wishing you a fantastic Friendship Day!`,
        `May our friendship be a source of inspiration and support forever, ${friendName}. Happy Friendship Day!`,
        `With you, every day feels like Friendship Day, ${friendName}. Let's celebrate our bond today and always.`,
        `To the one who understands me without words, Happy Friendship Day, ${friendName}!`,
        `Friendship is the greatest gift, and you are the most precious gift in my life, ${friendName}.`,





    ];

    const randomIndex = Math.floor(Math.random() * wishMessages.length);
    const generatedWish = wishMessages[randomIndex];

    const wishResultElement = document.getElementById("wishResult");
    wishResultElement.textContent = generatedWish;
}
