import React from 'react';
import AdobeXDInteractionMockup from './AdobeXDInteractionMockup.png'

const subtitleStyles={
    paddingTop: '2%',
    fontWeight:'500'
}

const mockUpStyles={
    height: '600px',
    width: '100%',
    paddingTop: '10px'
}

export function About() {

    return (
        <div style={{padding: '5%'}}>
            <h4 style={{fontWeight:500}}>About</h4>
            <h5 style={subtitleStyles}>Concept</h5>
            <p>The purpose of this App is to help make people more aware of the United Nation's Sustainable Development
                Goals (UNSDG's) based off their current location, eventbrite API, and Google Maps API.
                These API's will autopopulate events for the user based off the users preferred SDG's that they select when they first login.
            </p>
            <h5 style={subtitleStyles}>Problem</h5>
            <p>The problem that is being addressed is raising awareness about SDG events going on in local areas to foster
                a greater sense of community for both new and present members.
            </p>
            <h5 style={subtitleStyles}> Target Market</h5>
            <p>The target market is geared towards millenials and gen z in the local community. I polled my peers on Instagram, who are a mix of both, asking three questions specifically about SDG 13 (Climate Change):</p>
            <ol style={{padding:"10px"}}>
                <li> Assuming you believe in climate change, do you think you can make a difference to stop it? <b>A: Yes, 52/77, 68%  </b></li>
                <li> Have you ever thought about doing a career that aligns with stopping climate change using the skills you already have? <b>A: Yes, 18/63, 29% </b> </li>
                <li> Do you have resources that will help you find how to contribute to stop climate change outside of donating and recycling? <b>A: Yes, 24/59, 41%</b></li>
            </ol>
            <h5 style={subtitleStyles}>Analysis</h5>
            <p>The above results were very interesting to me and heavily inspired this idea. While it made me hopeful to see that more than half of my peers felt that they could make a difference
                to change SDG 13, it also made me worried that so many didn't, and some of it was because they felt they didn't have the resources to do so.
                This app would show them that there are opportunites for them to make a difference and expose them to a variety of SDG's.
            </p>
            <h5 style={subtitleStyles}>Process</h5>
            <h6>Brainstorm & Wireframe</h6>
            <p>
                The first thing I did when I got the challenge was list the requirements and then brainstorm how I could make an impact on someone who is new to a city but in a way that isn't usually done.
                I am very passionate about the SDG's so I also knew that I wanted to incorporate them. Since I knew my target market was my peers, I thought about
                the challenges we faced when we all moved to NorCal. It appeared the greatest challenge was meeting new people and creating a community.
                I thought about the resources we used to meet new people like Facebook Events and Eventbrite.
                Then it all clicked - the app should present the user with SDG options and then suggest events that they would be interested in. From a technical
                standpoint it would have the user login and click which SDG's they like. It will then pipe the titles and keywords from the SDG data into Eventbrite search and then
                autopopulate the list tab and map tab with events that match the user's preferences.
            </p>

            <h6>Adobe XD UI Mockup </h6>
            <p>
                The next step I took was to give more detail to my wireframes via <a href="https://xd.adobe.com/embed/98cbd7e5-0357-4a93-7bca-0bdd17707d40-eefa" target="_blank">interactive mockup on Adobe XD</a>. You can
                click on the below mockup and scroll through events, click on the SDG button to learn more about it, and also
                view events on the map tab!
                <br></br>
                <iframe width="375" height="700"
                        src="https://xd.adobe.com/embed/98cbd7e5-0357-4a93-7bca-0bdd17707d40-eefa/" frameBorder="0"
                        allowFullScreen></iframe>
                <br></br>

                Below is a snapshot of the interaction design to get the mockup above working correctly.
                <br></br>

                <img src={AdobeXDInteractionMockup} style={mockUpStyles}/>
            </p>

            <h6>Developing in ReactJS</h6>
            <p>
                I have been coding in ReactJS for about a month now. I did find this project very challenging as I was constantly
                learning new concepts as I went. For example, Eventbrite is the backbone of this web app, and I found I didn't have the knowledge to
                OAuth into Eventbrite. Given the time constraint I decided to alter my strategy because I found it was taking too long.
                There were other requirements that needed to be accomplished and with more time I am sure I can figure out how to OAuth but it was more important to me to deliver something rather than nothing.
                So instead I focused next on implementing the Firebase database, gathering the SDG data into it, setting up the layout of the app, and
                connecting to the Google Maps API. I had never used the Google Maps API, a cloud database, or created a drawer that needed routing. I learned a lot
                from this project.
            </p>
            <h6 style={subtitleStyles}>Next Steps</h6>
            <p>
                My next steps would be to learn how to OAuth into Eventbrite, parse the data from the api calls according to keywords for each SDG data, and pipe the events to the Maps and List tabs on the home screen.
                I would also need to learn how to implement cookies to be able to save the users SDG preferences and login state information.
                Lastly, I would implement better routing techniques so that the user can't reach the home page before being authenticated by the log in screen.

            </p>

        </div>

    )

}