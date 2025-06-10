# 🎤 Webinar Listing App

A modern **Next.js 14 App Router** application that lists upcoming webinars and allows users to view detailed information for each.

---

## 🔗 Links

- 🌐 **Live Site**: [https://webinar-app.vercel.app](https://webinar-app.vercel.app) <!-- Replace if needed -->
- 💻 **GitHub Repo**: [https://github.com/Rahulkrpd/Webinar-](https://github.com/Rahulkrpd/Webinar-)

---

## 🚀 Features

- 📅 Lists of webinars with title, speaker, date, and description
- 📄 Dynamic route for individual webinar details
- 🌓 Dark mode friendly design
- ⚡ Fully client-rendered with fast routing
- 🎨 Clean and modern UI using Tailwind CSS

---

## 🧠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Tabler Icons
- **Routing**: App Router (dynamic routing)
- **Deployment**: Vercel (recommended)

---

## 📁 Folder Structure

```bash
app/
│
├── page.tsx                      # Default route (can link or redirect to /webinars)
│
├── webinars/                    # Lists all webinars
│   └── page.tsx
│
├── webinar/                     # Contains dynamic route for individual webinar
│   └── [id]/                    # Dynamic segment
│       └── page.tsx             # Detailed view for each webinar
│
components/
│   └── ui/
│       └── background-gradient.tsx  # UI animation component
