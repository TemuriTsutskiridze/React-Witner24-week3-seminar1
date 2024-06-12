import PropTypes from "prop-types";

export default function Starter({ notifications, setNotifications }) {
  const markAllAsRead = () => {
    const updatedNotifications = notifications.map((notification) => {
      return { ...notification, isRead: true };
    });

    setNotifications(updatedNotifications);
  };

  // Derived State
  const counter = notifications.filter(
    (notification) => !notification.isRead
  ).length;

  return (
    <section>
      <h2>Notifications {counter}</h2>
      <p onClick={markAllAsRead} style={{ cursor: "pointer" }}>
        Mark all as read
      </p>
    </section>
  );
}

Starter.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profilePic: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      action: PropTypes.string.isRequired,
      post: PropTypes.string,
      groupName: PropTypes.string,
      time: PropTypes.string.isRequired,
      text: PropTypes.string,
      userPicture: PropTypes.string,
      isRead: PropTypes.bool.isRequired,
    })
  ).isRequired,
  setNotifications: PropTypes.func.isRequired,
};
