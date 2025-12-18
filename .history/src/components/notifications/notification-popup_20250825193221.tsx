"use client";

import { useState, useEffect } from "react";
import {
  X,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Info,
  Sparkles,
} from "lucide-react";
import {
  useNotifications,
  type Notification,
} from "@/contexts/notifications-context";

interface NotificationPopupProps {
  notification: Notification;
}

export default function NotificationPopup({
  notification,
}: NotificationPopupProps) {
  const { removeNotification } = useNotifications();
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    setTimeout(() => setIsVisible(true), 10);
  }, []);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      removeNotification(notification.id);
    }, 300);
  };

  const getNotificationStyles = () => {
    switch (notification.type) {
      case "success":
        return {
          bg: "bg-gradient-to-r from-[#BEE8CC] to-[#A7E0B4]",
          border: "border-[#8FD19E]",
          icon: CheckCircle,
          iconColor: "text-[#2D5A3D]",
          titleColor: "text-[#2D5A3D]",
          messageColor: "text-[#4A6B57]",
          closeColor: "text-[#4A6B57] hover:text-[#2D5A3D]",
        };
      case "error":
        return {
          bg: "bg-gradient-to-r from-[#FCA5A5] to-[#F87171]",
          border: "border-[#EF4444]",
          icon: XCircle,
          iconColor: "text-[#7F1D1D]",
          titleColor: "text-[#7F1D1D]",
          messageColor: "text-[#991B1B]",
          closeColor: "text-[#991B1B] hover:text-[#7F1D1D]",
        };
      case "warning":
        return {
          bg: "bg-gradient-to-r from-[#FDE68A] to-[#FCD34D]",
          border: "border-[#F59E0B]",
          icon: AlertTriangle,
          iconColor: "text-[#92400E]",
          titleColor: "text-[#92400E]",
          messageColor: "text-[#A16207]",
          closeColor: "text-[#A16207] hover:text-[#92400E]",
        };
      case "info":
        return {
          bg: "bg-gradient-to-r from-[#C9EAF3] to-[#A5D8E6]",
          border: "border-[#0EA5E9]",
          icon: Info,
          iconColor: "text-[#0C4A6E]",
          titleColor: "text-[#0C4A6E]",
          messageColor: "text-[#075985]",
          closeColor: "text-[#075985] hover:text-[#0C4A6E]",
        };
      default:
        return {
          bg: "bg-gradient-to-r from-[#F8C8DC] to-[#F5B8D1]",
          border: "border-[#8B1E3F]",
          icon: Sparkles,
          iconColor: "text-[#8B1E3F]",
          titleColor: "text-[#8B1E3F]",
          messageColor: "text-[#8B1E3F]",
          closeColor: "text-[#8B1E3F] hover:text-[#7a1a37]",
        };
    }
  };

  const styles = getNotificationStyles();
  const IconComponent = styles.icon;

  return (
    <div
      className={`transform transition-all duration-300 ease-out ${
        isVisible && !isExiting
          ? "translate-x-0 opacity-100 scale-100"
          : isExiting
          ? "translate-x-full opacity-0 scale-95"
          : "translate-x-full opacity-0 scale-95"
      }`}
    >
      <div
        className={`${styles.bg} ${styles.border} border-2 rounded-2xl p-4 shadow-2xl backdrop-blur-sm relative overflow-hidden max-w-sm`}
      >
        {/* Decorative sparkles */}
        <div className="absolute top-2 right-12 opacity-20">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        <div className="absolute bottom-2 left-8 opacity-10">
          <Sparkles className="w-3 h-3 text-white" />
        </div>

        <div className="flex items-start gap-3">
          {/* Icon */}
          <div
            className={`flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transform transition-all duration-500 ${
              isVisible ? "rotate-0 scale-100" : "rotate-180 scale-0"
            }`}
          >
            <IconComponent className={`w-5 h-5 ${styles.iconColor}`} />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h4 className={`font-bold ${styles.titleColor} mb-1 text-sm`}>
              {notification.title}
            </h4>
            <p className={`${styles.messageColor} text-sm leading-relaxed`}>
              {notification.message}
            </p>

            {/* Action button */}
            {notification.action && (
              <button
                onClick={notification.action.onClick}
                className={`mt-3 px-3 py-1 bg-white/20 hover:bg-white/30 ${styles.titleColor} rounded-lg text-xs font-semibold transition-all duration-200 hover:scale-105 active:scale-95`}
              >
                {notification.action.label}
              </button>
            )}
          </div>

          {/* Close button */}
          <button
            onClick={handleClose}
            className={`flex-shrink-0 p-1 ${styles.closeColor} hover:bg-white/20 rounded-full transition-all duration-200 hover:scale-110 active:scale-95`}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Progress bar */}
        {notification.duration && notification.duration > 0 && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 overflow-hidden">
            <div
              className="h-full bg-white/40 transform origin-left transition-transform ease-linear"
              style={{
                animation: `shrink ${notification.duration}ms linear`,
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
