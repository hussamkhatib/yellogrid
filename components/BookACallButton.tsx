"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

const CAL_LINK = "yellogrid/30min";

export default function BookACallButton({
  className,
}: {
  className?: string;
}) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#ffc72c" } },
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <button
      type="button"
      data-cal-link={CAL_LINK}
      data-cal-config='{"theme":"light","layout":"month_view"}'
      className={className}
    >
      Book a Call
    </button>
  );
}
