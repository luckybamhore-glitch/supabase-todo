/* UI-ONLY static mock data — no logic, no backend. */

export const tasks = [
  {
    id: 1,
    title: "Design new landing page hero",
    desc: "Finalize hero copy + interactive prototype in Figma",
    tag: "Design",
    tagStyle: "bg-violet-100 text-violet-700 ring-violet-200",
    dot: "bg-violet-500",
    priority: "High",
    priorityStyle: "bg-rose-50 text-rose-600 ring-rose-200",
    time: "Today · 10:30 AM",
    avatars: ["AK", "JM"],
    avatarColors: [
      "bg-gradient-to-br from-violet-500 to-fuchsia-500",
      "bg-gradient-to-br from-sky-500 to-blue-600",
    ],
    done: false,
    accent: "border-violet-500",
  },
  {
    id: 2,
    title: "Review Supabase auth flow",
    desc: "Check magic-link expiry, RLS policies and redirects",
    tag: "Development",
    tagStyle: "bg-sky-100 text-sky-700 ring-sky-200",
    dot: "bg-sky-500",
    priority: "Medium",
    priorityStyle: "bg-amber-50 text-amber-700 ring-amber-200",
    time: "Today · 1:00 PM",
    avatars: ["RS"],
    avatarColors: ["bg-gradient-to-br from-emerald-500 to-teal-600"],
    done: false,
    accent: "border-sky-500",
  },
  {
    id: 3,
    title: "Team standup notes + sprint plan",
    desc: "Share Q4 roadmap update in Notion and Slack",
    tag: "Meeting",
    tagStyle: "bg-emerald-100 text-emerald-700 ring-emerald-200",
    dot: "bg-emerald-500",
    priority: "Low",
    priorityStyle: "bg-slate-100 text-slate-600 ring-slate-200",
    time: "Today · 3:45 PM",
    avatars: ["AK", "TP", "LZ"],
    avatarColors: [
      "bg-gradient-to-br from-orange-500 to-rose-500",
      "bg-gradient-to-br from-indigo-500 to-violet-600",
      "bg-gradient-to-br from-cyan-500 to-sky-600",
    ],
    done: true,
    accent: "border-emerald-500",
  },
  {
    id: 4,
    title: "Prepare client presentation deck",
    desc: "12 slides · metrics, timeline and next milestones",
    tag: "Work",
    tagStyle: "bg-orange-100 text-orange-700 ring-orange-200",
    dot: "bg-orange-500",
    priority: "High",
    priorityStyle: "bg-rose-50 text-rose-600 ring-rose-200",
    time: "Tomorrow · 9:00 AM",
    avatars: ["MJ"],
    avatarColors: ["bg-gradient-to-br from-pink-500 to-rose-600"],
    done: false,
    accent: "border-orange-500",
  },
];

export const upcoming = [
  { d: "28", m: "SEP", title: "Product launch review", time: "10:00 AM", color: "bg-violet-500" },
  { d: "30", m: "SEP", title: "Design system audit", time: "2:30 PM", color: "bg-sky-500" },
  { d: "02", m: "OCT", title: "Quarterly planning", time: "11:00 AM", color: "bg-emerald-500" },
];

export const stats = [
  {
    label: "Total Tasks",
    value: "48",
    sub: "+6 this week",
    icon: "M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",
    bg: "from-violet-500 to-fuchsia-500",
    bar: "w-[72%]",
    barBg: "bg-violet-500",
  },
  {
    label: "In Progress",
    value: "12",
    sub: "4 due today",
    icon: "M12 8v4l3 3M21 12a9 9 0 1 1-9-9 9 9 0 0 1 9 9z",
    bg: "from-sky-500 to-blue-600",
    bar: "w-[45%]",
    barBg: "bg-sky-500",
  },
  {
    label: "Completed",
    value: "32",
    sub: "86% rate",
    icon: "M22 11.1V12a10 10 0 1 1-5.93-9.14M22 4 12 14l-3-3",
    bg: "from-emerald-500 to-teal-600",
    bar: "w-[86%]",
    barBg: "bg-emerald-500",
  },
  {
    label: "Overdue",
    value: "04",
    sub: "Needs attention",
    icon: "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01",
    bg: "from-orange-500 to-rose-500",
    bar: "w-[18%]",
    barBg: "bg-orange-500",
  },
];

export const menuItems = [
  { label: "Dashboard", active: true, icon: "M3 12l9-9 9 9M5 10v10a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V10" },
  { label: "My Tasks", active: false, badge: "12", icon: "M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" },
  { label: "Calendar", active: false, icon: "M8 2v4M16 2v4M3 9h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" },
  { label: "Analytics", active: false, icon: "M18 20V10M12 20V4M6 20v-6" },
  { label: "Team", active: false, icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" },
];

export const workspaces = [
  { n: "Personal", c: "bg-violet-500", count: "8" },
  { n: "Work Projects", c: "bg-sky-500", count: "14" },
  { n: "Side Hustle", c: "bg-orange-500", count: "5" },
];

export const filters = [
  { l: "All tasks · 12", on: true },
  { l: "Today", on: false },
  { l: "Upcoming", on: false },
  { l: "Completed", on: false },
];

export const tags = ["#design ×8", "#dev ×12", "#urgent ×3", "#meeting ×5", "#research ×4", "+ New"];
