import "./Profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <div className="user-info">
        <h1>Profile</h1>
        <div className="field">
          <label>Username</label>
          <span>JohnDoe</span>
        </div>
        <div className="field">
          <label>Email</label>
          <span>johndoe@example.com</span>
        </div>
        <div className="field">
          <label>Password</label>
          <span>••••••••</span>
          <a className="change-password" href="#change-password">Change Password</a>
        </div>
      </div>
      <div className="orders">
        <h2>Your Orders</h2>
        {/* Loop through orders and display them here */}
      </div>
    </div>
  );
}

export default Profile;
