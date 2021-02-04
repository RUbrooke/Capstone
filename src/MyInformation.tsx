import { AppHeader, PatientCard } from "@commure/components-core";
import { CommureSmartApp, FhirDataQuery } from "@commure/components-data";
import { Bundle, Practitioner } from "@commure/fhir-types/r4/types";
import SMARTClient from "@commure/smart-core";
import React from "react";
import "./App.css";
import { smartConfig } from "./config";
import { Card, Elevation, Intent } from "@commure/components-foundation";
import { Button } from "@commure/components-foundation";
import "@commure/components-core/lib/style.css"; // Once at the top of your application
import { FhirHumanName, FhirQuantity } from "@commure/components-core";



const smartClient = new SMARTClient(smartConfig);

function MyInformation() {
    return (
    <FhirDataQuery queryString="Practitioner">
        {({ data, loading }) => {
        if (loading) {
            return "Loading...";
        }
        if (!data) {
            return "Error loading data!";
        }
        const entries = (data as Bundle).entry!;
        if (!entries) {
            return "Data is empty! (Forgot to import?)";
        }
        /* Rendering each of the patients below here */
        const practitioner: Practitioner[] = entries.map(
            value => value.resource as Practitioner
        );


        return (
            <div>

                {practitioner.map((practitioner, index) => (


                        <Card interactive={false} elevation={Elevation.ZERO}>
                    <h5>
                        <FhirHumanName
                            value={{
            use: "official",
                text: "Alex Gilmour",
                family: "Gilmour",
                given: ["Alex"]
        }}
        />

        </h5>

        <p>Card content</p>
        <Button intent={Intent.PRIMARY}>Submit</Button>

            </Card>
    ))}

        </div>
    );
    }}
    </FhirDataQuery>
);
}

export default MyInformation;