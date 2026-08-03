import "../style/todo.css";

function ToDo()
{

    return (<>
    <header className="hero">My Task List</header>
    <div className="container">
        <div className="row">
            <div className="item">
                <label>Add Task</label>
            </div>
             <div className="item">
                <input type="text"/>
             </div>
        </div>

         <div className="row">
            <div className="item">
                <label>Add Desc</label>
            </div>
             <div className="item">
                <textarea></textarea>
             </div>
        </div>

        <div className="row">
            <div className="item">
                <label>Task Type</label>
            </div>
             <div className="item">
                <select>
                    <option>Personal</option>
                     <option>College</option>
                      <option>Shopping</option>
                </select>
               
             </div>
        </div>
        <div className="row">
            <div className="item">
                <label>Due Date</label>
            </div>
             <div className="item">
                <input type="date"/>
             </div>
        </div>
        <div className="row">
            <div className="item">
                <label>Time</label>
            </div>
             <div className="item">
                <input type="time"/>
             </div>
        </div>
        <div className="row">
            <div className="item">
                
            </div>
             <div className="item">
                <button>Add</button>
             </div>
        </div>
    </div>
    </>)
}

export default ToDo;