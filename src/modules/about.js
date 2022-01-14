

const about = document.createElement("div");
about.className = "about";

const makeAbout = () => {

    //make a txt container
    const container = document.createElement("div");
    container.className = "txt-container";

    //about append container
    about.appendChild(container);

    const founderTxt = () => {

        //founder title
        const founder = document.createElement("div");
        founder.id = "founder";
        founder.innerHTML = "About Our Founder";

        //founder msg
        const founderMsg = document.createElement("div");
        founderMsg.id = "txt";
        founderMsg.innerHTML =  `Ever since his return from Willy Wonka's Chocolate Factory, Augustus Gloop quickly tired of the monotone flavors found in the World's candy. After all, he had
        tasted it all at his short stay in the legendary chocolate factory. To satiate his unending appetite, he turned to another alternative - meat. Like a child mesmerized by
        a new toy, he sought out for all kinds - and the best - of meat; and as they say, beef is king. So when the best of Wagyu failed to impress him, he in turn decided to
        embark on a new adventure, to create and serve the best. So here we are, and we welcome you here, to Beef! `;

        //append founder message to founder and founder to txt-container
        founder.appendChild(founderMsg);
        container.appendChild(founder);
    }

    const missionStatement = () => {

        //mission title
        const mission = document.createElement("div");
        mission.id = "mission";
        mission.innerHTML = "Our Mission Statement";

        //mission statement
        const missionMsg = document.createElement("div");
        missionMsg.id = "txt";
        missionMsg.innerHTML = `Our goal here is simple: to have you indulge in the finest of beef. Embrace your carnivorous side.`;

        //append msg to mission and mission to txt-container
        mission.appendChild(missionMsg);
        container.appendChild(mission);

    }

    founderTxt();
    missionStatement();

    //initial display = none
    about.style.display = "none";
}

export{about, makeAbout}