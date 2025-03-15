function updateContent() {
    // Get the dropdown element
    const dropDown = document.getElementById('months');

    // Get the selected dropdown value
    // console.log(dropDown.value)
    const selectedValue = dropDown.value;

    // Get the elements that need to be changed
    const videoLink = document.getElementById('monthlyVideos');
    const thumbnail = document.getElementById('videoThumbnail');
    const contentElement = document.getElementById('blog-post');

    // Change based on selector value
    if (selectedValue == 'video0'){
        thumbnail.src = './resources/media/images/2024RecapThumbnail.jpg';
        videoLink.href = 'https://www.youtube.com/watch?v=pyXhvtRxYRI';
        contentElement.innerHTML = `
        <p>Link to Video: <a href='https://youtu.be/pyXhvtRxYRI'>https://youtu.be/pyXhvtRxYRI</a>
            <br><br>
            ----
            <br><br>
            Hi! Welcome to the first pilot video for the website! A project I've been working on for a little bit now! 2024 has been a growing year. A year of being thankful for what I have and for having such an amazing support system. It's taught me how to be confident in myself and to live life to its fullest.
            The video doesn't dictate how much has happened this year. Sorry if you weren't able to make it in the montage but know that even though there wasn't any captured memories that just mean I was enjoying living in the moment and simply forgot.
        
            <br><br>
            This year I've learned to be an academic god, graduated with a Bachelors in Computer Science, and started my first job as a Data Engineer. Not only that but went clubbing for the first time, starting up dancing on my own, performing for K-Move, traveled to different states in the US, the list goes on and on!
            2024 is definately a year I'll remember! Thank you all for accepting who I am and just making my life 100x more enjoyable. 2024 was definately a hard year but I was able to make it through it. I've never been more thankful for a year because a lot has happened. 
            <br><br>
            Moving on to the video, the pilot video is simply just a recap of 2024 and all the captured video memories. Each month of 2025, I will post a little highlight clip and a summary of how that month went. In the future I aim to had a slot of photos, but due to just pure laziness that feature hasn't been made yet.
            <br>
            I can't wait to show you guys all the amazing memories I've had with you and I hope you enjoy watching these videos as much as I enjoy making this project. 
            <br><br>❤️ Love, Izzy 
            <br><br>
            ----
            <br><br>
            Goals of 2025:
            <br><br>
            1. Remember to always be yourself
            <br>
            2. Take care of your health (mentally and physically)
            <br>
            3. Becoming a dancing machine and upskill dancing
            <br>
            4. Upskill computer science technical skills
            <br>
            5. Be more positive in life
            <br>
            6. Make this website all the way through 2025
            <br>
            7. Learn Korean
            <br>
            8. Live life to the fullest and have fun!
            <br><br>
            ----
            <br><br>
            Uploaded: January 1st, 2025
            </p>`;
    } else if (selectedValue == 'video1'){
        thumbnail.src = './resources/media/images/Jan_thumnail.png';
        videoLink.href = 'https://www.youtube.com/watch?v=VO-f0nrBaqg';
        contentElement.innerHTML = `
        <p>Link to Video: <a href='https://youtu.be/VO-f0nrBaqg'>https://youtu.be/VO-f0nrBaqg</a>
            <br><br>
            ----
            <br><br>
            Hello! Better late than never :) This is January's recap post where I really don't remember what I did. In terms of January, a lot of events happened I learned a total of 0.75 dances, what does that mean... I never finished learning it.
            The song I was learning was IZNA by IZNA a group from the the reality competition show called i-land2. The reason I never finished the dance, was just mainly because I got too lazy... talk about great motiviation there. 

            <br>
            Next here are some random events that have happen in January:
            <br>
            In January, I bought myself a duck snowball to which I have yet to make because the snow has been super flaky and not sticky. I'm kind of disappointed in that. Next I redid my RGB lights on my PC set up because of my poor electrical work,
            the lights were being short circuited. I also bought cheap ones so it was bound to be a goner soon or later. I had enough to add the RBG my monitor so now all lighting is one color (YAY FOR ME). Moving on, I've been thinking about redying my hair
            specifically red... will I do that.. NO. Why? Because my hair is dead and I think it's time to go back to my natural hair color for the time being. I've recently bought a hair mask from the Asia Mall call Fimo and it's been useful for the time being,
            although it is an added step to the hair care routine. BUT it makes my hair soft so I don't mind.
            <br>
                <br>
            Nothing too much else happend but I did get to spend time with a bunch of friends. Jennfier, Tram, and I took Tet photos at Landmark center this year dressing up in our Ao Dai and with the help of Trisha she was wiling to take our photos for us. THANK YOU TRISHA!
            I've also got time to hang out with a few older friends like Claire where we made Omaru Rice (homemade) and it was really tasty! She's A CHEF!! While also introducing my friend Louis to Pho as well. Lots of things happened and it was a good month. I happy :)
            <br><br>
            OH one last thing CHUC MUNG NAM MOI! Happy Lunar New Years!! The year of the snake! 
            ----
            <br><br>
            Uploaded: Feb 16th, 2025
            </p>`;
        
    } else if (selectedValue == 'video2'){
        thumbnail.src = './resources/media/images/feb_thumnail.png';
        videoLink.href = 'https://youtu.be/OeUm5mxptQ4';
        contentElement.innerHTML = `
        <p>Link to Video: <a href='https://youtu.be/OeUm5mxptQ4'>https://youtu.be/OeUm5mxptQ4</a>
            <br><br>
            ----
            <br><br>
            Long time no see! February was a wild adventure. Starting off the year strong, I celebrated Lunar New Years with my family on February 1st. The regular Lunar New Years celebration where I go around to my relatives house wishing them happy new years and recieving lucky money.
            This year I got to meet my extended cousin Kaia :). She's an adorable little bean! The following week after I went back to my high school with Josh to check out the Blaine High School Asia Night Market. Story time! They thougth we were students so we got in for a cheaper price.
            The market was pretty cool, had a lot of small asian businesses selling their products but in my opinion was pretty over-priced. I did, however, buy a phone charm (that broke.... a few weeks after... big sad). 

            <br><br>
            The following day was the VSAM tet show! To which I saw TRISHA show off her amazing sewing skills and absolutely killing it with both her looks and her talent!! HEHE. I went to the show was Tram and Wesley to which we played the pokemon trading card game. ... The addiction is real!
            <br><br>

            Something big this month that happened was talking to Louis. I took him out for his birthday as a birthday and realized near the beginning month that I liked him. Or maybe I have liked him but have just been refusing to accept it. Anyways we've gone on a few hang outs with just us two and towards the end of the month, 
            I asked if he liked anyone and we've been going on a couple dates since. Check in for next month to check in the next update. 
            
            <br><br>

            Lastly, another big thing I was able to do this month is go to New Jersery/New York City. I took a weekend trip with Gloria and we went to the BabyMonster together! It was super fun! Vocals were so good! The day after we went to New York City together and just went around, made some keychains, and overall just had a good time :)
            <br><br>
            ----
            <br><br>
            Uploaded: March 8th, 2025
            </p>`;
        
    }
}