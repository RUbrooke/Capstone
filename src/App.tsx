//import { AppHeader, PatientCard } from "@commure/components-core";
import { CommureSmartApp, FhirDataQuery } from "@commure/components-data";
//import { Bundle, Patient } from "@commure/fhir-types/r4/types";
import SMARTClient from "@commure/smart-core";
import React from "react";
import "./App.css";
import { smartConfig } from "./config";
import HomePage from "./HomePage";
import MyInformation from "./MyInformation";

const smartClient = new SMARTClient(smartConfig);

function App() {
    return (
        <CommureSmartApp client={smartClient}>
           <MyInformation/>

        </CommureSmartApp>
    );
}

export default App;


