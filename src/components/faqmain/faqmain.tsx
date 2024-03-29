import React from "react"
import "./faqmain.css"
import { Text } from "@fluentui/react"

const FaqMain: React.FunctionComponent = () => {
  return (
    <div className="faqmain-container">
      <div className="faqmain-heading">
        <Text as="h4" block variant="xLarge">
          Frequently Asked Questions
        </Text>
      </div>
      <div className="faqmain-content">
        <div className="faqmain-item">
          <Text as="h6" block variant="large">
            What are the system requirements to install Trici?
          </Text>
          <Text as="p" block variant="mediumPlus">
            Trici is currently available for macOS (10.12 or higher), Ubuntu
            Linux(20.10 or higher) and Windows (10 or higher). The system RAM should be 8 GB or more. For 
            macOS, separate builds are available for Intel and Apple Silicon.
          </Text>
        </div>
        <div className="faqmain-item">
          <Text as="h6" block variant="large">
            Where is my data stored?
          </Text>
          <Text as="p" block variant="mediumPlus">
            All Trici data, i.e. screen recordings, tasks, settings etc. is stored on your local system and is never sent to any remote location. Trici works even when you are completely offline.
          </Text>
        </div>
        <div className="faqmain-item">
          <Text as="h6" block variant="large">
            How much disk space do the recordings occupy?
          </Text>
          <Text as="p" block variant="mediumPlus">
            By default, the focus session recordings will occupy a maximum space
            of 2 GB, after which purging happens. The recording of a typical 30
            minute focus session occupies around 50-80 MB disk space.
          </Text>
        </div>        <div className="faqmain-item">
          <Text as="h6" block variant="large">
           What if I use multiple monitors?
          </Text>
          <Text as="p" block variant="mediumPlus">
             You can specify which screen to record in the settings. Currently, Trici can only record one screen.
          </Text>
        </div>
        <div className="faqmain-item">
          <Text as="h6" block variant="large">
            What is Smart Mode when viewing Recordings?
          </Text>
          <Text as="p" block variant="mediumPlus">
When viewing a recording in smart mode, the player plays at variable speeds, playing at much higher speeds, those portions of the session where the user was inactive. By default, the smart mode is switched on.
          </Text>
        </div>
        <div className="faqmain-item">
          <Text as="h6" block variant="large">
           Can Trici be used for other flavors of Linux?
          </Text>
          <Text as="p" block variant="mediumPlus">
            The build of Trici has been tested on Ubuntu 20.10. For older versions of Linux, a build will have to be published separately compatible with the version of GLIB_C installed on that version. A zip file of the build of Ubuntu 20.10 is availble which should work on other flavors of Linux. 
            You can reach out on email for any specific issues you may face. An email is sent to you with the download link when you submit a request. Just respond to that.  
          </Text>
        </div>
      </div>
    </div>
  )
}

export default FaqMain
