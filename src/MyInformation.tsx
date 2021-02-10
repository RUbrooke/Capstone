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
import { FhirHumanName, FhirQuantity, FhirDateTime } from "@commure/components-core";



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
                const practitioners: Practitioner[] = entries.map(
                    value => value.resource as Practitioner
                );



                return (
                    <div>

                        {
                            practitioners.map((practitioner, index) => {
                                // @ts-ignore
                                var name = practitioner.name[0]
                                // @ts-ignore
                                var IDandInfo = practitioner.identifier
                                // @ts-ignore
                                if (index == 0){
                                    // @ts-ignore

                                    return (

                                    <div>
                                    <Card key = {index} interactive={false} elevation={Elevation.ZERO}>
                                        <FhirHumanName key = {index}
                                            value={{
                                                text: name.text,
                                                suffix: name.suffix,

                                            }}
                                        />
                                        <FhirDateTime
                                            value={
                                                // @ts-ignore

                                                IDandInfo[0].period.start
                                            }
                                            />

                                    </Card>
                                    </div>
                                )}
                            })
                        }
                    </div>
                );
            }}
        </FhirDataQuery>
    );
}

export default MyInformation;