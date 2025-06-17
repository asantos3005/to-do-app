import sidebarIcon from "../sidebarIcon.svg";

export default function SideBar({ sidebarState, toggleSideBar }) {
  return (
    <aside className={`sidebar ${sidebarState === "open" ? "expanded" : "collapsed"}`} id="sidebar">
      <div className="profileMenu">
        <p>Profile</p>
        <img src={sidebarIcon} alt="Toggle Sidebar" onClick={toggleSideBar} className="sidebarToggle" />
      </div>
      <div className="addTaskMenu"><p>Add Task</p></div>
      <div className="todayMenu"><p>Today</p></div>
      <div className="upcomingMenu"><p>Upcoming</p></div>
    </aside>
  );
}