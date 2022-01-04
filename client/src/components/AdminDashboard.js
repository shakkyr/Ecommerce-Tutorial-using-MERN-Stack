import React from 'react'

const AdminDashboard = () => {
    // !==================================
    //VIEWS
    // !=============================
    const showHeader = () => (
        <div className="bg-dark text-white">
            <div className="row">
                <div className="col-md-6">
                    <h1>
                        <i> Dashboard </i>
                    </h1>
                </div>
            </div>
        </div>
    )
    // !==================================
    //RENDER
    // !=============================
    return  <section> {showHeader()}</section>
    
}

export default AdminDashboard
