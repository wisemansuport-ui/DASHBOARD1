export const requestNotificationPermission = async () => {
  if (!("Notification" in window)) {
    console.warn("Este navegador não suporta notificações de sistema.");
    return false;
  }
  
  if (Notification.permission === "granted") {
    return true;
  }

  if (Notification.permission !== "denied") {
    const permission = await Notification.requestPermission();
    return permission === "granted";
  }

  return false;
};

export const pushNotify = (title: string, body: string) => {
  if (!("Notification" in window)) return;
  
  if (Notification.permission === "granted") {
    new Notification(title, {
      body,
      icon: '/vite.svg', // generic fallback icon
      badge: '/vite.svg'
    });
  }
};
