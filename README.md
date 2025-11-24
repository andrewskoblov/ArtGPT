🎨 ArtGPT - Digital Assistant

An intelligent, conversational AI assistant designed to support staff with instant, contextual guidance for everyday workflows. Built as an MVP demonstrating learning experience design, conversational AI development, and user-centered support systems.

🌟 Project Overview:
ArtGPT addresses a common challenge in creative workplaces: staff need quick answers to workflow questions without disrupting their work or waiting for IT support. This digital assistant provides instant, level-appropriate guidance for Microsoft 365, Asana project management, and museum-specific operations.

✨ Key Features:

🤖 Smart Conversational Interface

Natural language query processing with fuzzy matching algorithm
Handles typos and variations (e.g., "creat tsk" → "create task")
Contextual responses based on keyword matching and similarity scoring

📚 Comprehensive Knowledge Base

Microsoft 365: Excel formulas, SharePoint uploads, Teams meetings, Outlook rules
Asana: Task creation, assignment, due dates, project management
Whitney Workflows: Collections database, exhibition planning, visitor services, education programs
20+ workflow scenarios with 3 experience levels each

⚙️ Adaptive Learning Experience

Beginner: Detailed step-by-step instructions with screenshots guidance
Intermediate: Concise tips with keyboard shortcuts and best practices
Advanced: Technical details, power user features, system integrations

📊 Usage Analytics Dashboard

Real-time interaction tracking
Success rate monitoring (resolved vs. unresolved queries)
Category breakdown of question types
CSV export for deeper analysis and reporting

🎯 User-Centered Design

Clean, museum-inspired interface with professional color palette
Responsive layout optimized for desktop workflows
Typing indicators and smooth animations for natural conversation flow
Accessible color contrast and clear visual hierarchy

🛠️ Technical Implementation
Built With:
HTML5: Semantic structure and accessibility
CSS3: Custom styling with gradient backgrounds and smooth animations
Vanilla JavaScript: No frameworks - demonstrates core programming skills
Levenshtein Distance Algorithm: Fuzzy string matching for typo tolerance

Architecture Highlights

Client-side processing: No backend required, runs entirely in browser
Modular knowledge base: Easy to extend with new categories and questions
State management: Tracks user level, interaction history, and analytics
Export functionality: Generates CSV files for usage analysis

🚀 Getting Started
Prerequisites:
Any modern web browser (Chrome, Firefox, Safari, Edge)
No installation or server required!

Installation:
Clone the repository
bashgit clone https://github.com/YOUR-USERNAME/artgpt-assistant.git
cd artgpt-assistant

Open in browser
bash# Simply open index.html in your browser
# Or use a local server:
python -m http.server 8000
# Then visit: http://localhost:8000

Start asking questions!


"How do I create a task in Asana?"
"How do I schedule a Teams meeting?"
"What's the exhibition planning workflow?"

📖 Usage Examples
Basic Query
User: "How do I upload to SharePoint?"
ArtGPT: [Provides level-appropriate instructions for SharePoint upload]
Handling Typos
User: "how do i creat tsk in asana?"
ArtGPT: [Recognizes intent and provides task creation steps]
Adjusting Experience Level

Click Settings (⚙️) button:
Select your experience level
Responses automatically adjust in detail and complexity

Exporting Analytics:
Click Analytics (📊) button
Review usage statistics
Click "Export CSV" for detailed interaction logs

🤝 Contributing
This is a portfolio project, but feedback and suggestions are welcome!

Fork the repository
Create a feature branch (git checkout -b feature/improvement)
Commit your changes (git commit -m 'Add some improvement')
Push to the branch (git push origin feature/improvement)
Open a Pull Request

📝 Knowledge Base Structure
The knowledge base is organized by category:

asana: Project management workflows
microsoft365: Office suite tools
whitney: Museum-specific processes
general: Help and meta information

Each entry includes:

Keywords array for matching
Three response levels (beginner, intermediate, advanced)
Common typo variations
