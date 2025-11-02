
const knowledgeBase = {
    asana: [
        {
            keywords: ['create task', 'new task', 'add task', 'make task', 'creat tsk'],
            beginner: "To create a task in Asana:\n1. Open your project\n2. Click the '+' button or press Tab+Q\n3. Type your task name\n4. Press Enter\n5. Add details like due date and assignee by clicking on the task",
            intermediate: "Create an Asana task: Click '+' in your project view or use Tab+Q. Type the task name, press Enter, then add assignee, due date, and description. Pro tip: Use '@' to mention team members and '#' to link projects.",
            advanced: "Quick task creation: Tab+Q shortcut, then use inline commands: '@name' for assignee, '#project' for tagging, '^date' for due dates. Leverage task templates for recurring workflows via project settings."
        },
        {
            keywords: ['assign task', 'assign to', 'who should do', 'asign tsk'],
            beginner: "To assign a task to someone:\n1. Click on the task to open it\n2. Look for the 'Assignee' field (shows a person icon)\n3. Click on it and type the person's name\n4. Select them from the list\n5. They'll get a notification!",
            intermediate: "Assign tasks by clicking the assignee field in the task details pane. Type to search team members. You can also drag tasks between sections organized by assignee in Board view.",
            advanced: "Assign via '@mention' when creating tasks, use Board view with assignee columns for bulk reassignment, or leverage Rules to auto-assign based on task criteria."
        },
        {
            keywords: ['due date', 'deadline', 'when due', 'dew date', 'deadlne'],
            beginner: "To set a due date:\n1. Open your task\n2. Find the 'Due date' field (calendar icon)\n3. Click it and pick a date from the calendar\n4. The date will show on your task\n5. You'll get reminders as it approaches",
            intermediate: "Set due dates by clicking the calendar icon in task details. Type dates naturally like 'tomorrow' or 'next Friday'. Color coding helps: red for overdue, yellow for today, orange for upcoming.",
            advanced: "Use natural language date entry, set recurring due dates for repeating tasks, leverage dependencies to auto-adjust dates when predecessors change."
        }
    ],
    microsoft365: [
        {
            keywords: ['excel formula', 'excel function', 'calculate excel', 'exel formla'],
            beginner: "To create a formula in Excel:\n1. Click the cell where you want the result\n2. Type = (equals sign)\n3. Type your formula (like =A1+B1 to add two cells)\n4. Press Enter\n5. Excel will calculate and show the result",
            intermediate: "Excel formulas start with '='. Common functions: SUM(range), AVERAGE(range), IF(condition, true, false). Reference cells with column letter + row number. Drag the fill handle to copy formulas down.",
            advanced: "Use structured references in Tables, combine functions like SUMIFS/VLOOKUP, leverage array formulas with Ctrl+Shift+Enter, use named ranges for clarity. F4 toggles absolute/relative references."
        },
        {
            keywords: ['sharepoint upload', 'share file', 'upload document', 'sharepint uplod'],
            beginner: "To upload a file to SharePoint:\n1. Go to your team's SharePoint site\n2. Click 'Documents' or your folder\n3. Click the 'Upload' button at the top\n4. Choose 'Files' from the menu\n5. Select your file and click 'Open'",
            intermediate: "Upload to SharePoint: Navigate to the library, use Upload button or drag-and-drop. Check in/out for version control. Set metadata after upload for better organization. Sync to OneDrive for offline access.",
            advanced: "Bulk upload via OneDrive sync, use metadata for classification, leverage content types and workflows. Set permissions at folder level for security, use version history for document management."
        },
        {
            keywords: ['teams meeting', 'schedule meeting', 'video call', 'tems meting'],
            beginner: "To schedule a Teams meeting:\n1. Open Microsoft Teams\n2. Click 'Calendar' on the left side\n3. Click 'New meeting' button\n4. Add a title and select people to invite\n5. Choose date and time\n6. Click 'Send' to invite everyone",
            intermediate: "Schedule in Teams Calendar or Outlook (synced automatically). Add Teams link to any Outlook meeting via 'Teams Meeting' button. Use scheduling assistant to find mutual availability. Set up recurring meetings for regular check-ins.",
            advanced: "Create channel meetings for team-wide access, use meeting templates for consistent agendas, leverage live captions/recording for accessibility, integrate Planner for action items."
        },
        {
            keywords: ['outlook rules', 'email organization', 'filter email', 'outlok ruls'],
            beginner: "To create an email rule in Outlook:\n1. Right-click an email you want to organize\n2. Choose 'Rules' then 'Create Rule'\n3. Check boxes for conditions (like from a person)\n4. Choose an action (like move to folder)\n5. Click 'OK' to save your rule",
            intermediate: "Create rules via Home > Rules > Manage Rules. Set conditions (sender, subject keywords) and actions (move, flag, forward). Use Quick Steps for one-click common tasks. Organize with folders and categories.",
            advanced: "Advanced rules with multiple conditions, server-side rules for all devices, use scripts for complex logic, leverage search folders for dynamic organization without moving emails."
        }
    ],
    whitney: [
        {
            keywords: ['artwork database', 'collection management', 'artwork record', 'artwrk databse'],
            beginner: "To look up artwork information:\n1. Open the Whitney Collections Database\n2. Use the search bar at the top\n3. Type the artist name or artwork title\n4. Click on the result to see full details\n5. You'll see provenance, condition, and exhibition history",
            intermediate: "Access Collections Database via Whitney intranet. Search by artist, title, accession number, or medium. Export records for exhibition planning. Update condition reports in the Conservation tab after review.",
            advanced: "Use advanced search filters for complex queries (date range, medium, location). Leverage API connections for digital signage updates. Batch update metadata via import tools after curatorial review."
        },
        {
            keywords: ['exhibition planning', 'show checklist', 'exhibition workflow', 'exibition planing'],
            beginner: "Exhibition planning workflow:\n1. Curatorial creates initial checklist in shared folder\n2. Registrar reviews availability and condition\n3. Conservation assesses treatment needs\n4. Design team creates layout in shared drive\n5. Regular check-ins via Teams channel",
            intermediate: "Exhibition workflow uses Asana project templates. Key milestones: checklist finalization (6 months out), loan requests (4 months), installation plan (2 months). Use Whitney Teams 'Exhibitions' channel for coordination.",
            advanced: "Leverage integrated workflow: Collections DB → Asana tasks → SharePoint documentation. Use Power Automate for status notifications. Track in centralized dashboard linking all systems."
        },
        {
            keywords: ['visitor services', 'front desk', 'admission', 'vistor servces'],
            beginner: "Front desk procedures:\n1. Greet visitors warmly\n2. Check if they have tickets (scan QR code)\n3. Provide admission buttons and map\n4. Share current exhibitions info\n5. Direct to coat check if needed\nRadio Security for any issues",
            intermediate: "Use Altru ticketing system for admissions. Process memberships, validate comps, handle group reservations. Follow accessibility protocols for visitors with disabilities. Escalate complex issues to Visitor Services Manager.",
            advanced: "Monitor capacity in real-time, coordinate timed entry during peak times, use POS for retail transactions, analyze visitor flow data for operational improvements."
        },
        {
            keywords: ['education program', 'school visit', 'public program', 'educaton progam'],
            beginner: "To coordinate an education program:\n1. Check program calendar in Asana\n2. Confirm educator assignment\n3. Prepare materials from SharePoint folder\n4. Coordinate with Visitor Services for space\n5. Send confirmation email to participants",
            intermediate: "Education programs tracked in Asana 'Education' project. Materials in SharePoint > Public Programs > Resources. Use registration database for attendance. Follow up via email template with evaluation survey.",
            advanced: "Integrate registration system with CRM, track outcomes metrics in dashboard, use data to optimize programming, coordinate cross-departmental resources via automated workflows."
        }
    ],
    general: [
        {
            keywords: ['help', 'what can you do', 'how to use'],
            beginner: "I'm ArtGPT, the Whitney Digital Assistant! I can help you with:\n• Microsoft 365 (Outlook, Teams, Excel, SharePoint)\n• Asana project management\n• Whitney-specific workflows\n\nJust ask me a question like 'How do I create a task in Asana?' or 'How do I upload to SharePoint?'",
            intermediate: "I provide step-by-step guidance for common workflows. Ask about Microsoft 365 tools, Asana, or Whitney processes. You can adjust my response detail level in Settings. Try questions like 'How do I schedule a Teams meeting?' or 'What's the exhibition planning workflow?'",
            advanced: "AI assistant providing contextual workflow support. Coverage includes M365 suite, Asana, Whitney operational procedures. Responses adapt to your experience level. Query about specific features, shortcuts, or complex workflows."
        }
    ]
};

// State
let currentLevel = 'intermediate';
let interactionLog = [];
let showSettings = false;
let showAnalytics = false;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupEventListeners();
    addWelcomeMessage();
});

function initializeApp() {
    updateLevelButtons();
}

function setupEventListeners() {
    document.getElementById('settingsBtn').addEventListener('click', () => {
        showSettings = !showSettings;
        document.getElementById('settingsPanel').classList.toggle('hidden');
        if (showSettings) {
            document.getElementById('analyticsPanel').classList.add('hidden');
            showAnalytics = false;
        }
    });

    document.getElementById('analyticsBtn').addEventListener('click', () => {
        showAnalytics = !showAnalytics;
        document.getElementById('analyticsPanel').classList.toggle('hidden');
        if (showAnalytics) {
            document.getElementById('settingsPanel').classList.add('hidden');
            showSettings = false;
            updateAnalytics();
        }
    });

    document.getElementById('apiToggle').addEventListener('click', () => {
        document.getElementById('apiContent').classList.toggle('hidden');
    });

    document.querySelectorAll('.level-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            currentLevel = e.target.dataset.level;
            updateLevelButtons();
            updateLevelDescription();
        });
    });

    document.getElementById('sendBtn').addEventListener('click', sendMessage);

    document.getElementById('messageInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    document.getElementById('exportBtn').addEventListener('click', exportLogs);
}

function updateLevelButtons() {
    document.querySelectorAll('.level-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.level === currentLevel) {
            btn.classList.add('active');
        }
    });
}

function updateLevelDescription() {
    const descriptions = {
        beginner: 'Detailed step-by-step instructions',
        intermediate: 'Concise guidance with helpful tips and shortcuts',
        advanced: 'Technical details, keyboard shortcuts, and advanced features'
    };
    document.querySelector('.level-description').textContent = descriptions[currentLevel];
}

function addWelcomeMessage() {
    const message = `Welcome to ArtGPT, the Whitney Digital Assistant! I'm here to help with Microsoft 365, Asana, and Whitney workflows.

Your current experience level is set to: **${currentLevel}**

Try asking: "How do I create a task in Asana?" or "How do I schedule a Teams meeting?"

💡 Don't worry about typos - I can understand you even with spelling mistakes!`;
    
    addMessage('bot', message);
}

function sendMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    addMessage('user', message);
    input.value = '';
    
    showTypingIndicator();
    
    setTimeout(() => {
        const response = findResponse(message);
        hideTypingIndicator();
        addMessage('bot', response.content);
        logInteraction(message, response.content, response.category);
    }, 800);
}

function addMessage(type, content) {
    const chatArea = document.getElementById('chatArea');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = type === 'bot' ? '🎨' : '👤';
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.textContent = content;
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(contentDiv);
    chatArea.appendChild(messageDiv);
    
    chatArea.scrollTop = chatArea.scrollHeight;
}

function showTypingIndicator() {
    const chatArea = document.getElementById('chatArea');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot';
    typingDiv.id = 'typingIndicator';
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = '🎨';
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    
    const indicator = document.createElement('div');
    indicator.className = 'typing-indicator';
    indicator.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
    
    contentDiv.appendChild(indicator);
    typingDiv.appendChild(avatar);
    typingDiv.appendChild(contentDiv);
    chatArea.appendChild(typingDiv);
    
    chatArea.scrollTop = chatArea.scrollHeight;
}

function hideTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) {
        indicator.remove();
    }
}

function levenshteinDistance(str1, str2) {
    const matrix = [];
    
    for (let i = 0; i <= str2.length; i++) {
        matrix[i] = [i];
    }
    
    for (let j = 0; j <= str1.length; j++) {
        matrix[0][j] = j;
    }
    
    for (let i = 1; i <= str2.length; i++) {
        for (let j = 1; j <= str1.length; j++) {
            if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }
    
    return matrix[str2.length][str1.length];
}

function getSimilarity(str1, str2) {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
    
    if (longer.length === 0) return 1.0;
    
    const distance = levenshteinDistance(longer, shorter);
    return (longer.length - distance) / longer.length;
}

function fuzzyMatch(query, keyword) {
    const queryLower = query.toLowerCase();
    const keywordLower = keyword.toLowerCase();
    
    if (queryLower.includes(keywordLower)) return 1.0;
    
    const queryWords = queryLower.split(/\s+/);
    const keywordWords = keywordLower.split(/\s+/);
    
    let maxSimilarity = 0;
    for (const qWord of queryWords) {
        for (const kWord of keywordWords) {
            const sim = getSimilarity(qWord, kWord);
            if (sim > maxSimilarity) {
                maxSimilarity = sim;
            }
        }
    }
    
    return maxSimilarity;
}

function findResponse(query) {
    let bestMatch = null;
    let bestScore = 0;
    let bestCategory = 'general';
    
    for (const [category, items] of Object.entries(knowledgeBase)) {
        for (const item of items) {
            for (const keyword of item.keywords) {
                const score = fuzzyMatch(query, keyword);
                if (score > bestScore) {
                    bestScore = score;
                    bestMatch = item;
                    bestCategory = category;
                }
            }
        }
    }
    
    if (bestScore > 0.6 && bestMatch) {
        return {
            content: bestMatch[currentLevel],
            category: bestCategory,
            resolved: true
        };
    }
    
    return {
        content: "I'm not sure I understood that question. I can help with:\n\n• Asana (creating tasks, assigning, due dates)\n• Microsoft 365 (Excel, SharePoint, Teams, Outlook)\n• Whitney workflows (collections, exhibitions, visitor services, education)\n\nCould you rephrase your question or try asking about one of these topics?",
        category: 'unknown',
        resolved: false
    };
}

function logInteraction(query, response, category) {
    const interaction = {
        timestamp: new Date().toISOString(),
        query: query,
        response: response,
        category: category,
        level: currentLevel,
        resolved: category !== 'unknown'
    };
    interactionLog.push(interaction);
}

function updateAnalytics() {
    const total = interactionLog.length;
    const resolved = interactionLog.filter(i => i.resolved).length;
    const successRate = total > 0 ? Math.round((resolved / total) * 100) : 0;
    
    document.getElementById('totalInteractions').textContent = total;
    document.getElementById('resolvedQueries').textContent = resolved;
    document.getElementById('successRate').textContent = successRate + '%';
    
    const categoryCounts = {};
    interactionLog.forEach(log => {
        categoryCounts[log.category] = (categoryCounts[log.category] || 0) + 1;
    });
    
    const categoryList = document.getElementById('categoryList');
    categoryList.innerHTML = '';
    
    if (Object.keys(categoryCounts).length === 0) {
        categoryList.innerHTML = '<div style="color: #94a3b8; font-style: italic;">No queries yet</div>';
    } else {
        for (const [category, count] of Object.entries(categoryCounts).sort((a, b) => b[1] - a[1])) {
            const item = document.createElement('div');
            item.className = 'category-item';
            item.innerHTML = `<span>${category}</span><span>${count}</span>`;
            categoryList.appendChild(item);
        }
    }
}

function exportLogs() {
    if (interactionLog.length === 0) {
        alert('No data to export yet!');
        return;
    }
    
    let csv = 'Timestamp,Query,Category,Level,Resolved\n';
    
    interactionLog.forEach(log => {
        const query = log.query.replace(/"/g, '""');
        csv += `"${log.timestamp}","${query}","${log.category}","${log.level}","${log.resolved}"\n`;
    });
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `artgpt-analytics-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}