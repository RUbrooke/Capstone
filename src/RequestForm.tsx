import React from "react";
import { DateRangePicker } from "@commure/components-foundation";

function MyDateRangePicker() {
    return <DateRangePicker
        shortcuts={false}
        singleMonthOnly = {true}
    />;
}

export default MyDateRangePicker;