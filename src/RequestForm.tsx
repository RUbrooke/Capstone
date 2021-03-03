import React, {useState, useEffect} from "react";
import { DateRangePicker } from "@commure/components-foundation";
import { Button } from "@commure/components-foundation";
import { FhirMethod, withFhirDataMutate, FhirDataMutateConsumer } from "@commure/components-data";
import { Resource, Bundle } from "@commure/fhir-types/r4/types";
import { Dropdown } from 'rsuite';

interface AnyResource extends Resource {
    [key: string]: any;
}
function MyDateRangePicker(){
/*function MyDateRangePicker(props: FhirDataMutateConsumer) {
    const { mutate } = props;
    const [outcome, setBundle] = useState<Bundle | undefined>(undefined);
    useEffect(() => {
        mutate({
            query: "ProcessRequest",
            body: {
                resourceType: "ProcessRequest",
                name: [{ given: ["joe"] }],
                gender: "female"
            } as AnyResource,
            method: FhirMethod.POST
        })
            .then((response: Response) => response.clone().json())
            .then(data => setBundle(data));
    }, [mutate]);*/
    const [startDate, setStartDate] = useState("___");
    const [endDate, setEndDate] = useState("___");
    const handleChange = (newDates) => {
        let dateArr = newDates.toString().split(",");
        setStartDate(dateArr[0].slice(0,16));
        setEndDate(dateArr[1].slice(0,16));
        }

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
            onChange={handleChange}/>
            <p><b>The dates you are requesting off are:</b></p><p>{startDate} to {endDate}</p>

            <p><b>Please select the priority for these days off:</b></p>
            <p style ={{marginLeft: "40px"}}>1: High (ex: holidays) </p>
            <p style ={{marginLeft: "40px"}}>2: Medium (ex: vacation)</p>
            <p style ={{marginLeft: "40px"}}>3: Low (ex: desired days out)</p>

            <Dropdown title="Priority">
                <Dropdown.Item>1</Dropdown.Item>
                <Dropdown.Item>2</Dropdown.Item>
                <Dropdown.Item>3</Dropdown.Item>
            </Dropdown>
     <Button icon="send-message">Submit</Button>
        </div>
        );

}

export default MyDateRangePicker;