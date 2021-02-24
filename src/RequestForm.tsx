import React, {useState} from "react";
import { DateRangePicker } from "@commure/components-foundation";
import { Button } from "@commure/components-foundation";



function MyDateRangePicker() {
    const [displayDates, setDisplayDates] = useState(0);
    // @ts-ignore
    return (
       /* <div style={{
            display: "inline",
            alignItems: "center",
            justifyContent: "center",
        }}>*/
        <div>
            <DateRangePicker
        shortcuts={false}
        singleMonthOnly = {true}
            allowSingleDayRange={true}
            //@ts-ignore
            onChange={(dateRange)=> setDisplayDates(dateRange)}/>
            <p> The dates you are requesting off are:  </p>
            {console.log(displayDates)}

     <Button icon="send-message">Submit</Button>
        </div>
        );

}

export default MyDateRangePicker;