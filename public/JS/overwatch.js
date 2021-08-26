class OWProfile {
    constructor(data) {
        this.name = "SuperMage";
        this.icon = data["icon"];
        this.border = data["levelIcon"];
        this.level = data["level"];
        this.wins = data["gamesWon"];
        this.tank = new Role("tank", data);
        this.damage = new Role("damage", data);
        this.support = new Role("support", data);
    }
}

class Role {
    constructor(role, data) {
        const roleIndex = {"tank": 0, "damage": 1, "support": 2};
        this.role = role;
        this.roleIcon = data["ratings"][roleIndex[role]]["roleIcon"];
        this.rankIcon = data["ratings"][roleIndex[role]]["rankIcon"];
        this.sr = data["ratings"][roleIndex[role]]["level"];
    }
}

const addHeader = (parentNode, headerType, innerText, id="", className="") => {
    const newNode =  document.createElement(headerType);
    newNode.id = id;
    newNode.className = className;
    newNode.innerText = innerText;
    parentNode.appendChild(newNode);
    return newNode;
};

const addImg = (parentNode, src, alt, id="", className="") => {
    const newNode =  document.createElement("img");
    newNode.id = id;
    newNode.className = className;
    newNode.src = src;
    newNode.alt = alt;
    parentNode.appendChild(newNode);
    return newNode;
};

const addDiv = (parentNode, bgImg="", innerText="", id="", className="") => {
    const newNode =  document.createElement("div");
    newNode.id = id;
    newNode.className = className;
    newNode.innerText = innerText;
    newNode.style.backgroundImage = bgImg !== "" ? `url(${bgImg})` : "none";
    parentNode.appendChild(newNode);
    return newNode;
};

const displayOWProfile = () => {
    fetch("https://ovrstat.com/stats/pc/SuperMage-149910", {
        method: 'GET',
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
    }).then(response => response.json()).then(data => {
        const myOWProfile = new OWProfile(data);
        const owStatsContainer = document.getElementById("ow-stats-content");

        // Adds to the Stats Container
        addImg(owStatsContainer, myOWProfile.icon, "Player Icon", "ow-profile-icon");
        addHeader(owStatsContainer, "h1", myOWProfile.name, "ow-username");
        addHeader(owStatsContainer, "h3", myOWProfile.wins + " Games Won", "ow-games-won");
        addDiv(owStatsContainer, myOWProfile.border, myOWProfile.level, "ow-level");
        const srContainer = addDiv(owStatsContainer, "", "", "ow-sr-container");

        // Adds to Main SR Container
        const individualSRContainers = {
            tank: addDiv(srContainer, "", "", "", "ow-individual-role-sr-container"),
            damage: addDiv(srContainer, "", "", "", "ow-individual-role-sr-container"),
            support: addDiv(srContainer, "", "", "", "ow-individual-role-sr-container")
        };

        // Adds to individual SR Containers
        for (const [role, containerNode] of Object.entries(individualSRContainers)) {
            addImg(containerNode, myOWProfile[role].roleIcon, `${role} Role Icon`, "", "ow-role-icon");
            addImg(containerNode, myOWProfile[role].rankIcon, `${role} Rank Icon`, "", "ow-rank-icon");
            addHeader(containerNode, "h4", myOWProfile[role].sr, "", "ow-role-sr-text");
        }
    });
}

window.onload = displayOWProfile;

const dropDownArrow = () => {

};

