import React from 'react';
const item = ['card1', 'card2','card3','card4','card5'];
function Tasks() {
    return (
        <div>
            <div className="board-lists">
                <div className="board-list">
                    <div className="list-title">
                        Tasks
                    </div>
                    {item.map(i=><div className="card">
                        {i}
                    </div>)}
                    {/* <div className="card">
                        card 1
                    </div>
                    <div className="card">
                        card 2
                    </div>
                    <div className="card">
                        card 3
                    </div>
                    <div className="card">
                        card 4
                    </div>
                    <div className="card">
                        card 5
                    </div> */}
                    <div className="add-card">
                        + Add another card
                    </div>
                    
                </div>

                <div className="board-list">
                    <div className="list-title">
                        Working On It
                    </div>
                    <div className="card">
                        card 1
                    </div>
                    <div className="card">
                        card 2
                    </div>
                    <div className="card">
                        card 3
                    </div>
                    <div className="card">
                        card 4
                    </div>
                    <div className="card">
                        card 5
                    </div>
                    <div className="add-card">
                        + Add another card
                    </div>
                    
                </div>

                <div className="board-list">
                    <div className="list-title">
                        Ready
                    </div>
                    <div className="card">
                        card 1
                    </div>
                    <div className="card">
                        card 2
                    </div>
                    <div className="card">
                        card 3
                    </div>
                    <div className="card">
                        card 4
                    </div>
                    <div className="card">
                        card 5
                    </div>
                    <div className="add-card">
                        + Add another card
                    </div>
                    
                </div>


            </div>
        </div>
    )
};

export default Tasks;