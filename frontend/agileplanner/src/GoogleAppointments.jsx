import { useEffect, useRef } from "react";

const GoogleCalendarButton = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const scriptId = "google-calendar-script";

    if (!document.getElementById(scriptId)) {
      const link = document.createElement("link");
      link.href = "https://calendar.google.com/calendar/scheduling-button-script.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);

      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://calendar.google.com/calendar/scheduling-button-script.js";
      script.async = true;
      script.onload = () => {
        if (window.calendar && buttonRef.current) {
          window.calendar.schedulingButton.load({
            url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2qKgpOy-r2bBtoHSPAhUcRf6Pav8jUkwjyk83oVGxTUZCYyXuq43-DTtnUCig2UwGdyioU4g2p?gv=true",
            color: "#039BE5",
            label: "Book an appointment",
            target: buttonRef.current,
          });
        }
      };
      document.body.appendChild(script);
    } else if (window.calendar && buttonRef.current) {
      window.calendar.schedulingButton.load({
        url: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2qKgpOy-r2bBtoHSPAhUcRf6Pav8jUkwjyk83oVGxTUZCYyXuq43-DTtnUCig2UwGdyioU4g2p?gv=true",
        color: "#039BE5",
        label: "Book an appointment",
        target: buttonRef.current,
      });
    }
  }, []);

  return <div ref={buttonRef}></div>;
};

export default GoogleCalendarButton;
