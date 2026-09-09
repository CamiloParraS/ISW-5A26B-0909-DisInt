import {
  House,
  ShoppingBag,
  Shirt,
  ChartColumn,
  Megaphone,
  MessageSquareText,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Search,
  Bell,
  ShoppingCart,
  Users,
  Calendar,
  CloudUpload,
  ArrowUp,
  ArrowDown,
  CircleArrowUp,
  Check,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";

/* Static delta pill (e.g. up 15.6% / down 6.2%) */
function Delta({ dir, value }: { dir: "up" | "down"; value: string }) {
  const up = dir === "up";
  return (
    <span
      className={`inline-flex items-center gap-0.5 text-[11px] font-bold ${
        up ? "text-[#22c55e]" : "text-[#ef4444]"
      }`}
    >
      {up ? (
        <ArrowUp size={11} strokeWidth={3} />
      ) : (
        <ArrowDown size={11} strokeWidth={3} />
      )}
      {value}
    </span>
  );
}

/* Static dropdown chip (calendar + label + chevron) */
function DateChip({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-[12px] font-semibold text-slate-500">
      <Calendar size={14} className="text-slate-400" />
      <span>{label}</span>
      <ChevronDown size={14} className="text-slate-400" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#e7e9f0] py-6 px-54">
      <div className="flex flex-1 min-h-0 overflow-hidden rounded-[28px] bg-white shadow-[0_30px_60px_-20px_rgba(30,36,52,0.25)]">
        {/* ============ SIDEBAR ============ */}
        <aside className="flex w-[232px] shrink-0 flex-col px-5 py-6">
          {/* Logo */}
          <div className="flex items-center gap-2 px-1">
            <div className="relative flex h-8 w-8 items-center justify-center text-sm font-extrabold text-white">
              <svg
                className="absolute inset-0 h-full w-full fill-[#f5a623]"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l8.5 4.9v9.8L12 21.6l-8.5-4.9V6.9L12 2z" rx="2" />
              </svg>
              <span className="relative z-10">R</span>
            </div>
            <span className="text-xl font-extrabold text-slate-900">flex</span>
          </div>

          {/* Menu */}
          <p className="mt-8 px-3 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
            Menu
          </p>
          <nav className="mt-3 flex flex-col gap-1">
            <div className="flex items-center gap-3 rounded-full bg-gradient-to-r from-[#5b53e8] to-[#4a41d6] px-4 py-2.5 text-[13px] font-bold text-white shadow-[0_12px_20px_-8px_rgba(74,65,214,0.6)]">
              <House size={18} />
              <span>Dashboard</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2.5 text-[13px] font-bold text-slate-500">
              <ShoppingBag size={18} className="text-slate-400" />
              <span>Orders</span>
              <ChevronDown size={14} className="ml-auto text-slate-400" />
            </div>
            <div className="flex items-center gap-3 px-4 py-2.5 text-[13px] font-bold text-slate-500">
              <Shirt size={18} className="text-slate-400" />
              <span>Products</span>
              <ChevronDown size={14} className="ml-auto text-slate-400" />
            </div>
            <div className="flex items-center gap-3 px-4 py-2.5 text-[13px] font-bold text-slate-500">
              <ChartColumn size={18} className="text-slate-400" />
              <span>Analytics</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2.5 text-[13px] font-bold text-slate-500">
              <Megaphone size={18} className="text-slate-400" />
              <span>Marketing</span>
              <ChevronDown size={14} className="ml-auto text-slate-400" />
            </div>
            <div className="flex items-center gap-3 px-4 py-2.5 text-[13px] font-bold text-slate-500">
              <MessageSquareText size={18} className="text-slate-400" />
              <span>Messages</span>
              <span className="ml-auto rounded-full bg-[#d9f6e5] px-2 py-0.5 text-[11px] font-bold text-[#22a45d]">
                25
              </span>
            </div>
          </nav>

          {/* Integrations */}
          <p className="mt-7 px-3 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
            Integrations
          </p>
          <div className="mt-3 flex flex-col gap-1">
            <div className="flex items-center gap-3 px-4 py-2 text-[13px] font-bold text-slate-500">
              <Image
                src="https://images.icon-icons.com/2699/PNG/512/atlassian_jira_logo_icon_170511.png"
                alt="Jira"
                width={18}
                height={18}
                className="shrink-0 rounded-[5px] bg-slate-100 object-contain"
              />
              <span>Jira</span>
            </div>

            <div className="flex items-center gap-3 px-4 py-2 text-[13px] font-bold text-slate-500">
              <Image
                src="https://images.icon-icons.com/2699/PNG/512/slack_logo_icon_170727.png"
                alt="Slack"
                width={18}
                height={18}
                className="shrink-0 rounded-[5px] bg-slate-100 object-contain"
              />
              <span>Slack</span>
            </div>

            <div className="flex items-center gap-3 px-4 py-2 text-[13px] font-bold text-slate-500">
              <Image
                src="https://images.icon-icons.com/2699/PNG/512/intercom_logo_icon_169644.png"
                alt="Intercom"
                width={18}
                height={18}
                className="shrink-0 rounded-[5px] bg-slate-100 object-contain"
              />
              <span>Intercom</span>
            </div>
          </div>

          {/* Logout */}
          <div className="mt-auto flex items-center gap-3 px-4 py-2 text-[13px] font-bold text-slate-500">
            <LogOut size={18} className="text-slate-400" />
            <span>Logout</span>
          </div>
        </aside>

        {/* ============ RIGHT SIDE ============ */}
        <div className="flex flex-1 min-w-0 flex-col">
          {/* -------- TOP BAR -------- */}
          <header className="flex h-[68px] shrink-0 items-center gap-4 px-6">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-400">
              <ChevronLeft size={16} />
            </div>
            <div className="flex flex-1 items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-[13px] text-slate-400">
              <Search size={16} />
              <span>Search</span>
            </div>
            <div className="relative ml-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f5f6f8] text-slate-500">
              <Bell size={16} />
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#5b53e8] text-[9px] font-bold text-white">
                2
              </span>
            </div>
            <div className="ml-1 flex flex-col text-right leading-tight">
              <span className="text-[10px] font-semibold text-slate-400">
                Your Balance
              </span>
              <span className="text-[13px] font-extrabold text-[#5b53e8]">
                $5.456
              </span>
            </div>
            <Image
              src="https://www.shutterstock.com/image-vector/black-woman-modern-icon-avatar-600w-2322895533.jpg"
              alt="Dude"
              width={18}
              height={18}
              className="h-9 w-9 shrink-0 rounded-full bg-slate-200"
            />

            <span className="text-[13px] font-bold text-slate-700">
              <span className="text-purple-700">Hi</span>, Lay
            </span>
          </header>

          {/* -------- MAIN -------- */}
          <div className="flex shrink-0 items-center *:gap-4  px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#5b53e8] text-white">
                <House size={18} />
              </div>
              <h1 className="text-xl font-extrabold text-slate-800">
                Dashboard
              </h1>
            </div>
            <div className="ml-auto flex items-center gap-3">
              <DateChip label="This Month" />
              <div className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#28c76f] to-[#1fa15a] px-4 py-2.5 text-[12px] font-bold text-white shadow-[0_12px_20px_-8px_rgba(31,161,90,0.6)]">
                <CloudUpload size={15} />
                <span>Download Report</span>
              </div>
            </div>
          </div>
          <main className="flex flex-1 min-h-0 flex-col gap-4 overflow-hidden rounded-[28px] bg-[#f6f7f9] p-6 mr-5">
            {/* Title row */}

            {/* Stat cards */}
            <div className="grid shrink-0 grid-cols-3 gap-4">
              {[
                {
                  icon: <ShoppingCart size={20} />,
                  label: "Total Sales",
                  value: "263k",
                  dir: "up" as const,
                  delta: "15.6%",
                },
                {
                  icon: <Users size={20} />,
                  label: "Total Visitors",
                  value: "35k",
                  dir: "down" as const,
                  delta: "6.2%",
                },
                {
                  icon: <ShoppingBag size={20} />,
                  label: "Total Orders",
                  value: "165k",
                  dir: "up" as const,
                  delta: "3.5%",
                },
              ].map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-[0_20px_40px_-24px_rgba(30,36,52,0.18)]"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eeecfb] text-[#6c63e0]">
                    {c.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold text-slate-400">
                      {c.label}
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-extrabold text-slate-800">
                        {c.value}
                      </span>
                      <Delta dir={c.dir} value={c.delta} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom area */}
            <div className="grid flex-1 min-h-0 grid-cols-2 gap-4">
              {/* ---- Online Store Sessions ---- */}
              <div className="flex min-h-0 flex-col rounded-2xl bg-white p-5 shadow-[0_20px_40px_-24px_rgba(30,36,52,0.18)]">
                <div className="flex shrink-0 items-center">
                  <h2 className="text-[15px] font-extrabold text-slate-800">
                    Online Store Sessions
                  </h2>
                  <span className="ml-auto rounded-full border border-slate-200 px-3 py-1 text-[11px] font-bold text-slate-400">
                    View Report
                  </span>
                </div>

                <div className="mt-4 flex shrink-0 items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eeecfb] text-[#6c63e0]">
                    <Users size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold text-slate-400">
                      Visitors
                    </span>
                    <span className="text-2xl font-extrabold text-slate-800">
                      68
                    </span>
                  </div>
                  <div className="ml-auto flex flex-col items-end gap-1">
                    <Delta dir="up" value="15.6%" />
                    <div className="flex items-center gap-2">
                      <span className="text-[13px] font-bold text-slate-500">
                        26
                      </span>
                      <Delta dir="down" value="1.6%" />
                    </div>
                  </div>
                </div>

                <div className="my-4 h-px shrink-0 bg-slate-100" />

                <div className="flex shrink-0 items-center">
                  <h3 className="text-[13px] font-extrabold text-slate-800">
                    Sessions Over Time
                  </h3>
                  <div className="ml-auto flex items-center gap-2 rounded-lg border border-slate-200 px-2.5 py-1 text-[11px] font-semibold text-slate-500">
                    <Calendar size={13} className="text-slate-400" />
                    <span>February</span>
                    <ChevronDown size={13} className="text-slate-400" />
                  </div>
                </div>

                {/* Chart */}
                <div className="mt-3 flex flex-1 min-h-0 gap-2">
                  <div className="flex shrink-0 flex-col justify-between py-0 text-[10px] font-semibold text-slate-300">
                    <span>15</span>
                    <span>10</span>
                    <span>5</span>
                    <span>0</span>
                  </div>
                  <svg
                    viewBox="0 0 620 190"
                    preserveAspectRatio="none"
                    className="h-full w-full"
                  >
                    <defs>
                      <linearGradient
                        id="chartFill"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#6c63e0"
                          stopOpacity="0.22"
                        />
                        <stop
                          offset="100%"
                          stopColor="#6c63e0"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    {[8, 68, 128, 182].map((y) => (
                      <line
                        key={y}
                        x1="0"
                        y1={y}
                        x2="620"
                        y2={y}
                        stroke="#eef0f4"
                        strokeWidth="1"
                      />
                    ))}
                    <path
                      d="M0,150 C45,150 65,128 105,128 C150,128 165,152 205,150 C255,147 270,120 315,126 C360,132 375,150 415,142 C455,134 480,80 525,58 C560,40 595,20 620,12 L620,190 L0,190 Z"
                      fill="url(#chartFill)"
                    />
                    <path
                      d="M0,150 C45,150 65,128 105,128 C150,128 165,152 205,150 C255,147 270,120 315,126 C360,132 375,150 415,142 C455,134 480,80 525,58 C560,40 595,20 620,12"
                      fill="none"
                      stroke="#5b53e8"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Pagination */}
                <div className="mt-3 flex shrink-0 items-center justify-center gap-3 text-[12px] font-bold text-slate-400">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200">
                    <ChevronLeft size={13} />
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#5b53e8] text-white">
                    21
                  </span>
                  <span>22</span>
                  <span>23</span>
                  <span>24</span>
                  <span>25</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200">
                    <ChevronRight size={13} />
                  </span>
                </div>
              </div>

              {/* ---- Right column ---- */}
              <div className="flex min-h-0 flex-col gap-4">
                {/* Need More Stats */}
                <div className="relative flex shrink-0 flex-col justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-[#5b53e8] to-[#4a41d6] p-5">
                  <h2 className="text-lg font-extrabold text-white">
                    Need More Stats?
                  </h2>
                  <p className="mt-1 text-[12px] font-semibold text-white/70">
                    Upgrade to pro for added benefits.
                  </p>
                  <div className="mt-4 flex w-fit items-center gap-2 rounded-xl bg-gradient-to-r from-[#28c76f] to-[#1fa15a] px-4 py-2.5 text-[12px] font-bold text-white shadow-[0_12px_20px_-8px_rgba(31,161,90,0.5)]">
                    <CircleArrowUp size={15} />
                    <span>Go Pro Now</span>
                  </div>
                  {/* illustration image link */}
                  <span className="absolute right-5 top-4 h-20 w-24 rounded-lg bg-white/10" />
                </div>

                {/* Conversion */}
                <div className="flex flex-1 min-h-0 flex-col rounded-2xl bg-white p-5 shadow-[0_20px_40px_-24px_rgba(30,36,52,0.18)]">
                  <h2 className="shrink-0 text-[15px] font-extrabold text-slate-800">
                    Conversion
                  </h2>

                  <div className="flex flex-1 min-h-0 flex-col items-center justify-center">
                    <svg
                      viewBox="0 0 200 116"
                      className="h-full max-h-[150px] w-auto max-w-full"
                      preserveAspectRatio="xMidYMax meet"
                    >
                      <path
                        d="M22,110 A78,78 0 0 1 178,110"
                        fill="none"
                        stroke="#ece9fb"
                        strokeWidth="24"
                        strokeLinecap="round"
                      />
                      <path
                        d="M22,110 A78,78 0 0 1 119.4,34.5"
                        fill="none"
                        stroke="#5b53e8"
                        strokeWidth="24"
                        strokeLinecap="round"
                      />
                      <line
                        x1="100"
                        y1="110"
                        x2="122.9"
                        y2="20.9"
                        stroke="#4a41d6"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      <circle cx="100" cy="110" r="6" fill="#4a41d6" />
                    </svg>
                    <div className="mt-2 flex flex-col items-center">
                      <span className="text-2xl font-extrabold text-slate-800">
                        58,19%
                      </span>
                      <Delta dir="up" value="3.5%" />
                    </div>
                  </div>

                  <div className="mt-2 flex shrink-0 items-center justify-between text-[12px]">
                    <div className="flex items-center gap-2">
                      <Check
                        size={15}
                        className="text-[#22c55e]"
                        strokeWidth={3}
                      />
                      <span className="font-semibold text-slate-400">
                        Income
                      </span>
                      <span className="font-extrabold text-slate-700">
                        $542,317
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ArrowUpRight
                        size={15}
                        className="text-[#6c63e0]"
                        strokeWidth={3}
                      />
                      <span className="font-semibold text-slate-400">
                        Expences
                      </span>
                      <span className="font-extrabold text-slate-700">
                        $497,456
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
