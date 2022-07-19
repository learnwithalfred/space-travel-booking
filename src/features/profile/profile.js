import React from 'react';

const ProfilePage = () => (
  <div className="container my-4">
    <div className="row align-items-md-stretch">
      <div className="col-md-6">
        <div className="h-100 p-2 text-dark bg-light rounded-3">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
            tempore nesciunt quos illo asperiores aspernatur fugit maxime saepe
            nostrum natus. Eligendi, omnis libero!
          </p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="h-100 p-2 bg-light rounded-3">
          <h2>My Rockets</h2>
          <table className="table table-hover">
            <tr>Mark</tr>
            <tr>Mark</tr>
            <tr>
              <td>Mark</td>
            </tr>
            <tr>Mark</tr>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default ProfilePage;
