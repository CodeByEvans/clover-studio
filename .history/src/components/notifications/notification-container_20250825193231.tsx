"use client";

import { useNotifications } from "@/contexts/notifications-context";
import NotificationPopup from "./notification-popup";

export default function NotificationContainer() {
  const { notifications } = useNotifications();

  return (
    <div className="fixed top-4 right-4 z-[9999] space-y-3 max-w-sm w-full">
      {notifications.map((notification) => (
        <NotificationPopup key={notification.id} notification={notification} />
      ))}
    </div>
  );
}
