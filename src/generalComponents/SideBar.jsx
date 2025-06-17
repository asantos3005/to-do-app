import sidebarIcon from "../sidebarIcon.svg"


export default function SideBar(){

    return(
        <aside className="sidebar expanded">
            <div className="profileMenu">
                <p>Profile</p>
                <img src={sidebarIcon} alt="" />

            </div>
             <div className="addTaskMenu">
                <p>Add Task</p>

            </div>
             <div className="todayMenu">
                <p>Today</p>

            </div>
             <div className="upcomingMenu">
                <p>Upcoming</p>

            </div>
        </aside>
    )
}