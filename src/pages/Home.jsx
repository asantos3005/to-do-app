import sidebarIcon from "../sidebarIcon.svg";

export default function Home({ sidebarState, toggleSideBar }) {
  return (
    <main>
        {/* Toggle button for sidebar on main page - if sidebar is open, hide toggle button on main page so there won't be 2 toggle buttons on screen at same time */}
      <img src={sidebarIcon} alt="Toggle Sidebar" onClick={toggleSideBar} className={`mainSidebarToggle ${sidebarState === "open" ? "hidden" : "showing"}`} />
      <div className="todoListContainer">
            <h1>ToDo List</h1>
            <ToDoItem />
      </div>
    </main>
  );
}

function ToDoItem(){

    return(
    <div className="toDoItem">
        <p>to do placehoder</p>
    </div>
    )
}
