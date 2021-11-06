import humanizeDuration from "humanize-duration";
import { DateTime } from "luxon";

const Duration = ({ startDate, endDate }) => {
  const end = endDate || DateTime.now();

  return (
    <div>
      {startDate.toLocaleString({ month: "short", year: "numeric" })} -{" "}
      {endDate
        ? endDate.toLocaleString({ month: "short", year: "numeric" })
        : "Present"}{" "}
      |{" "}
      {humanizeDuration(end.diff(startDate), {
        units: ["y", "mo"],
        round: true,
      })}
    </div>
  );
};

export default Duration;
