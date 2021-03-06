import { AppHeader, PatientCard } from "@commure/components-core";
import React from "react";
import "./App.css";
import { Icon } from "@commure/components-foundation";
import { LeftPanelLayout } from "@commure/components-foundation";
import MyInformation from "./MyInformation";
import RequestForm from "./RequestForm";
import Schedule from "./Schedule";




const componentPanel = Content => (
    <div
        style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}
    >
        <Content/>
    </div>
);
const formPanel = componentPanel(RequestForm)
const infoPanel = componentPanel(MyInformation)
const reportPanel = componentPanel(Schedule)

const stateSwitch = (param) => {
    switch(param) {
        case 'My Information':
            return infoPanel;
        case 'My Schedule':
            return reportPanel;
        case 'Request Form':
            return formPanel;
    }
}

const HomePage = () => {
    const [openPanel, setOpenPanel] = React.useState("");

    const visiblePanel = stateSwitch(openPanel);


    return (
        <div>



            {/* Application header */}
            <AppHeader
                showFullUserName={false}
                appName="QuickShift"
                logo={<Icon icon="pulse" />}
            />
            {/* Application content */}
            <div style={{ display: "flex" }}>
                {/* Application menu */}
                <LeftPanelLayout
                    panelTitle={"Menu"}
                    panelBody={[
                        <div>
                            <a onClick={() => setOpenPanel("My Information")}>My Information</a>
                        </div>,
                        <div>
                            <a onClick={() => setOpenPanel("My Schedule")}>My Schedule</a>
                        </div>,
                        <div>
                            <a onClick={() => setOpenPanel("Request Form")}>Request Form</a>
                        </div>
                    ]}
                    collapsible={true}
                    defaultClosed={false}
                />
                {/* Application panel */}
                {visiblePanel}
            </div>
        </div>
    );
};

export default HomePage;