export function addNotification(state, title, body, time) {
  const notifications = [{ title, body, time }, ...(state.notifications || [])].slice(0, 30);
  return { ...state, notifications };
}

export function unreadNotificationCount(state) {
  return (state.notifications || []).length;
}
