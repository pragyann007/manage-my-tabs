const saveBtn = document.querySelector("#saveSessions");
const sessionInput = document.querySelector("#sessionName");
const sessionsContainer = document.querySelector("#sessions");

/* --------------------------
   TAB SWITCHING SYSTEM
---------------------------*/

const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        // remove active from buttons
        tabButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        // show correct tab
        const target = btn.dataset.tab;

        tabContents.forEach(content => {
            content.classList.remove("active");
        });

        document.getElementById(target).classList.add("active");

        
        if (target === "vault") {
            displaySessions();
        }
    });
});



saveBtn.addEventListener("click", saveSessions);

async function saveSessions() {

    const tabs = await chrome.tabs.query({});

    const urls = tabs.map(tab => ({
        title: tab.title,
        url: tab.url
    }));

    const name = sessionInput.value.trim();

    if (!name) {
        alert("Please enter session name");
        return;
    }

    chrome.storage.local.get(["sessions"], (result) => {

        const sessions = result.sessions || [];

        sessions.push({
            id: Date.now(),
            name,
            tabs: urls,
            createdAt: new Date()
        });

        chrome.storage.local.set({ sessions });

        sessionInput.value = "";
        alert("Session saved!");
    });
}



function displaySessions() {

    chrome.storage.local.get(["sessions"], (result) => {

        sessionsContainer.innerHTML = "";

        const sessions = result.sessions || [];

        if (sessions.length === 0) {
            sessionsContainer.innerHTML = "<p>No sessions saved</p>";
            return;
        }

        sessions.forEach(session => {

            const div = document.createElement("div");
            div.className = "session-card";

            div.innerHTML = `
                <h3>${session.name}</h3>
                <small>${session.tabs.length} tabs</small>

                <div style="margin-top:8px; display:flex; gap:6px;">
                    <button class="restore-btn">Restore</button>
                    <button class="delete-btn">Delete</button>
                </div>
            `;

            // Restore
            div.querySelector(".restore-btn")
                .addEventListener("click", () => {
                    restoreSession(session.id);
                });

            // Delete
            div.querySelector(".delete-btn")
                .addEventListener("click", () => {
                    deleteSession(session.id);
                });

            sessionsContainer.appendChild(div);
        });
    });
}


async function restoreSession(id) {

    await chrome.storage.local.get(["sessions"], (result) => {

        const session = (result.sessions || []).find(s => s.id === id);

        console.log(session)
        if (!session) return;

        session.tabs.forEach(tab => {
            chrome.tabs.create({ url: tab.url });
        });
    });
}


function deleteSession(id) {

    chrome.storage.local.get(["sessions"], (result) => {

        let sessions = result.sessions || [];

        // remove session
        sessions = sessions.filter(session => session.id !== id);

        chrome.storage.local.set({ sessions }, () => {
            displaySessions(); // refresh UI
        });
    });
}