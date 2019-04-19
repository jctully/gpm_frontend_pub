import React, { Component } from 'react';
import '../../App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

export default class Info extends Component {
    render() {
        return (
            <div>
                <h1>Info Page</h1>
                <p>Program Information</p>
                <a href="/info">
                    <button class="button">Info</button>
                </a>
                
                <Tabs>
                    <TabList>
                        <Tab>Prospective Students</Tab>
                        <Tab>Current Students</Tab>
                    </TabList>

                    <TabPanel>
                        <h2 class="tabBody">Info for Prospective Students</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2 class="tabBody">Info for Current Students</h2>
                    </TabPanel>
                </Tabs>
                
                
            </div>
        )
    }
     
}
