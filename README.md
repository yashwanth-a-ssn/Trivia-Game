# 🎙️ Wolfrahh Presents: Family Feud - Trivia Game

A high-performance, real-time trivia tournament system built for professional live events. This engine features a sophisticated dual-screen architecture that synchronizes an **Admin Control Panel** with a dynamic **Audience Display**.

---

## 🚀 Key Features

* **Dual-Screen Synchronization**: Utilizes the `BroadcastChannel` API for instantaneous, lag-free updates between the host laptop and the audience projector.
* **Automated Background Logging**: A specialized engine silently records every score, answer, face-off, and winner into a human-readable `.txt` file using the File System Access API.
* **Rank-Based Tournament Logic**: Automatic progression management through **Qualifiers** (Full Field), **Quarterfinals** (Top 8), **Semifinals** (Top 4), and **Finals** (Top 2).
* **Intelligent Pairing**: In advanced rounds, the system automatically pairs contestants by their current rank (Rank 1 vs. Rank 2, Rank 3 vs. Rank 4, etc.) to ensure high-stakes competition.
* **Premium Visuals**: Includes automated confetti celebrations, a 3D-style rising podium for champions, and dedicated interactive screens for rules and team introductions.
* **Multi-Question Face-Offs**: Admins have full control over the number of questions per match in every round, allowing for deep, strategic face-offs.

---

## 💻 Technical Setup

### **Hosting Environment**
* **Direct File Open**: The system is designed to run seamlessly by opening `admin.html` directly in any modern browser.
* **Local Server (Recommended)**: For optimal stability, use **VS Code Live Server**.
* **⚠️ CRITICAL FOR LIVE SERVER USERS**: If using Live Server, you **must** save your Game Log file in a **different directory** than your project folder. Saving inside the project directory will cause Live Server to detect a file change and refresh the Admin window, wiping your current game state.

### **Browser Requirement**
* This engine requires **Google Chrome** or **Microsoft Edge** to support the automated background logging features.

---

## 🚀 Host's Guide to Success

### **1. Customizing the Welcome Screen**
Before your event, you can personalize the opening title screen. 
Open `audience.html`, scroll to approximately line 98, and locate this block:
```html
<div id="screen-welcome" class="screen">
      <h1 style="font-size: 4rem;">Wolfrahh Presents:</h1>
      <h1 style="font-size: 4rem;">Family Feud - Trivia Game🎉</h1>
</div>
```
### **2. Preparation**
The system uses `.csv` files for data management. Prepare your files based on these samples:

* **Questions**: Refer to `Question_List_Format.csv` for the required structure and `Question_List` as a functional sample.
* **Teams**: Refer to `Teams_List_Format.csv` for the required structure and `Teams.csv` as a functional sample.

### **3. Launching the Game**
* Open `admin.html`.
* Enter your **Game Name** on the Home screen.
* Click **New Game**; you will be prompted once to choose a save location for your background log.
* The **Audience Window** (`audience.html`) will open automatically. Drag this tab to your secondary display/projector.

### **4. The Event Flow**
* **Home → Rules**: Choosing "New Game" automatically transitions the host to the Rules screen.
* **Rules → Teams**: After displaying rules to the audience, the interface guides you to Team Management.
* **Teams → Qualifiers**: Once teams are introduced, you proceed to the first round of setup.
* **Navigation**: You can navigate to the **Leaderboard** or **Podium** at any time between matches without damaging upcoming rounds or losing your question pool.
* **Closing the Event**: After the Finals, click the **"Complete Game & Save Log"** button on the Podium screen to safely close the text log.

---

## ⚠️ Important Operational Warnings

### **Do Not Refresh the Admin Window**
Once the game starts, **never refresh the Admin page**. Refreshing will clear the active game state and disconnect the background logging handle.

### **Emergency Recovery**
If the page is refreshed by accident:
1.  Restart the game from the Home screen.
2.  Open your **Game Log file** created earlier.
3.  Re-perform the moves recorded in the log (uploading the same files and awarding the same points) to emulate your way back to the current match state.

---

## 📊 CSV Data Specifications

### **Teams (`Teams.csv`)**
* **Header**: The first cell must be exactly `Teams`.
* **Constraint**: You must provide an **EVEN** number of teams for the pairing logic to function correctly.

### **Questions (`Question_List.csv`)**
* **Header**: Must be exactly `Question,Answer,Points`.
* **Scoring**: Supports 1 to 5 points based on response popularity.

---

## ⚖️ Tournament Rules

* **Match Tie Resolution**: Match ties are awarded to the team that won the most individual face-offs in that match. If still tied, the team that won the first question in the match is the winner.
* **Overall Leaderboard Tie Resolution**: Overall tournament ties are automatically resolved by the following hierarchy:
    1.  **Total Points** (Highest score in the current round).
    2.  **Total Questions Won** (Across the entire tournament).
    3.  **Match Winner Status** (Match winners rank higher than losers).
    4.  **Original Seed** (Order of registration in the CSV).
* **Progression Flow**:
    * **Qualifiers**: Includes all registered teams.
    * **Quarterfinals**: Top 8 ranked teams.
    * **Semifinals**: Top 4 ranked teams.
    * **Finals**: Top 2 ranked teams.